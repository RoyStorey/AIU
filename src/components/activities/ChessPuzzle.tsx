"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { motion } from "motion/react";
import type { Activity } from "@/lib/schema";
import { XP } from "@/lib/game";
import { fetchPuzzle, uciToMove, type Puzzle } from "@/lib/puzzles";
import { hashString } from "@/lib/links";
import { play } from "@/lib/sound";
import { burst } from "../Celebrations";
import type { ActivityProps } from "./Activity";

type Status = "loading" | "solving" | "wrong" | "solved";

export function ChessPuzzle({ activity, onResult }: ActivityProps & { activity: Activity }) {
  const [puzzle, setPuzzle] = useState<Puzzle | null>(null);
  const [fen, setFen] = useState("");
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<Status>("loading");
  const [mistakes, setMistakes] = useState(0);
  const [hint, setHint] = useState(false);
  const [round, setRound] = useState(0);
  const game = useRef(new Chess());

  const load = useCallback(async () => {
    setStatus("loading");
    const p = await fetchPuzzle(activity.chessTheme, hashString(activity.id) + round);
    game.current = new Chess(p.fen);
    setPuzzle(p);
    setFen(p.fen);
    setStep(0);
    setMistakes(0);
    setHint(false);
    setStatus("solving");
  }, [activity.chessTheme, activity.id, round]);

  useEffect(() => {
    void load();
  }, [load]);

  const solverColor = puzzle ? (new Chess(puzzle.fen).turn() === "w" ? "white" : "black") : "white";

  function onDrop({ sourceSquare, targetSquare }: { sourceSquare: string; targetSquare: string | null }) {
    if (!puzzle || !targetSquare || status === "solved" || status === "loading") return false;
    const expected = puzzle.solution[step];
    const g = game.current;
    let move;
    try {
      move = g.move({ from: sourceSquare, to: targetSquare, promotion: expected?.[4] ?? "q" });
    } catch {
      return false; // illegal: piece snaps back
    }
    const uci = move.from + move.to + (move.promotion ?? "");
    // Any checkmate counts, even if it isn't the line Lichess stored.
    if (uci !== expected && !g.isCheckmate()) {
      g.undo();
      setMistakes((m) => m + 1);
      setStatus("wrong");
      play("wrong");
      return false;
    }
    setFen(g.fen());
    play("correct");
    const nextStep = step + 1;
    if (nextStep >= puzzle.solution.length || g.isCheckmate()) {
      setStatus("solved");
      burst(1);
      onResult({ score: mistakes ? 70 : 100 }, XP.chess, "Puzzle solved!");
      return true;
    }
    setStatus("solving");
    setHint(false);
    setTimeout(() => {
      g.move(uciToMove(puzzle.solution[nextStep]));
      setFen(g.fen());
      setStep(nextStep + 1);
      play("click");
    }, 450);
    return true;
  }

  const hintSquare = hint && puzzle ? puzzle.solution[step]?.slice(0, 2) : null;

  return (
    <div>
      <p className="font-serif text-lg">{activity.prompt}</p>
      <div className="mt-4 grid items-start gap-5 md:grid-cols-[minmax(0,420px)_1fr]">
        <motion.div
          animate={status === "wrong" ? { x: [0, -10, 10, -6, 6, 0] } : {}}
          key={mistakes}
          className="overflow-hidden rounded-xl border-[3px] border-ink shadow-pop"
        >
          {fen ? (
            <Chessboard
              options={{
                id: activity.id,
                position: fen,
                boardOrientation: solverColor,
                onPieceDrop: onDrop,
                canDragPiece: ({ piece }) => piece.pieceType[0] === (solverColor === "white" ? "w" : "b"),
                darkSquareStyle: { backgroundColor: "#9b5de5" },
                lightSquareStyle: { backgroundColor: "#fff0bd" },
                squareStyles: hintSquare ? { [hintSquare]: { boxShadow: "inset 0 0 0 5px #ff5a36" } } : {},
                animationDurationInMs: 250,
              }}
            />
          ) : (
            <div className="grid aspect-square place-items-center bg-grape-soft text-5xl">♞</div>
          )}
        </motion.div>
        <div className="space-y-3">
          <div className={`rounded-xl border-[3px] border-ink p-4 ${status === "solved" ? "bg-mint" : status === "wrong" ? "bg-tomato-soft" : "bg-card"}`}>
            <div className="font-mono text-xs font-bold uppercase">
              {status === "loading" ? "Setting up the board…" : `${solverColor} to move`}
            </div>
            <div className="mt-1 text-xl font-black">
              {status === "solved"
                ? "Brilliant! ♛"
                : status === "wrong"
                  ? "Not that one. Look again!"
                  : status === "loading"
                    ? "…"
                    : step === 0
                      ? "Find the best move."
                      : "Good! Keep going…"}
            </div>
            {puzzle && (
              <div className="mt-2 flex flex-wrap gap-1.5">
                {puzzle.rating && <span className="chip bg-sun-soft text-xs">Rating {puzzle.rating}</span>}
                {puzzle.themes.slice(0, 3).map((t) => (
                  <span key={t} className="chip bg-card text-xs">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {status !== "solved" && (
              <button className="btn bg-sun" onClick={() => setHint(true)} disabled={status === "loading"}>
                💡 Hint
              </button>
            )}
            <button className="btn bg-card" onClick={() => setRound((r) => r + 1)} disabled={status === "loading"}>
              🎲 New puzzle
            </button>
          </div>
          {puzzle?.url && (
            <a href={puzzle.url} target="_blank" rel="noreferrer" className="block font-mono text-xs underline opacity-70">
              Puzzle #{puzzle.id} from the Lichess database ↗
            </a>
          )}
          {puzzle?.source === "classic" && (
            <p className="font-mono text-xs opacity-60">A classic pattern from AIU&apos;s own collection.</p>
          )}
        </div>
      </div>
    </div>
  );
}

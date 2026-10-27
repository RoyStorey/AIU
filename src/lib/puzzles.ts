import { Chess } from "chess.js";

export type Puzzle = {
  id: string;
  fen: string;
  /** UCI moves; even indexes are the solver's, odd are the opponent's replies. */
  solution: string[];
  rating?: number;
  themes: string[];
  source: "lichess" | "classic";
  url?: string;
};

/* Hand-picked classics, verified by scripts/check-puzzles.mts, used when Lichess can't be reached. */
export const CLASSIC_PUZZLES: Puzzle[] = [
  { id: "back-rank", fen: "6k1/5ppp/8/8/8/8/5PPP/3R2K1 w - - 0 1", solution: ["d1d8"], themes: ["backRankMate", "mateIn1"], source: "classic" },
  { id: "smothered", fen: "6rk/6pp/7N/8/8/8/8/6K1 w - - 0 1", solution: ["h6f7"], themes: ["smotheredMate", "mateIn1"], source: "classic" },
  { id: "scholars", fen: "r1bqkb1r/pppp1ppp/2n2n2/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR w KQkq - 4 4", solution: ["h5f7"], themes: ["mateIn1", "opening"], source: "classic" },
  { id: "ladder", fen: "6k1/R7/1R6/8/8/8/8/6K1 w - - 0 1", solution: ["b6b8"], themes: ["mateIn1", "endgame"], source: "classic" },
  { id: "royal-fork", fen: "3q4/6k1/8/8/3N4/8/8/4K3 w - - 0 1", solution: ["d4e6", "g7f6", "e6d8"], themes: ["fork"], source: "classic" },
  { id: "skewer", fen: "8/8/2k4q/8/8/8/8/R5K1 w - - 0 1", solution: ["a1a6", "c6c7", "a6h6"], themes: ["skewer"], source: "classic" },
];

const LICHESS_THEMES = new Set([
  "fork", "pin", "skewer", "mateIn1", "mateIn2", "mateIn3", "backRankMate", "smotheredMate", "discoveredAttack",
  "doubleCheck", "sacrifice", "deflection", "attraction", "decoy", "hangingPiece", "trappedPiece", "zugzwang",
  "endgame", "middlegame", "opening", "short", "long", "crushing", "advantage", "promotion", "quietMove",
  "xRayAttack", "intermezzo", "clearance", "interference", "kingsideAttack", "queensideAttack", "rookEndgame",
  "pawnEndgame", "knightEndgame", "bishopEndgame", "queenEndgame", "mix",
]);

export function classicFor(theme: string, seed = 0): Puzzle {
  const matches = CLASSIC_PUZZLES.filter((p) => p.themes.includes(theme));
  const pool = matches.length ? matches : CLASSIC_PUZZLES;
  return pool[seed % pool.length];
}

type LichessResponse = {
  game: { pgn: string };
  puzzle: { id: string; initialPly: number; solution: string[]; rating: number; themes: string[] };
};

/** Rebuild the puzzle position from the game PGN; Lichess puzzles start after ply `initialPly`. */
function positionFrom(data: LichessResponse): string | null {
  const replay = new Chess();
  replay.loadPgn(data.game.pgn);
  const history = replay.history({ verbose: true });
  for (const plies of [history.length, data.puzzle.initialPly + 1]) {
    const board = new Chess();
    for (const m of history.slice(0, plies)) board.move(m.san);
    try {
      board.move(uciToMove(data.puzzle.solution[0]));
      board.undo();
      return board.fen();
    } catch {
      /* first solution move illegal here: try the other ply count */
    }
  }
  return null;
}

export function uciToMove(uci: string) {
  return { from: uci.slice(0, 2), to: uci.slice(2, 4), promotion: uci[4] };
}

export async function fetchPuzzle(theme: string, seed = 0): Promise<Puzzle> {
  const angle = LICHESS_THEMES.has(theme) ? theme : "mix";
  try {
    const res = await fetch(`https://lichess.org/api/puzzle/next?angle=${angle}`, { headers: { Accept: "application/json" } });
    if (!res.ok) throw new Error(String(res.status));
    const data = (await res.json()) as LichessResponse;
    const fen = positionFrom(data);
    if (!fen) throw new Error("unreadable puzzle");
    return {
      id: data.puzzle.id,
      fen,
      solution: data.puzzle.solution,
      rating: data.puzzle.rating,
      themes: data.puzzle.themes,
      source: "lichess",
      url: `https://lichess.org/training/${data.puzzle.id}`,
    };
  } catch {
    return classicFor(theme, seed);
  }
}

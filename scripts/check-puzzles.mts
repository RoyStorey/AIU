// Verifies every classic puzzle: each move is legal, and mate puzzles end in checkmate.
import { Chess } from "chess.js";
import { CLASSIC_PUZZLES, uciToMove } from "../src/lib/puzzles.ts";

let failed = 0;
for (const p of CLASSIC_PUZZLES) {
  const g = new Chess(p.fen);
  try {
    for (const m of p.solution) g.move(uciToMove(m));
    const mate = p.themes.some((t) => t.toLowerCase().includes("mate"));
    if (mate && !g.isCheckmate()) throw new Error("does not end in checkmate");
    console.log(`ok   ${p.id}${mate ? " (mate)" : ""} -> ${g.fen()}`);
  } catch (e) {
    failed++;
    console.log(`FAIL ${p.id}: ${(e as Error).message}`);
  }
}
process.exit(failed ? 1 : 0);

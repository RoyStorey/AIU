/**
 * A stable permutation of n items for a given key. Each knowledge-check
 * question shows its choices in a fixed but unpredictable order, so the
 * position of the correct answer reveals nothing, however the question was written.
 * order[k] is the original index of the choice shown in position k.
 */
export function permutation(n: number, key: string): number[] {
  let h = 2166136261;
  for (let i = 0; i < key.length; i++) {
    h ^= key.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  const next = () => {
    h ^= h << 13;
    h ^= h >>> 17;
    h ^= h << 5;
    return (h >>> 0) / 4294967296;
  };
  const order = Array.from({ length: n }, (_, i) => i);
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(next() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return order;
}

export const choiceOrder = (courseId: string, lesson: number, question: number, n: number) =>
  permutation(n, `${courseId}:${lesson}:${question}`);

import type { Quote } from '@/data/quotes';

/**
 * Seeded simple RNG (mulberry32) so the same date + struggleIds produce the same quote.
 */
function seededRandom(seed: number): () => number {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hashString(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    const c = str.charCodeAt(i);
    h = (h << 5) - h + c;
    h = h & h;
  }
  return Math.abs(h);
}

/**
 * Returns the daily nugget for a given date and user's selected struggles.
 * Pool A = quotes matching at least one struggle; Pool B = rest.
 * ~75% from Pool A, ~25% from Pool B (or 100% from B if A is empty).
 */
export function getDailyNugget(
  date: string,
  struggleIds: string[],
  quotes: Quote[]
): Quote {
  const seed = hashString(date + struggleIds.sort().join(','));
  const random = seededRandom(seed);

  const poolA = quotes.filter((q) =>
    q.struggleIds.some((sid) => struggleIds.includes(sid))
  );
  const poolB = quotes.filter(
    (q) => !q.struggleIds.some((sid) => struggleIds.includes(sid))
  );

  const usePoolA = poolA.length > 0 && random() < 0.75;
  const pool = usePoolA ? poolA : poolB;
  const index = Math.floor(random() * pool.length) % pool.length;
  return pool[index] ?? quotes[0]!;
}

/**
 * Returns today's date string in local timezone (YYYY-MM-DD).
 */
export function getTodayDateString(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

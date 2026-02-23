import { useCallback, useEffect, useState } from 'react';
import type { Quote } from '@/data/quotes';
import { QUOTES } from '@/data/quotes';
import { getDailyNugget, getTodayDateString } from '@/lib/dailyNugget';
import { getDailyNuggetCache, setDailyNuggetCache } from '@/lib/storage';

export function useDailyNugget(selectedStruggleIds: string[]): {
  quote: Quote | null;
  loading: boolean;
  refresh: () => Promise<void>;
} {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    const today = getTodayDateString();
    const cache = await getDailyNuggetCache();
    if (cache?.date === today && cache.quoteId) {
      const cached = QUOTES.find((q) => q.id === cache.quoteId);
      if (cached) {
        setQuote(cached);
        setLoading(false);
        return;
      }
    }
    const nugget = getDailyNugget(today, selectedStruggleIds, QUOTES);
    setQuote(nugget);
    await setDailyNuggetCache({ date: today, quoteId: nugget.id });
    setLoading(false);
  }, [selectedStruggleIds.join(',')]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return { quote, loading, refresh };
}

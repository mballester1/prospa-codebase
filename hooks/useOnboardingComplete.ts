import { useCallback, useEffect, useState } from 'react';
import { getOnboardingComplete } from '@/lib/storage';

export function useOnboardingComplete(): {
  complete: boolean | null;
  refresh: () => Promise<void>;
} {
  const [complete, setComplete] = useState<boolean | null>(null);

  const refresh = useCallback(async () => {
    const value = await getOnboardingComplete();
    setComplete(value);
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return { complete, refresh };
}

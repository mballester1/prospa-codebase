import { useCallback, useEffect, useState } from 'react';
import { getUserId, signOut as authSignOut, isConfigured } from '@/lib/auth';

export function useAuth(): {
  userId: string | null;
  configured: boolean;
  signOut: () => Promise<void>;
  refresh: () => Promise<void>;
} {
  const [userId, setUserId] = useState<string | null>(null);
  const [configured, setConfigured] = useState(false);

  const refresh = useCallback(async () => {
    const [id, config] = await Promise.all([getUserId(), isConfigured()]);
    setUserId(id);
    setConfigured(config);
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const signOut = useCallback(async () => {
    await authSignOut();
    setUserId(null);
  }, []);

  return { userId, configured, signOut, refresh };
}

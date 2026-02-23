import { useCallback, useEffect, useState } from 'react';
import type { Theme } from '@/lib/storage';
import {
  getSelectedStruggleIds,
  getNotificationTime,
  getTheme,
  setSelectedStruggleIds,
  setNotificationTime,
  setTheme,
} from '@/lib/storage';
import { pushPreferences } from '@/lib/sync';

export function useUserPreferences(): {
  selectedStruggleIds: string[];
  notificationTime: string | null;
  theme: Theme;
  loading: boolean;
  setStruggles: (ids: string[]) => Promise<void>;
  setNotificationTimeValue: (value: string | null) => Promise<void>;
  setThemeValue: (value: Theme) => Promise<void>;
  refresh: () => Promise<void>;
} {
  const [selectedStruggleIds, setStruggleIdsState] = useState<string[]>([]);
  const [notificationTime, setNotificationTimeState] = useState<string | null>(null);
  const [theme, setThemeState] = useState<Theme>('system');
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    const [struggles, notifTime, themeValue] = await Promise.all([
      getSelectedStruggleIds(),
      getNotificationTime(),
      getTheme(),
    ]);
    setStruggleIdsState(struggles);
    setNotificationTimeState(notifTime);
    setThemeState(themeValue);
    setLoading(false);
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const setStruggles = useCallback(async (ids: string[]) => {
    await setSelectedStruggleIds(ids);
    setStruggleIdsState(ids);
    await pushPreferences();
  }, []);

  const setNotificationTimeValue = useCallback(async (value: string | null) => {
    await setNotificationTime(value);
    setNotificationTimeState(value);
    await pushPreferences();
  }, []);

  const setThemeValue = useCallback(async (value: Theme) => {
    await setTheme(value);
    setThemeState(value);
    await pushPreferences();
  }, []);

  return {
    selectedStruggleIds,
    notificationTime,
    theme,
    loading,
    setStruggles,
    setNotificationTimeValue,
    setThemeValue,
    refresh,
  };
}

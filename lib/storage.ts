import AsyncStorage from '@react-native-async-storage/async-storage';

const KEYS = {
  ONBOARDING_COMPLETE: '@marcus/onboarding_complete',
  SELECTED_STRUGGLES: '@marcus/selected_struggle_ids',
  NOTIFICATION_TIME: '@marcus/notification_time',
  HAS_SEEN_NOTIFICATION_PROMPT: '@marcus/has_seen_notification_prompt',
  THEME: '@marcus/theme',
  DAILY_NUGGET_CACHE: '@marcus/daily_nugget_cache',
} as const;

export type Theme = 'light' | 'dark' | 'system';

export interface UserPreferences {
  onboardingComplete: boolean;
  selectedStruggleIds: string[];
  notificationTime?: string | null;
  hasSeenNotificationPrompt?: boolean;
  theme?: Theme;
}

export async function getOnboardingComplete(): Promise<boolean> {
  const v = await AsyncStorage.getItem(KEYS.ONBOARDING_COMPLETE);
  return v === 'true';
}

export async function setOnboardingComplete(value: boolean): Promise<void> {
  await AsyncStorage.setItem(KEYS.ONBOARDING_COMPLETE, value ? 'true' : 'false');
}

export async function getSelectedStruggleIds(): Promise<string[]> {
  const json = await AsyncStorage.getItem(KEYS.SELECTED_STRUGGLES);
  if (!json) return [];
  try {
    const arr = JSON.parse(json);
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

export async function setSelectedStruggleIds(ids: string[]): Promise<void> {
  await AsyncStorage.setItem(KEYS.SELECTED_STRUGGLES, JSON.stringify(ids));
}

export async function getNotificationTime(): Promise<string | null> {
  return AsyncStorage.getItem(KEYS.NOTIFICATION_TIME);
}

export async function setNotificationTime(value: string | null): Promise<void> {
  if (value == null) await AsyncStorage.removeItem(KEYS.NOTIFICATION_TIME);
  else await AsyncStorage.setItem(KEYS.NOTIFICATION_TIME, value);
}

export async function getHasSeenNotificationPrompt(): Promise<boolean> {
  const v = await AsyncStorage.getItem(KEYS.HAS_SEEN_NOTIFICATION_PROMPT);
  return v === 'true';
}

export async function setHasSeenNotificationPrompt(value: boolean): Promise<void> {
  await AsyncStorage.setItem(KEYS.HAS_SEEN_NOTIFICATION_PROMPT, value ? 'true' : 'false');
}

export async function getTheme(): Promise<Theme> {
  const v = await AsyncStorage.getItem(KEYS.THEME);
  if (v === 'light' || v === 'dark' || v === 'system') return v;
  return 'system';
}

export async function setTheme(value: Theme): Promise<void> {
  await AsyncStorage.setItem(KEYS.THEME, value);
}

export interface DailyNuggetCache {
  date: string;
  quoteId: string;
}

export async function getDailyNuggetCache(): Promise<DailyNuggetCache | null> {
  const json = await AsyncStorage.getItem(KEYS.DAILY_NUGGET_CACHE);
  if (!json) return null;
  try {
    return JSON.parse(json) as DailyNuggetCache;
  } catch {
    return null;
  }
}

export async function setDailyNuggetCache(cache: DailyNuggetCache): Promise<void> {
  await AsyncStorage.setItem(KEYS.DAILY_NUGGET_CACHE, JSON.stringify(cache));
}

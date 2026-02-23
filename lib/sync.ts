import { getUserId } from '@/lib/auth';
import {
  getSelectedStruggleIds,
  getNotificationTime,
  getTheme,
  setSelectedStruggleIds,
  setNotificationTime,
  setTheme,
} from '@/lib/storage';

const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

type PrefsRow = {
  selected_struggle_ids: string[];
  notification_time: string | null;
  theme: string;
};

async function getClient() {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return null;
  const { createClient } = await import('@supabase/supabase-js');
  return createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

/**
 * Fetch preferences from Supabase and merge into local storage (backend wins).
 */
export async function pullPreferences(): Promise<void> {
  const userId = await getUserId();
  if (!userId) return;
  const client = await getClient();
  if (!client) return;
  const { data, error } = await client
    .from('user_preferences')
    .select('selected_struggle_ids, notification_time, theme')
    .eq('user_id', userId)
    .single();
  if (error || !data) return;
  const row = data as PrefsRow;
  if (Array.isArray(row.selected_struggle_ids))
    await setSelectedStruggleIds(row.selected_struggle_ids);
  if (row.notification_time !== undefined)
    await setNotificationTime(row.notification_time);
  if (row.theme === 'light' || row.theme === 'dark' || row.theme === 'system')
    await setTheme(row.theme);
}

/**
 * Push current local preferences to Supabase.
 */
export async function pushPreferences(): Promise<void> {
  const userId = await getUserId();
  if (!userId) return;
  const client = await getClient();
  if (!client) return;
  const [selectedStruggleIds, notificationTime, theme] = await Promise.all([
    getSelectedStruggleIds(),
    getNotificationTime(),
    getTheme(),
  ]);
  await client.from('user_preferences').upsert(
    {
      user_id: userId,
      selected_struggle_ids: selectedStruggleIds,
      notification_time: notificationTime,
      theme,
      updated_at: new Date().toISOString(),
    },
    { onConflict: 'user_id' }
  );
}

import { Platform } from 'react-native';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const DAILY_CHANNEL_ID = 'marcus-daily';

/**
 * Schedule a daily local notification at the given time (e.g. "08:00").
 * Cancels any existing daily notification first.
 */
export async function scheduleDailyReminder(time: string | null): Promise<void> {
  await Notifications.cancelAllScheduledNotificationsAsync();
  if (!time) return;

  await ensureChannel();
  const [hours, minutes] = time.split(':').map(Number);
  const trigger: { hour: number; minute: number; repeats: boolean; channelId?: string } = {
    hour: hours,
    minute: minutes,
    repeats: true,
  };
  if (Platform.OS === 'android') trigger.channelId = DAILY_CHANNEL_ID;
  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Marcus',
      body: "Your daily Stoic wisdom is ready.",
      data: {},
      ...(Platform.OS === 'android' && { channelId: DAILY_CHANNEL_ID }),
    },
    trigger,
  });
}

export async function ensureChannel(): Promise<void> {
  if (Platform.OS !== 'android') return;
  await Notifications.setNotificationChannelAsync(DAILY_CHANNEL_ID, {
    name: 'Daily wisdom',
    importance: Notifications.AndroidImportance.DEFAULT,
  });
}

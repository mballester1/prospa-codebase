import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useUserPreferences } from '@/hooks/useUserPreferences';
import { useAuth } from '@/hooks/useAuth';
import { STRUGGLES } from '@/data/struggles';
import { StrugglePicker } from '@/components/StrugglePicker';
import { scheduleDailyReminder } from '@/lib/notifications';
import type { Theme } from '@/lib/storage';

const THEME_OPTIONS: { value: Theme; label: string }[] = [
  { value: 'system', label: 'System' },
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
];

const NOTIFICATION_TIMES = [
  { value: null, label: 'Off' },
  { value: '07:00', label: '7:00' },
  { value: '08:00', label: '8:00' },
  { value: '09:00', label: '9:00' },
  { value: '12:00', label: '12:00' },
  { value: '18:00', label: '18:00' },
  { value: '21:00', label: '21:00' },
];

export default function SettingsScreen() {
  const router = useRouter();
  const { userId, configured, signOut } = useAuth();
  const {
    selectedStruggleIds,
    notificationTime,
    theme,
    setStruggles,
    setNotificationTimeValue,
    setThemeValue,
  } = useUserPreferences();

  const handleToggleStruggle = (id: string) => {
    const next = selectedStruggleIds.includes(id)
      ? selectedStruggleIds.filter((s) => s !== id)
      : [...selectedStruggleIds, id];
    setStruggles(next);
  };

  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Your themes</Text>
        <Text style={styles.sectionHint}>
          Daily wisdom will lean toward these. Choose at least one.
        </Text>
        <StrugglePicker
          struggles={STRUGGLES}
          selectedIds={selectedStruggleIds}
          onToggle={handleToggleStruggle}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Daily reminder</Text>
        <View style={styles.optionRow}>
          {NOTIFICATION_TIMES.map(({ value, label }) => (
            <TouchableOpacity
              key={label}
              style={[
                styles.timeChip,
                notificationTime === value && styles.timeChipSelected,
              ]}
              onPress={async () => {
              await setNotificationTimeValue(value);
              await scheduleDailyReminder(value);
            }}
            >
              <Text
                style={[
                  styles.timeChipText,
                  notificationTime === value && styles.timeChipTextSelected,
                ]}
              >
                {label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Appearance</Text>
        <View style={styles.optionRow}>
          {THEME_OPTIONS.map(({ value, label }) => (
            <TouchableOpacity
              key={value}
              style={[styles.themeChip, theme === value && styles.themeChipSelected]}
              onPress={() => setThemeValue(value)}
            >
              <Text
                style={[
                  styles.themeChipText,
                  theme === value && styles.themeChipTextSelected,
                ]}
              >
                {label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        {configured &&
          (userId ? (
            <TouchableOpacity style={styles.authButton} onPress={() => signOut()}>
              <Text style={styles.authButtonText}>Sign out</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.authButton}
              onPress={() => router.push('/auth')}
            >
              <Text style={styles.authButtonText}>
                Sign in to sync across devices
              </Text>
            </TouchableOpacity>
          ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  scrollContent: {
    padding: 24,
    paddingBottom: 48,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#f5f0e8',
    marginBottom: 6,
  },
  sectionHint: {
    fontSize: 14,
    color: '#6b6b6b',
    marginBottom: 12,
  },
  optionRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  timeChip: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#2a2a2a',
    borderWidth: 1,
    borderColor: '#3a3a3a',
  },
  timeChipSelected: {
    backgroundColor: '#3d3428',
    borderColor: '#8b7355',
  },
  timeChipText: {
    fontSize: 14,
    color: '#b8b0a0',
  },
  timeChipTextSelected: {
    color: '#e8dcc8',
  },
  themeChip: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 20,
    backgroundColor: '#2a2a2a',
    borderWidth: 1,
    borderColor: '#3a3a3a',
  },
  themeChipSelected: {
    backgroundColor: '#3d3428',
    borderColor: '#8b7355',
  },
  themeChipText: {
    fontSize: 15,
    color: '#b8b0a0',
  },
  themeChipTextSelected: {
    color: '#e8dcc8',
  },
  authButton: {
    paddingVertical: 14,
    paddingHorizontal: 4,
  },
  authButtonText: {
    fontSize: 16,
    color: '#8b7355',
  },
});

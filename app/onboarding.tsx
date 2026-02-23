import { useState } from 'react';
import { useRouter } from 'expo-router';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { STRUGGLES } from '@/data/struggles';
import {
  setOnboardingComplete,
  setSelectedStruggleIds,
  setHasSeenNotificationPrompt,
} from '@/lib/storage';
import * as Notifications from 'expo-notifications';

const STEPS = { welcome: 0, struggles: 1, notifications: 2 } as const;

export default function OnboardingScreen() {
  const router = useRouter();
  const [step, setStep] = useState<number>(STEPS.welcome);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const handleContinueFromWelcome = () => setStep(STEPS.struggles);

  const toggleStruggle = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const handleContinueFromStruggles = () => {
    if (selectedIds.length === 0) return;
    setStep(STEPS.notifications);
  };

  const handleEnableNotifications = async () => {
    await setHasSeenNotificationPrompt(true);
    const { status } = await Notifications.requestPermissionsAsync();
    if (status === 'granted') {
      // Scheduling can be done in Settings when user picks a time
    }
    finishOnboarding();
  };

  const handleSkipNotifications = async () => {
    await setHasSeenNotificationPrompt(true);
    finishOnboarding();
  };

  const finishOnboarding = async () => {
    await setSelectedStruggleIds(selectedIds);
    await setOnboardingComplete(true);
    router.replace('/(tabs)');
  };

  if (step === STEPS.welcome) {
    return (
      <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
        <View style={styles.content}>
          <Text style={styles.title}>Marcus</Text>
          <Text style={styles.subtitle}>
            Daily Stoic wisdom tailored to you. One nugget each day — from
            Marcus Aurelius, Seneca, and Epictetus — to steady the mind.
          </Text>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={handleContinueFromWelcome}
            activeOpacity={0.8}
            accessibilityRole="button"
            accessibilityLabel="Begin onboarding"
          >
            <Text style={styles.primaryButtonText}>Begin</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  if (step === STEPS.struggles) {
    return (
      <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>What are you working on?</Text>
          <Text style={styles.hint}>
            Choose one or more. Your daily wisdom will lean toward these themes.
          </Text>
          <View style={styles.chipRow}>
            {STRUGGLES.map((s) => (
              <Pressable
                key={s.id}
                style={[
                  styles.chip,
                  selectedIds.includes(s.id) && styles.chipSelected,
                ]}
                onPress={() => toggleStruggle(s.id)}
                accessibilityRole="button"
                accessibilityLabel={`${s.label}. ${selectedIds.includes(s.id) ? 'Selected' : 'Not selected'}`}
              >
                <Text
                  style={[
                    styles.chipText,
                    selectedIds.includes(s.id) && styles.chipTextSelected,
                  ]}
                >
                  {s.label}
                </Text>
              </Pressable>
            ))}
          </View>
          <TouchableOpacity
            style={[
              styles.primaryButton,
              selectedIds.length === 0 && styles.primaryButtonDisabled,
            ]}
            onPress={handleContinueFromStruggles}
            disabled={selectedIds.length === 0}
            activeOpacity={0.8}
          >
            <Text style={styles.primaryButtonText}>Continue</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.content}>
        <Text style={styles.title}>Daily reminder?</Text>
        <Text style={styles.subtitle}>
          Get your daily nugget at a time that suits you. You can change this
          later in Settings.
        </Text>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={handleEnableNotifications}
          activeOpacity={0.8}
        >
          <Text style={styles.primaryButtonText}>Enable</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={handleSkipNotifications}
          activeOpacity={0.8}
        >
          <Text style={styles.secondaryButtonText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 48,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#f5f0e8',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 17,
    lineHeight: 24,
    color: '#b8b0a0',
    marginBottom: 32,
  },
  hint: {
    fontSize: 15,
    color: '#8b7355',
    marginBottom: 24,
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 40,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 24,
    backgroundColor: '#2a2a2a',
    borderWidth: 1,
    borderColor: '#3a3a3a',
  },
  chipSelected: {
    backgroundColor: '#3d3428',
    borderColor: '#8b7355',
  },
  chipText: {
    fontSize: 15,
    color: '#b8b0a0',
  },
  chipTextSelected: {
    color: '#e8dcc8',
  },
  primaryButton: {
    backgroundColor: '#8b7355',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  primaryButtonDisabled: {
    opacity: 0.5,
  },
  primaryButtonText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#f5f0e8',
  },
  secondaryButton: {
    marginTop: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  secondaryButtonText: {
    fontSize: 17,
    color: '#8b7355',
  },
});

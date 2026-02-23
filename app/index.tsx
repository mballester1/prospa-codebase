import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { useOnboardingComplete } from '@/hooks/useOnboardingComplete';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

export default function Index() {
  const router = useRouter();
  const { complete } = useOnboardingComplete();

  useEffect(() => {
    if (complete === null) return;
    if (complete) {
      router.replace('/(tabs)');
    } else {
      router.replace('/onboarding');
    }
  }, [complete, router]);

  return (
    <View style={styles.centered}>
      <ActivityIndicator size="large" color="#8b7355" />
    </View>
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
  },
});

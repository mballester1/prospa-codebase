import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { useUserPreferences } from '@/hooks/useUserPreferences';
import { useDailyNugget } from '@/hooks/useDailyNugget';
import { QuoteCard } from '@/components/QuoteCard';

export default function HomeScreen() {
  const { selectedStruggleIds } = useUserPreferences();
  const { quote, loading } = useDailyNugget(selectedStruggleIds);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#8b7355" />
      </View>
    );
  }

  if (!quote) {
    return (
      <View style={styles.centered}>
        <Text style={styles.emptyText}>No wisdom for today. Check back tomorrow.</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
      accessibilityRole="none"
      accessibilityLabel="Today's wisdom"
    >
      <Text style={styles.label}>Today's wisdom</Text>
      <QuoteCard quote={quote} />
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
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
  },
  label: {
    fontSize: 13,
    color: '#8b7355',
    marginBottom: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  emptyText: {
    fontSize: 17,
    color: '#b8b0a0',
  },
});

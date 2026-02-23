import { View, Text, StyleSheet, Share, TouchableOpacity } from 'react-native';
import type { Quote } from '@/data/quotes';

interface QuoteCardProps {
  quote: Quote;
  onShare?: () => void;
}

export function QuoteCard({ quote, onShare }: QuoteCardProps) {
  const handleShare = async () => {
    try {
      await Share.share({
        message: `"${quote.text}" — ${quote.author}${quote.source ? `, ${quote.source}` : ''}`,
        title: 'Marcus',
      });
      onShare?.();
    } catch {
      // User cancelled or share not available
    }
  };

  return (
    <View style={styles.card} accessibilityRole="summary" accessibilityLabel={`Quote by ${quote.author}. ${quote.text}`}>
      <Text style={styles.text} accessibilityRole="text">"{quote.text}"</Text>
      <Text style={styles.author} accessibilityRole="text">
        — {quote.author}
        {quote.source ? `, ${quote.source}` : ''}
      </Text>
      <TouchableOpacity
        style={styles.shareButton}
        onPress={handleShare}
        accessibilityRole="button"
        accessibilityLabel="Share this quote"
      >
        <Text style={styles.shareButtonText}>Share</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#242018',
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: '#3a3428',
  },
  text: {
    fontSize: 22,
    lineHeight: 32,
    color: '#f5f0e8',
    fontStyle: 'italic',
    marginBottom: 16,
  },
  author: {
    fontSize: 15,
    color: '#8b7355',
    marginBottom: 20,
  },
  shareButton: {
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  shareButtonText: {
    fontSize: 15,
    color: '#8b7355',
  },
});

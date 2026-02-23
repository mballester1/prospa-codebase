import { View, Text, StyleSheet, Pressable } from 'react-native';
import type { Struggle } from '@/data/struggles';

interface StrugglePickerProps {
  struggles: Struggle[];
  selectedIds: string[];
  onToggle: (id: string) => void;
}

export function StrugglePicker({ struggles, selectedIds, onToggle }: StrugglePickerProps) {
  return (
    <View style={styles.row}>
      {struggles.map((s) => (
        <Pressable
          key={s.id}
          style={[styles.chip, selectedIds.includes(s.id) && styles.chipSelected]}
          onPress={() => onToggle(s.id)}
        >
          <Text
            style={[styles.chipText, selectedIds.includes(s.id) && styles.chipTextSelected]}
          >
            {s.label}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
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
});

export interface Struggle {
  id: string;
  label: string;
  description: string;
}

export const STRUGGLES: Struggle[] = [
  { id: 'anxiety', label: 'Anxiety', description: 'Worry and unease about the future' },
  { id: 'anger', label: 'Anger', description: 'Frustration and irritation with others or events' },
  { id: 'procrastination', label: 'Procrastination', description: 'Putting off what matters' },
  { id: 'fear_of_failure', label: 'Fear of failure', description: 'Worry about not succeeding' },
  { id: 'relationships', label: 'Relationships', description: 'Difficulty with people and connection' },
  { id: 'grief', label: 'Grief', description: 'Loss and mourning' },
  { id: 'overwork', label: 'Overwork', description: 'Exhaustion and burnout' },
  { id: 'comparison', label: 'Comparison & envy', description: 'Measuring yourself against others' },
  { id: 'uncertainty', label: 'Uncertainty', description: 'Struggling with the unknown' },
];

export const STRUGGLE_IDS = STRUGGLES.map((s) => s.id);

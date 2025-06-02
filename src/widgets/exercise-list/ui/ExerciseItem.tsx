'use client';

import { Chip, ListItem, ListItemSecondaryAction, ListItemText } from '@mui/material';

import { restoreCharactersFromKeyInputs } from '@/entities/exercise';
import { useRouter } from '@/shared/navigation';
import { KeyboardLayout } from '@/shared/types';

export function ExerciseItem({ exercise, layout }: { exercise: any; layout: KeyboardLayout }) {
  const router = useRouter();
  const exerciseText = restoreCharactersFromKeyInputs(exercise.keyInputs, layout);

  const handleClick = () => {
    router.push(`/exercises/${exercise.id}`);
  };

  return (
    <ListItem button onClick={handleClick} sx={{ mb: 1, border: 1, borderColor: 'grey.300', borderRadius: 1 }}>
      <ListItemText primary={`Упражнение ${exercise.order + 1}`} secondary={exerciseText} />
      <ListItemSecondaryAction>
        <Chip label={`#${exercise.order + 1}`} color="primary" size="small" />
      </ListItemSecondaryAction>
    </ListItem>
  );
}

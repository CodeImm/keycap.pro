'use client';

import { Box, Chip, List, ListItem, ListItemSecondaryAction, ListItemText, Typography } from '@mui/material';

import { KeyInput, KeyboardLayout } from '@/shared/types';

import api from '../api';

const MESSAGES = {
  LOADING: 'Загрузка...',
  TITLE: 'Упражнения',
  ERROR_PREFIX: 'Ошибка:',
  UNKNOWN_ERROR: 'Неизвестная ошибка',
  NO_EXERCISES: 'Нет упражнений',
  EXERCISE_PREFIX: 'Упражнение',
} as const;

const STYLES = {
  container: { maxWidth: 600, mx: 'auto', mt: 4 },
  listItem: { mb: 1, border: 1, borderColor: 'grey.300', borderRadius: 1 },
} as const;

function restoreCharactersFromKeyInputs(keyInputs: KeyInput[], layout: KeyboardLayout): string {
  return keyInputs.map((key) => layout[key.modifier]?.[key.code]?.char ?? '').join('');
}

function LoadingState() {
  return <div>{MESSAGES.LOADING}</div>;
}

function ErrorState({ error, message }: { error?: unknown; message?: string }) {
  const errorMessage = error || message || MESSAGES.UNKNOWN_ERROR;

  return (
    <Box sx={STYLES.container}>
      <Typography variant="h4" gutterBottom>
        {MESSAGES.TITLE}
      </Typography>
      <Typography color="error">
        {MESSAGES.ERROR_PREFIX} {errorMessage}
      </Typography>
    </Box>
  );
}

function EmptyState() {
  return (
    <Box sx={STYLES.container}>
      <Typography variant="h4" gutterBottom>
        {MESSAGES.TITLE}
      </Typography>
      <Typography>{MESSAGES.NO_EXERCISES}</Typography>
    </Box>
  );
}

function ExerciseItem({ exercise, layout }: { exercise: any; layout: KeyboardLayout }) {
  const exerciseText = restoreCharactersFromKeyInputs(exercise.keyInputs, layout);

  return (
    <ListItem key={exercise._id} button sx={STYLES.listItem}>
      <ListItemText primary={`${MESSAGES.EXERCISE_PREFIX} ${exercise.order + 1}`} secondary={exerciseText} />
      <ListItemSecondaryAction>
        <Chip label={`#${exercise.order + 1}`} color="primary" size="small" />
      </ListItemSecondaryAction>
    </ListItem>
  );
}

function ExercisesList({ exercises, layout }: { exercises: any[]; layout: KeyboardLayout }) {
  return (
    <Box sx={STYLES.container}>
      <Typography variant="h4" gutterBottom>
        {MESSAGES.TITLE}
      </Typography>
      <List>
        {exercises.map((exercise) => (
          <ExerciseItem key={exercise.id} exercise={exercise} layout={layout} />
        ))}
      </List>
    </Box>
  );
}

export function ExerciseList() {
  const { data, isLoading, error } = api.useGetExercises();

  if (isLoading) {
    return <LoadingState />;
  }

  if (error || !data?.success) {
    return <ErrorState error={error} message={data?.message} />;
  }

  const exercises = data.data.exercises;
  const layout = data.data.keyboardProfile.layout.layoutMap;

  if (!exercises?.length) {
    return <EmptyState />;
  }

  return <ExercisesList exercises={exercises} layout={layout} />;
}

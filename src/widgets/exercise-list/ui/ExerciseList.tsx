'use client';

import { Box, List, Typography } from '@mui/material';

import { KeyboardLayout } from '@/shared/types';

import { ExerciseItem } from './ExerciseItem';

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
// TODO: переделать на серверный компонент
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

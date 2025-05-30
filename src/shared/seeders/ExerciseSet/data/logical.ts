import { ExerciseType } from '@/entities/exercise';
import { KeyInput, ModifierKey } from '@/shared/types';

export const exercisesForLogicalKeyFingerMappings: { keys: KeyInput[] }[] = [
  {
    // layout
    keys: [
      {
        code: 'KeyF',
        modifier: ModifierKey.DEFAULT,
      },
      {
        code: 'KeyR',
        modifier: ModifierKey.DEFAULT,
      },
      {
        code: 'KeyV',
        modifier: ModifierKey.DEFAULT,
      },
      {
        code: 'KeyJ',
        modifier: ModifierKey.DEFAULT,
      },
      {
        code: 'KeyU',
        modifier: ModifierKey.DEFAULT,
      },
      {
        code: 'KeyM',
        modifier: ModifierKey.DEFAULT,
      },
    ],
    type: ExerciseType.Basic,
    slug: 'basic-index-1',
  },
  {
    // layout
    keys: [
      {
        code: 'KeyT',
        modifier: ModifierKey.DEFAULT,
      },
      {
        code: 'KeyG',
        modifier: ModifierKey.DEFAULT,
      },
      {
        code: 'KeyB',
        modifier: ModifierKey.DEFAULT,
      },
      {
        code: 'KeyY',
        modifier: ModifierKey.DEFAULT,
      },
      {
        code: 'KeyH',
        modifier: ModifierKey.DEFAULT,
      },
      {
        code: 'KeyN',
        modifier: ModifierKey.DEFAULT,
      },
    ],
    type: ExerciseType.Basic,
    slug: 'basic-index-2',
  },
];

// export const exercisesForLogicalKeyFingerMappings = [...exercisesForOptimizedKeyFingerMappings];

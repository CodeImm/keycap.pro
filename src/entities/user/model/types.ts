import { z } from 'zod';

import { KeyFingerMappingScheme } from '@/entities/keyFingerMapping';
import { KeyboardFormat, LayoutId, LayoutLanguage, System } from '@/entities/keyboard';

import { CompleteRegistrationFormRequestSchema } from './schemas';

export enum Role {
  User = 'user',
  Admin = 'admin',
  Moderator = 'moderator',
}

export enum Gender {
  Male = 'male',
  Female = 'female',
}

export interface CheckUsernameUniqueResponse {
  isUnique: boolean;
}

export type UpdateUserProfileRequest = z.infer<typeof CompleteRegistrationFormRequestSchema>;

export interface UpdateUserProfileResponse {
  success: boolean;
  message?: string;
  data?: {
    keyFingerMappingSchema: KeyFingerMappingScheme;
    layout: {
      system: System;
      layoutLanguage: LayoutLanguage;
      keyboardFormat: KeyboardFormat;
      layoutId: LayoutId;
    };
  };
}

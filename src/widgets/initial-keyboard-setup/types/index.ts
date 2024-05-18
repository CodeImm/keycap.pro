import { KeyFingerMapping, LayoutId, LayoutLanguage, LayoutType, System } from '@/entities/keyboard';

export interface UpdateUserProfileData {
  fingersZonesSchema: KeyFingerMapping;
  layout: {
    system: System;
    layoutLanguage: LayoutLanguage;
    layoutType: LayoutType;
    layoutId: LayoutId;
  };
}

export interface UpdateUserProfileResponse {
  success: boolean;
  message?: string;
  data?: {
    fingersZonesSchema: KeyFingerMapping;
    layout: {
      system: System;
      layoutLanguage: LayoutLanguage;
      layoutType: LayoutType;
      layoutId: LayoutId;
    };
  };
}

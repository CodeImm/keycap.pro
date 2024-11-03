import { KeyFingerMappingScheme } from '@/entities/keyFingerMapping';

export const mapKeyboardSetupToApi = ({
  keyFingerMappingSchema,
  keyboardConfiguration,
}: {
  keyFingerMappingSchema: KeyFingerMappingScheme;
  // TODO: сделать тип для формы KeyboardSetup
  keyboardConfiguration: any;
}) => {
  return {
    keyFingerMappingSchema,
    keyboardConfiguration: {
      keyboardLayoutId: keyboardConfiguration.layoutConfig.layoutId,
      keyboardFormat: keyboardConfiguration.layoutConfig.keyboardFormat,
      system: keyboardConfiguration.layoutConfig.system,
    },
  };
};

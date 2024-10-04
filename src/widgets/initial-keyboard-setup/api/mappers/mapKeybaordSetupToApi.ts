import { KeyFingerMappingScheme } from '@/entities/keyboard';

export const mapKeybaordSetupToApi = ({
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

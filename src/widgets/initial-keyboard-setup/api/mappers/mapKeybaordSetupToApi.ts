import { KeyFingerMapping } from '@/entities/keyboard';

export const mapKeybaordSetupToApi = ({
  keyFingerMappingSchema,
  keyboardConfiguration,
}: {
  keyFingerMappingSchema: KeyFingerMapping;
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

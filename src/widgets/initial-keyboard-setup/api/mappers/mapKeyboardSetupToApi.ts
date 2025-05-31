// import { KeyFingerMappingScheme } from '@/entities/keyFingerMapping/model/KeyFingerMappingScheme';

export const mapKeyboardSetupToApi = ({
  keyFingerMappingSchema,
  keyboardConfiguration,
}: {
  keyFingerMappingSchema: any;
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

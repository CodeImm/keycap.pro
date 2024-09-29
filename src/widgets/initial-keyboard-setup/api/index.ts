import { UseMutationOptions, useMutation } from '@tanstack/react-query';

import { KeyboardApi, SaveKeyboardSettingsRequest, SaveKeyboardSettingsResponse } from '@/entities/keyboard';

const api = {
  useSaveKeyboardConfiguration: (
    props?: Omit<UseMutationOptions<SaveKeyboardSettingsResponse, unknown, SaveKeyboardSettingsRequest>, 'mutationFn'>
  ) => {
    return useMutation<SaveKeyboardSettingsResponse, unknown, SaveKeyboardSettingsRequest>({
      mutationFn: KeyboardApi.saveKeyboardConfiguration,
      ...props,
    });
  },
};

export default api;

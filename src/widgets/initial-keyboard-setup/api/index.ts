import { UseMutationOptions, useMutation } from '@tanstack/react-query';

import { SaveKeyboardSettingsRequest, SaveKeyboardSettingsResponse, keyboardSettingsApi } from '@/entities/keyboard';

const api = {
  useSaveKeyboardSettings: (
    props?: Omit<UseMutationOptions<SaveKeyboardSettingsResponse, unknown, SaveKeyboardSettingsRequest>, 'mutationFn'>
  ) => {
    return useMutation<SaveKeyboardSettingsResponse, unknown, SaveKeyboardSettingsRequest>({
      mutationFn: keyboardSettingsApi.save,
      ...props,
    });
  },
};

export default api;

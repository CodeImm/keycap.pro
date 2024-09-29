import client from '@/shared/config/ky';

import { SaveKeyboardSettingsRequest, SaveKeyboardSettingsResponse } from '../model/types';

interface KeyboardApi {
  saveKeyboardConfiguration: (data: SaveKeyboardSettingsRequest) => Promise<SaveKeyboardSettingsResponse>;
}

const keyboardApi: KeyboardApi = {
  saveKeyboardConfiguration: (data) => client.post('keyboard', { json: data }).json(),
};

export default keyboardApi;

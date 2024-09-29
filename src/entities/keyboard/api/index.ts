import client from '@/shared/config/ky';

import { SaveKeyboardSettingsRequest, SaveKeyboardSettingsResponse } from '../model/types';

interface KeyboardSettingsApi {
  save: (data: SaveKeyboardSettingsRequest) => Promise<SaveKeyboardSettingsResponse>;
}

const keyboardSettingsApi: KeyboardSettingsApi = {
  save: (data: SaveKeyboardSettingsRequest) => client.post('keyboard', { json: data }).json(),
};

export default keyboardSettingsApi;

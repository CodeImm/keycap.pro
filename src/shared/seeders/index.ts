import mongoose from 'mongoose';

import { seedKeyFingerMappingSchemes } from './KeyFingerMappingScheme';
import { seedKeyboardLayouts } from './KeyboardLayout';
import { seedKeyboardProfiles } from './KeyboardProfile';

async function seedAll() {
  try {
    const keyboardLayouts = await seedKeyboardLayouts();
    const keyFingerMappingSchemes = await seedKeyFingerMappingSchemes();

    const keyboardProfiles = await seedKeyboardProfiles(keyFingerMappingSchemes, keyboardLayouts);
  } catch (error) {
    console.log(error);
  } finally {
    await mongoose.disconnect();
  }
}

seedAll();

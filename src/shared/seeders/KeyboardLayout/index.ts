import mongoose from 'mongoose';

import KeyboardLayoutModel from '@/entities/keyboard/model/KeyboardLayout';
import { KeyboardLayoutId } from '@/shared/types';

import { jcuken } from './data/jcuken';
import { us_qwerty } from './data/us_qwerty';

import dbConnect from '../../config/mongodb/dbConnect';

export async function seedKeyboardLayouts() {
  try {
    await dbConnect();

    await KeyboardLayoutModel.deleteMany();

    const keyboardLayouts = [
      {
        // TODO: проблемы когда пользователь сможет создавать свои раскладки
        layoutId: KeyboardLayoutId.UsQwerty,
        layoutMap: us_qwerty,
      },
      {
        layoutId: KeyboardLayoutId.Jcuken,
        layoutMap: jcuken,
      },
    ];

    const insertedLayouts = await KeyboardLayoutModel.insertMany(keyboardLayouts);

    console.log('Database seeded successfully!');

    return insertedLayouts;
  } catch (error) {
    console.error('Error seeding database:', error);
    throw error; // Rethrow to allow caller to handle
  } finally {
    await mongoose.disconnect();
  }
}

// seedKeyboardLayouts();

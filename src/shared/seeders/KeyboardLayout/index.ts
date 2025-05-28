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
        layoutId: KeyboardLayoutId.UsQwerty,
        layoutMap: us_qwerty,
      },
      {
        layoutId: KeyboardLayoutId.Jcuken,
        layoutMap: jcuken,
      },
    ];

    console.log('Database seeded successfully!');
    return await KeyboardLayoutModel.insertMany(keyboardLayouts);
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await mongoose.disconnect();
  }
}

seedKeyboardLayouts();

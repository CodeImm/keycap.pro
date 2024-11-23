import mongoose from 'mongoose';

import { KeyboardLayoutId } from '@/entities/keyboardLayout';
import KeyboardLayoutModel from '@/entities/keyboardLayout/model/KeyboardLayout';

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
        layoutKeys: us_qwerty,
      },
      {
        layoutId: KeyboardLayoutId.Jcuken,
        layoutKeys: jcuken,
      },
    ];

    await KeyboardLayoutModel.insertMany(keyboardLayouts);

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await mongoose.disconnect();
  }
}

seedKeyboardLayouts();

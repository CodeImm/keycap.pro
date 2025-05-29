import mongoose from 'mongoose';

import { FormFactor, KeyboardGeometryModel } from '@/entities/keyboard';
import { KeyboardFormat } from '@/shared/types';

import dbConnect from '../../config/mongodb/dbConnect';

export async function seedKeyboardGeometries() {
  try {
    await dbConnect();

    // Clear existing geometries
    await KeyboardGeometryModel.deleteMany({});

    const keyboardGeometries = [
      {
        geometryId: `${FormFactor.FiftyPercent}_${KeyboardFormat.Ansi}`,
        formFactor: FormFactor.FiftyPercent,
        format: KeyboardFormat.Ansi,
        isCustom: false,
      },
      {
        geometryId: `${FormFactor.FiftyPercent}_${KeyboardFormat.Iso}`,
        formFactor: FormFactor.FiftyPercent,
        format: KeyboardFormat.Iso,
        isCustom: false,
      },
    ];

    const insertedSchemes = await KeyboardGeometryModel.insertMany(keyboardGeometries);

    console.log('KeyboardGeometries seeded successfully:', insertedSchemes.length);

    return insertedSchemes;
  } catch (error) {
    console.error('Error seeding KeyboardGeometries:', error);
    throw error; // Rethrow to allow caller to handle
  } finally {
    await mongoose.disconnect();
  }
}

// seedKeyboardGeometries();

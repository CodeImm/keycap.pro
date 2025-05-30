import mongoose from 'mongoose';



import { KeyFingerMappingSchemeModel } from '@/entities/keyFingerMapping';
import { FormFactor, KeyboardGeometryModel } from '@/entities/keyboard';
import KeyboardLayoutModel from '@/entities/keyboard/model/KeyboardLayout';
import KeyboardProfileModel from '@/entities/keyboard/model/KeyboardProfile';
import { KeyboardFormat } from '@/shared/types';



import dbConnect from '../../config/mongodb/dbConnect';


const STANDARD_LAYOUT_IDS = {
  UsQwerty: 'us_qwerty',
  // Dvorak: 'dvorak',
  // Colemak: 'colemak',
  // Workman: 'workman',
  // Jcuken: 'jcuken',
} as const;

const STANDARD_KEY_FINGER_MAPPING_SCHEMES = {
  Optimized: 'optimized',
  Logical: 'logical',
} as const;

export async function seedKeyboardProfiles() {
  try {
    await dbConnect();

    // Получаем стандартные геометрии, раскладки и схемы
    const geometries = await KeyboardGeometryModel.find({
      formFactor: FormFactor.SixtyPercent,
      format: { $in: [KeyboardFormat.Ansi, KeyboardFormat.Iso] },
    });
    const layouts = await KeyboardLayoutModel.find({
      layoutId: { $in: Object.values(STANDARD_LAYOUT_IDS) },
    });
    const keyFingerMappings = await KeyFingerMappingSchemeModel.find({
      schemeType: { $in: Object.values(STANDARD_KEY_FINGER_MAPPING_SCHEMES) },
    });

    if (geometries.length === 0 || layouts.length === 0 || keyFingerMappings.length === 0) {
      console.warn(
        'Required data not found. Please seed KeyboardGeometry, KeyboardLayout, and KeyFingerMappingScheme first.'
      );
      return [];
    }

    // Очищаем существующие профили (только для тестовых данных)
    await KeyboardProfileModel.deleteMany({});

    // Создаем профили, комбинируя все геометрии, раскладки и схемы
    const keyboardProfiles = geometries.flatMap((geometry) =>
      layouts
        .map((layout) =>
          keyFingerMappings.map((mapping) => ({
            geometry: geometry._id,
            layout: layout._id,
            keyFingerMappingScheme: mapping._id,
          }))
        )
        .flat()
    );

    const insertedProfiles = await KeyboardProfileModel.insertMany(keyboardProfiles);
    console.log('KeyboardProfiles seeded successfully:', insertedProfiles.length);
    return insertedProfiles;
  } catch (error) {
    console.error('Error seeding KeyboardProfiles:', error);
    throw error;
  } finally {
    await mongoose.disconnect();
  }
}

seedKeyboardProfiles();

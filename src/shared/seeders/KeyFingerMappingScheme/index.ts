import { KeyFingerMappingSchemeModel, KeyFingerMappingSchemeType } from '@/entities/keyFingerMapping';

import { logical } from './data/logical';
import { optimized } from './data/optimized';

import dbConnect from '../../config/mongodb/dbConnect';

export async function seedKeyFingerMappingSchemes() {
  try {
    await dbConnect();

    // Clear existing schemes
    await KeyFingerMappingSchemeModel.deleteMany({});

    const keyFingerMappingSchemes = [
      {
        schemeId: KeyFingerMappingSchemeType.LOGICAL,
        name: 'Logical',
        description: 'Mapping of keys to fingers for the logical layout.',
        keyFingerMappingScheme: logical,
        hash: KeyFingerMappingSchemeModel.generateHash(logical),
      },
      {
        schemeId: KeyFingerMappingSchemeType.OPTIMIZED,
        name: 'Optimized',
        description: 'Mapping of keys to fingers for the optimized layout.',
        keyFingerMappingScheme: optimized,
        hash: KeyFingerMappingSchemeModel.generateHash(optimized),
      },
    ];

    const insertedSchemes = await KeyFingerMappingSchemeModel.insertMany(keyFingerMappingSchemes);

    console.log('KeyFingerMappingSchemes seeded successfully:', insertedSchemes.length);

    return insertedSchemes;
  } catch (error) {
    console.error('Error seeding KeyFingerMappingSchemes:', error);
    throw error; // Rethrow to allow caller to handle
  }
}

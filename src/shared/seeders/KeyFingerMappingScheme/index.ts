import { KeyFingerMappingSchemeType } from './../../../entities/keyFingerMapping';
import KeyFingerMappingModel from './../../../entities/keyFingerMapping/model/KeyFingerMapping';

import { generateHash } from '@/entities/keyFingerMapping/lib';

import { logical } from './data/logical';
import { optimized } from './data/optimized';

import dbConnect from '../../config/mongodb/dbConnect';

export async function seedKeyFingerMappingSchemes() {
  try {
    await dbConnect();

    await KeyFingerMappingModel.deleteMany();

    const keyFingerMappingsSchemes = [
      {
        name: 'logical',
        description: 'Mapping of keys to fingers for the logical layout.',
        schemeType: KeyFingerMappingSchemeType.Standard,
        keyFingerMappingScheme: logical,
      },
      {
        name: 'optimized',
        description: 'Mapping of keys to fingers for the optimized layout.',
        schemeType: KeyFingerMappingSchemeType.Standard,
        keyFingerMappingScheme: optimized,
      },
    ];

    keyFingerMappingsSchemes.forEach((item) => {
      item.hash = generateHash(item.keyFingerMappingScheme);
    });

    const keyFingerMappings = await KeyFingerMappingModel.insertMany(keyFingerMappingsSchemes);

    console.log('Database seeded successfully!');

    return keyFingerMappings;
  } catch (error) {
    console.error('Error seeding database:', error);
  }
  // finally {
  //   await mongoose.disconnect();
  // }
}

// seedKeyFingerMappingSchemes();

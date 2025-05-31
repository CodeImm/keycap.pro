import { KeyFingerMappingSchemeType } from '@/entities/keyFingerMapping';
import { logical } from '@/shared/seeders/KeyFingerMappingScheme/data/logical';
import { optimized } from '@/shared/seeders/KeyFingerMappingScheme/data/optimized';

export function getKeyFingerMappingById(id: Exclude<KeyFingerMappingSchemeType, 'custom'>) {
  switch (id) {
    case 'logical':
      return logical;
    case 'optimized':
      return optimized;
    default:
      const exhaustiveCheck: never = id;
      throw new Error(`Unknown key finger mapping id: ${exhaustiveCheck}`);
  }
}

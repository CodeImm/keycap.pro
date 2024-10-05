import { KeyFingerMappingSchemeId } from '@/entities/keyFingerMapping';
import { logical } from '@/entities/keyFingerMapping/config/logical';
import { optimized } from '@/entities/keyFingerMapping/config/optimized';

export function getKeyFingerMappingById(id: Exclude<KeyFingerMappingSchemeId, 'custom'>) {
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

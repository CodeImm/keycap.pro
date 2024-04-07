import { logical, optimized } from '../config/keyFingerMappings';
import type { KeyFingerMappingId } from '../model';

export function getKeyFingerMappingById(
  id: Exclude<KeyFingerMappingId, 'custom'>
) {
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

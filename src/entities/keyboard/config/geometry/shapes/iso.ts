import { keyShapesANSI } from './ansi';

import { KEYCAP_HEIGHT, KEYCAP_WIDTH, ROW_GAP } from '../constants';

// ISO Key Shapes
export const keyShapesISO = {
  ...keyShapesANSI,
  ShiftLeft: `M 0 0 H ${KEYCAP_WIDTH * 1.25 + 2} V ${KEYCAP_HEIGHT} H 0 Z`,
  Enter: `M 0 0 H ${KEYCAP_WIDTH * 1.5} V ${KEYCAP_HEIGHT * 2 + ROW_GAP} H ${
    KEYCAP_WIDTH * 0.25
  } V ${KEYCAP_HEIGHT} H 0 Z`,
  // revert
  CapsLock: `M 0 0 H ${KEYCAP_WIDTH * 1.75} V ${KEYCAP_HEIGHT} H 0 Z`,
};

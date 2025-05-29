import type { Ref } from '@typegoose/typegoose';
import { getModelForClass, prop } from '@typegoose/typegoose';

import type { HomeRow } from '@/entities/keyFingerMapping';
import { DEFAULT_HOME_ROW, HomeRowSchema } from '@/entities/keyFingerMapping';
import { KeyFingerMappingScheme } from '@/entities/keyFingerMapping/model/KeyFingerMappingScheme';
import { KeyboardLayout } from '@/entities/keyboard/model/KeyboardLayout';

import { KeyboardGeometry } from './KeyboardGeometry';

export class KeyboardProfile {
  @prop({ ref: 'KeyboardGeometry', required: true }) // Ссылка на геометрию
  public geometry!: Ref<KeyboardGeometry>;

  @prop({ ref: 'KeyboardLayout', required: true })
  public layout!: Ref<KeyboardLayout>;

  @prop({ ref: 'KeyFingerMapping', required: true })
  public keyFingerMappingScheme!: Ref<KeyFingerMappingScheme>;

  @prop({
    type: Object,
    required: true,
    validate: {
      validator: (value: unknown) => {
        const result = HomeRowSchema.safeParse(value);

        return result.success;
      },
      message: 'Invalid home row configuration',
    },
    default: DEFAULT_HOME_ROW,
  })
  public homeRow!: HomeRow;
}

const KeyboardProfileModel = getModelForClass(KeyboardProfile, { schemaOptions: { timestamps: true } });

export default KeyboardProfileModel;

import type { Ref } from '@typegoose/typegoose';
import { getModelForClass, prop } from '@typegoose/typegoose';

import type { HomeRow } from '@/entities/keyFingerMapping';
import { DEFAULT_HOME_ROW, HomeRowSchema } from '@/entities/keyFingerMapping';
import { KeyFingerMapping } from '@/entities/keyFingerMapping/model/KeyFingerMapping';
import { FormFactor } from '@/entities/keyboard';
import { KeyboardLayout } from '@/entities/keyboard/model/KeyboardLayout';
import { KeyboardFormat } from '@/shared/types';

export class KeyboardProfile {
  @prop({ enum: FormFactor, type: String, default: FormFactor.SixtyPercent })
  public formFactor!: FormFactor;

  @prop({ enum: KeyboardFormat, type: String, required: true })
  public format!: KeyboardFormat;

  @prop({ ref: 'KeyboardLayout', required: true })
  public layout!: Ref<KeyboardLayout>;

  @prop({ ref: 'KeyFingerMapping', required: true })
  public keyFingerMappingScheme!: Ref<KeyFingerMapping>;

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

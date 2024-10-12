import type { Ref } from '@typegoose/typegoose';
import { getModelForClass, prop } from '@typegoose/typegoose';

import type { HomeRow } from '@/entities/keyFingerMapping';
import { DEFAULT_HOME_ROW, HomeRowSchema } from '@/entities/keyFingerMapping';
import { KeyFingerMapping } from '@/entities/keyFingerMapping/model/KeyFingerMapping';
import { FormFactor, Format, LayoutId } from '@/entities/keyboard';

export class KeyboardProfile {
  @prop({ enum: FormFactor, type: String, required: true, default: FormFactor.SixtyPercent })
  public formFactor!: FormFactor;

  @prop({ enum: Format, type: String, required: true })
  public format!: Format;

  @prop({ enum: LayoutId, type: String, required: true })
  public layoutId!: LayoutId;

  @prop({ ref: 'KeyFingerMapping', required: true })
  public keyFingerMappingSchemeId!: Ref<KeyFingerMapping>;

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

  @prop({ type: Boolean, required: true, default: true })
  public generated!: boolean;
}

const KeyboardProfileModel = getModelForClass(KeyboardProfile, { schemaOptions: { timestamps: true } });

export default KeyboardProfileModel;

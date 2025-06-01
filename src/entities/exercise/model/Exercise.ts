import type { Ref } from '@typegoose/typegoose';
import { getModelForClass, prop } from '@typegoose/typegoose';

import type { HomeRow } from '@/entities/keyFingerMapping';
import { DEFAULT_HOME_ROW, HomeRowSchema } from '@/entities/keyFingerMapping';
import { KeyboardGeometry } from '@/entities/keyboard/model/KeyboardGeometry';
// import { createHash } from 'crypto';
import { type KeyFingerMapping } from '@/shared/types';
import { KeyInput } from '@/shared/types';

import { ExerciseType } from './types';

// @modelOptions({ schemaOptions: { _id: false } })
// class KeyInput {
//   @prop({ type: String, required: true })
//   public сode!: KeyCode;

//   @prop({ type: String, enum: ModifierKey, required: true })
//   public modifier!: ModifierKey;
// }

export class Exercise {
  @prop({ required: true, ref: () => KeyboardGeometry })
  public geometry!: Ref<KeyboardGeometry>;

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

  @prop({ type: () => [Object], required: true })
  public keyInputs!: KeyInput[];

  @prop({ required: true, type: Object })
  public keyFingerMapping!: Partial<KeyFingerMapping>;

  @prop({ type: String, required: true, enum: ExerciseType })
  public type!: ExerciseType;

  @prop({ type: String, required: true, unique: true })
  public hash!: string; // Поле для хранения хэша

  // @prop({ type: Number })
  // public difficulty?: number;
}
// TODO: перенести type в ExerciseSet?

const ExerciseModel = getModelForClass(Exercise, { schemaOptions: { timestamps: true } });

export default ExerciseModel;

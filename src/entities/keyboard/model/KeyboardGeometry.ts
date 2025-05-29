import { getModelForClass, prop } from '@typegoose/typegoose';

import { FormFactor } from '@/entities/keyboard';
import { KeyboardFormat } from '@/shared/types';

export class KeyboardGeometry {
  @prop({ type: String, required: true, unique: true }) // Например, "60percent_ansi"
  public geometryId!: string;

  @prop({ type: String, enum: FormFactor, required: true, default: FormFactor.SixtyPercent }) // Обязательный форм-фактор
  public formFactor!: FormFactor;

  @prop({ type: String, enum: KeyboardFormat, required: true }) // Обязательный формат
  public format!: KeyboardFormat;

  @prop({ type: Boolean, default: true }) // Для будущих кастомных геометрий
  public isCustom!: boolean;
}

const KeyboardGeometryModel = getModelForClass(KeyboardGeometry, { schemaOptions: { timestamps: true } });

export default KeyboardGeometryModel;

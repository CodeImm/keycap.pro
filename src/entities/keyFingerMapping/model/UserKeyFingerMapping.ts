import type { Ref } from '@typegoose/typegoose';
import { getModelForClass, prop } from '@typegoose/typegoose';

import { User } from '@/entities/user/model/User';

import { KeyFingerMappingScheme } from './KeyFingerMappingScheme';

export class UserKeyFingerMapping {
  @prop({ ref: () => User, required: true, index: true })
  public userId!: Ref<User>;

  @prop({ type: String, required: true })
  public title!: string;

  @prop({ type: String })
  public description?: string;

  @prop({ ref: () => KeyFingerMappingScheme, required: true })
  public schemeId!: Ref<KeyFingerMappingScheme>;
}

const UserKeyFingerMappingModel = getModelForClass(UserKeyFingerMapping, {
  schemaOptions: {
    timestamps: true,
  },
});

export default UserKeyFingerMappingModel;

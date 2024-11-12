import {KeyboardProfile} from '@/entities/keyboard/model/KeyboardProfile';
import {User} from '@/entities/user/model/User';
import { getModelForClass, prop } from '@typegoose/typegoose';
import type { Ref } from '@typegoose/typegoose';

class UserKeyboardProfile {
  @prop({ ref: 'User', required: true })
  public userId!: Ref<User>;

  @prop({  ref: 'KeyboardProfile', required: true })
  public keyboardProfileId!: Ref<KeyboardProfile>;

  // Здесь можно добавить дополнительные поля, если необходимо
}

const UserKeyboardProfileModel = getModelForClass(UserKeyboardProfile, { schemaOptions: { timestamps: true } });

export default UserKeyboardProfileModel
import type { Ref } from '@typegoose/typegoose';
import { getModelForClass, prop } from '@typegoose/typegoose';

import { ExerciseSet } from '@/entities/exercise/model/ExercixeSet';
import { KeyboardProfile } from '@/entities/keyboard/model/KeyboardProfile';
import { User } from '@/entities/user/model/User';

class UserKeyboardProfile {
  @prop({ ref: 'User', required: true })
  public userId!: Ref<User>;

  @prop({ ref: 'KeyboardProfile', required: true })
  public keyboardProfileId!: Ref<KeyboardProfile>;

  @prop({ ref: 'ExerciseSet', required: true })
  public currentExerciseSetId!: Ref<ExerciseSet>;

  // Здесь можно добавить дополнительные поля, если необходимо
}

const UserKeyboardProfileModel = getModelForClass(UserKeyboardProfile, { schemaOptions: { timestamps: true } });

export default UserKeyboardProfileModel;

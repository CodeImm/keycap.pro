import { getModelForClass, prop } from '@typegoose/typegoose';

import type { KeyFingerMapping } from '@/entities/keyboard';

import { Gender, Role } from '../types';

class Settings {
  @prop({ required: true })
  public theme!: string;

  @prop({ required: true })
  public notifications!: boolean;
}

class Profile {
  @prop()
  public bio?: string;

  @prop()
  public website?: string;
}

class Layout {
  @prop({ required: true })
  public system!: string;

  @prop({ required: true })
  public layoutLanguage!: string;

  @prop({ required: true })
  public layoutType!: string;

  @prop({ required: true })
  public layoutId!: string;
}

class KeyboardSettings {
  @prop({ _id: false, type: () => Map<string, number> })
  public fingersZonesSchema!: KeyFingerMapping;

  @prop({ _id: false })
  public layout!: Layout;
}

class Permissions {
  @prop({ required: true, default: false })
  public canLeaveReview!: boolean;

  @prop({ required: true, default: false })
  public isAdmin!: boolean;

  @prop({ required: true, default: false })
  public canAccessPremiumFeatures!: boolean;
}

class User {
  @prop({ required: true, unique: true, sparse: true, validate: { validator: (value: unknown) => !!value } })
  public email?: string;

  @prop({ default: false })
  public emailVerified?: Date;

  @prop()
  public imageURL?: string;

  @prop({ required: true, enum: Role, default: Role.User })
  public role!: string;

  @prop({ required: true, _id: false })
  public settings!: Settings;

  @prop()
  public lastLogin?: Date;

  @prop({ _id: false })
  public profile?: Profile;

  @prop({ type: String })
  public firstName?: string;

  @prop()
  public lastName?: string;

  @prop()
  public dateOfBirth?: Date;

  @prop({ enum: Gender })
  public gender?: string;

  @prop({ unique: true, sparse: true })
  public username?: string;

  @prop()
  public locale?: string;

  @prop({ required: false })
  public registrationCompleted!: Date;

  @prop({ _id: false })
  public keyboardSettings?: KeyboardSettings;

  @prop()
  public timeZone?: string;

  @prop({ required: true, _id: false })
  public permissions!: Permissions;

  @prop({ required: true })
  public createdAt!: Date;

  @prop({ required: true })
  public updatedAt!: Date;
}

const UserModel = getModelForClass(User, { schemaOptions: { timestamps: true, versionKey: '__v' } });

export default UserModel;

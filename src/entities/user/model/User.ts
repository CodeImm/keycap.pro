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
  @prop({ unique: true })
  github_id!: number;

  @prop({ unique: true })
  google_id!: number;

  @prop({ required: true, unique: true, sparse: true, validate: { validator: (value: unknown) => !!value } })
  public email?: string;

  @prop({ required: false, default: null })
  public emailVerified?: Date;

  @prop()
  public imageURL?: string;

  @prop({ required: true, enum: Role, default: Role.User })
  public role!: string;

  @prop({ required: false, _id: false })
  public settings?: Settings;

  @prop()
  public lastLogin?: Date;

  // @prop({ _id: false })
  // public profile?: Profile;

  @prop({ type: String })
  public firstName?: string;

  @prop({ type: String, default: null })
  public lastName!: string | null;

  @prop({ type: Date })
  public dateOfBirth?: Date;

  @prop({ enum: Gender })
  public gender?: string;

  @prop({ unique: true, sparse: true })
  public username?: string;

  @prop()
  public locale?: string;

  @prop({ required: false, default: null })
  public registrationCompleted?: Date;

  // @prop({ _id: false })
  // public keyboardSettings?: KeyboardSettings;

  @prop({ type: String })
  public timeZone?: string;

  // @prop({ required: true, _id: false })
  // public permissions!: Permissions;
}

const UserModel = getModelForClass(User, { schemaOptions: { timestamps: true } });

export default UserModel;

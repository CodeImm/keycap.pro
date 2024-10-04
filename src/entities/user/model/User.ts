import { getModelForClass, prop } from '@typegoose/typegoose';
import { Types } from 'mongoose';

import { DEFAULT_HOME_ROW, type HomeRow, HomeRowSchema, KeyFingerMappingSchemeType } from '@/entities/keyFingerMapping';
import { type KeyboardFormat, LayoutId, System } from '@/entities/keyboard';

import { Gender, Role } from './types';

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

class KeyboardSettings {
  @prop({ enum: System })
  public system!: System;

  @prop({ type: String })
  public format!: KeyboardFormat;

  @prop({ enum: LayoutId })
  public layoutId!: LayoutId;

  @prop({ type: Types.ObjectId })
  public activeKeyFingerMappingSchemeId!: Types.ObjectId;

  @prop({ enum: KeyFingerMappingSchemeType, required: true })
  public activeKeyFingerMappingSchemeType!: KeyFingerMappingSchemeType;

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

  @prop({ _id: false })
  public keyboardSettings?: KeyboardSettings;

  @prop({ type: String })
  public timeZone?: string;

  // @prop({ required: true, _id: false })
  // public permissions!: Permissions;
}

const UserModel = getModelForClass(User, { schemaOptions: { timestamps: true } });

export default UserModel;

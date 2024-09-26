import { getModelForClass, prop } from '@typegoose/typegoose';

class Session {
  @prop({ required: true })
  public _id!: string;

  @prop({ required: true })
  public user_id!: string;

  @prop({ required: true })
  public expires_at!: Date;
}

const SessionModel = getModelForClass(Session, { schemaOptions: { _id: false } });

export default SessionModel;

import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose';
import { v4 as UUIDv4 } from 'uuid';

class ToDoList {
  @prop({ type: String, required: true })
  public content: string;

  @prop({ type: String, required: true })
  public dateCreated: string;

  @prop({ type: String, unique: true, required: true, default: () => UUIDv4() })
  public uniqueId: string;
}

@modelOptions({ schemaOptions: { collection: 'users', timestamps: true } })
class User {
  @prop({ type: String, required: true, unique: true })
  public email: string;

  @prop({ type: String, required: true })
  public password: string;

  public createdAt?: Date;

  public updatedAt?: Date;

  @prop({ required: true, default: [] })
  public todoList: ToDoList[];
}

const UserModel = getModelForClass(User);

export default UserModel;

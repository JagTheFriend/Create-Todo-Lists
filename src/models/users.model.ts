import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose';

class ToDoList {
  @prop({ type: String, required: true })
  public content: string;

  @prop({ type: String, required: true })
  public dateCreated: string;
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

  @prop({ required: true, default: [] })
  public uniqueIds: string[];
}

const UserModel = getModelForClass(User);

export default UserModel;

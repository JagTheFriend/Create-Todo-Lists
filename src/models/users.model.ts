import { prop, getModelForClass, modelOptions, Ref } from '@typegoose/typegoose';

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

  @prop({ required: true, ref: () => ToDoList, default: [] })
  public todoList: Ref<ToDoList>[];
}

const UserModel = getModelForClass(User);

export default UserModel;

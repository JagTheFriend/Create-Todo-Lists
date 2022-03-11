import { TodoList, User } from '@interfaces/users.interface';
import { CreateNewTodo, DeleteTodo, UpdatedTodo } from '@dtos/features.dto';
import { HttpException } from '@exceptions/HttpException';
import { v4 as UUIDv4 } from 'uuid';

class CoreService {
  public async viewTodo(user: User): Promise<{ todoList: TodoList[]; uniqueIds: string[] }> {
    return { todoList: user.todoList, uniqueIds: user.uniqueIds };
  }

  public async addTodo(user: User, data: CreateNewTodo): Promise<{ uniqueId: string }> {
    const _id = UUIDv4();
    user.todoList.push({ content: data.content, dateCreated: data.dateCreated });
    user.uniqueIds.push(_id);
    await user.save();
    return { uniqueId: _id };
  }

  public async removeTodo(user: User, uniqueId: DeleteTodo): Promise<void> {
    const index = user.uniqueIds.indexOf(uniqueId.uniqueId);
    if (index === -1) throw new HttpException(402, `Invalid ID: ${uniqueId.uniqueId}`);
    user.uniqueIds.splice(index, 1);
    user.todoList.splice(index, 1);
    await user.save();
  }

  public async editTodo(user: User, data: UpdatedTodo): Promise<void> {
    const index = user.uniqueIds.indexOf(data.uniqueId);
    if (index === -1) throw new HttpException(402, `Invalid ID: ${data.uniqueId}`);
    user.todoList[index] = { content: data.content, dateCreated: new Date().toISOString() };
    await user.save();
  }
}

export default CoreService;

import { User } from '@interfaces/users.interface';
import { CreateNewTodo, DeleteTodo } from '@dtos/features.dto';
import { HttpException } from '@exceptions/HttpException';
import { v4 as UUIDv4 } from 'uuid';

class CoreService {
  public async addTodo(user: User, data: CreateNewTodo): Promise<void> {
    user.todoList.push({ content: data.content, dateCreated: data.dateCreated });
    user.uniqueIds.push(UUIDv4());
    user.save();
  }

  public async removeTodo(user: User, uniqueId: DeleteTodo): Promise<void> {
    const index = user.uniqueIds.indexOf(uniqueId.uniqueId);
    if (index === -1) throw new HttpException(400, `Invalid ID: ${uniqueId.uniqueId}`);
    // user.todoList.
  }
}

export default CoreService;

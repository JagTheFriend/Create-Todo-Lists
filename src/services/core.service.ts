import { User } from '@interfaces/users.interface';
import { CreateNewTodo, DeleteTodo } from '@dtos/features.dto';

class CoreService {
  public async addTodo(user: User, data: CreateNewTodo): Promise<void> {
    user.todoList.push({ content: data.content, dateCreated: data.dateCreated });
    user.save();
  }

  public async removeTodo(user: User, dateCreated: DeleteTodo): Promise<void> {
    const arr = [];
    for (const i of user.todoList) {
      if (i.dateCreated !== dateCreated.dateCreated) arr.push(i);
    }
    user.todoList = arr;
    user.save();
  }
}

export default CoreService;

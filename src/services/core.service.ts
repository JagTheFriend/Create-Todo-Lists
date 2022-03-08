import { User } from '@interfaces/users.interface';
import { CreateNewTodo } from '@dtos/features.dto';

class CoreService {
  public async addTodo(user: User, data: CreateNewTodo): Promise<void> {
    user.todoList.push({ content: data.content, dateCreated: data.dateCreated });
    user.save();
  }
}

export default CoreService;

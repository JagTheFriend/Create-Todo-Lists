import { User } from '@interfaces/users.interface';
import { CreateNewTodo } from '@dtos/features.dto';

class CoreService {
  // public users = userModel;
  public async addTodo(user: User, data: CreateNewTodo) {
    console.log(data);
    console.log(user);
  }
}

export default CoreService;

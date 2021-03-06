import CoreService from '@services/core.service';
import { RequestWithUser } from '@interfaces/auth.interface';
import { NextFunction, Response } from 'express';
import { CreateNewTodo, DeleteTodo, UpdatedTodo } from '@dtos/features.dto';
import { User } from '@interfaces/users.interface';

class IndexController {
  public coreService = new CoreService();

  public index = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      res.status(300).redirect('/dashboard');
    } catch (error) {
      next(error);
    }
  };

  public viewTodo = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      res.send(await this.coreService.viewTodo(<User>req.user));
    } catch (error) {
      next(error);
    }
  };

  public addTodo = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      res.status(200).send(await this.coreService.addTodo(<User>req.user, <CreateNewTodo>req.body));
    } catch (error) {
      next(error);
    }
  };

  public removeTodo = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      await this.coreService.removeTodo(<User>req.user, <DeleteTodo>req.body);
      res.status(200).send({ message: 'Removed todo' });
    } catch (error) {
      next(error);
    }
  };

  public editTodo = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      await this.coreService.editTodo(<User>req.user, <UpdatedTodo>req.body);
      res.status(200).send({ message: 'Updated todo' });
    } catch (error) {
      next(error);
    }
  };
}

export default IndexController;

import CoreService from '@services/core.service';
import { RequestWithUser } from '@interfaces/auth.interface';
import { NextFunction, Request, Response } from 'express';
import { CreateNewTodo } from '@dtos/features.dto';
import { User } from '@interfaces/users.interface';

class IndexController {
  public coreService = new CoreService();

  public index = (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).render('dashboard');
    } catch (error) {
      next(error);
    }
  };

  public addTodo = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      this.coreService.addTodo(<User>req.user, <CreateNewTodo>req.body);
      res.status(200).send(req.body);
    } catch (error) {
      next(error);
    }
  };
}

export default IndexController;

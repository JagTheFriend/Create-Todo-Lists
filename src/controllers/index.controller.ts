import CoreService from '@services/core.service';
import { RequestWithUser } from '@interfaces/auth.interface';
import { NextFunction, Request, Response } from 'express';
import { CreateNewTodo, DeleteTodo } from '@dtos/features.dto';
import { User } from '@interfaces/users.interface';

class IndexController {
  public coreService = new CoreService();

  public index = (req: Request, res: Response, next: NextFunction) => {
    try {
      res
        .status(200)
        .set(
          'Content-Security-Policy',
          "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'",
        )
        .render('dashboard');
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
      await this.coreService.addTodo(<User>req.user, <CreateNewTodo>req.body);
      res.status(200).send(req.body);
    } catch (error) {
      next(error);
    }
  };

  public removeTodo = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      await this.coreService.removeTodo(<User>req.user, <DeleteTodo>req.body);
      res.status(200).send(req.body);
    } catch (error) {
      next(error);
    }
  };
}

export default IndexController;

import { RequestWithUser } from '@interfaces/auth.interface';
import { NextFunction, Request, Response } from 'express';

class IndexController {
  public index = (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).render('dashboard');
    } catch (error) {
      next(error);
    }
  };
  public newToDo = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      res.status(200).send(req.body);
    } catch (error) {
      next(error);
    }
  };
}

export default IndexController;

import { Router } from 'express';
import IndexController from '@controllers/index.controller';
import { Routes } from '@interfaces/routes.interface';
import authMiddleware from '@middlewares/auth.middleware';
import validationMiddleware from '@middlewares/validation.middleware';
import { CreateNewTodo, DeleteTodo } from '@dtos/features.dto';

class IndexRoute implements Routes {
  public path = '/';
  public router = Router();
  public indexController = new IndexController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.indexController.index);
    this.router.post(`${this.path}new`, authMiddleware, validationMiddleware(CreateNewTodo, 'body'), this.indexController.addTodo);
    this.router.post(`${this.path}delete`, authMiddleware, validationMiddleware(DeleteTodo, 'body'), this.indexController.removeTodo);
  }
}

export default IndexRoute;

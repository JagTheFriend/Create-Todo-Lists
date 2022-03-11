import { Router } from 'express';
import IndexController from '@controllers/index.controller';
import { Routes } from '@interfaces/routes.interface';
import authMiddleware from '@middlewares/auth.middleware';
import validationMiddleware from '@middlewares/validation.middleware';
import { CreateNewTodo, DeleteTodo, UpdatedTodo } from '@dtos/features.dto';

class IndexRoute implements Routes {
  public path = '/';
  public router = Router();
  public indexController = new IndexController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}dashboard`, authMiddleware, this.indexController.index);
    this.router.get(`${this.path}view`, authMiddleware, this.indexController.viewTodo);
    this.router.post(`${this.path}new`, authMiddleware, validationMiddleware(CreateNewTodo, 'body'), this.indexController.addTodo);
    this.router.post(`${this.path}edit`, authMiddleware, validationMiddleware(UpdatedTodo, 'body'), this.indexController.editTodo);
    this.router.post(`${this.path}delete`, authMiddleware, validationMiddleware(DeleteTodo, 'body'), this.indexController.removeTodo);
  }
}

export default IndexRoute;

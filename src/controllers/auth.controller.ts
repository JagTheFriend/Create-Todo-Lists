import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '@dtos/users.dto';
import { RequestWithUser } from '@interfaces/auth.interface';
import { User } from '@interfaces/users.interface';
import AuthService from '@services/auth.service';

class RenderAuthPage {
  public renderSignUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).render('auth', { signup: true });
    } catch (error) {
      next(error);
    }
  };

  public renderLogIn = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).render('auth', { signup: false });
    } catch (error) {
      next(error);
    }
  };

  public renderLogOut = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      res.status(200).render('auth', { signup: false });
    } catch (error) {
      next(error);
    }
  };
}

class AuthController extends RenderAuthPage {
  public authService = new AuthService();

  public signUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: CreateUserDto = req.body;
      await this.authService.signup(userData);
      res.status(300).redirect('/dashboard');
    } catch (error) {
      next(error);
    }
  };

  public logIn = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: CreateUserDto = req.body;
      const { cookie } = await this.authService.login(userData);
      res.setHeader('Set-Cookie', [cookie]);
      res.status(300).redirect('/dashboard');
    } catch (error) {
      next(error);
    }
  };

  public logOut = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const userData: User = req.user;
      await this.authService.logout(userData);
      res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
      res.status(300).redirect('/login');
    } catch (error) {
      next(error);
    }
  };
}

export default AuthController;

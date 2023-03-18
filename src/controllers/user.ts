import { NextFunction, Request, Response } from 'express';
import handleResponse from '../heplers/response';
import services from '../services';

interface CustomRequest extends Request {
  id :number
}

async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await services.user.create(req.body);
    res.send(handleResponse('create data user sucess', result))
  }catch (err) {
    next(err)
  }
}

async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await services.user.getOneBy(req.body);
    res.send(handleResponse('login success', result));
  }catch (err) {
    next(err)
  }
}

async function checkUser(req: CustomRequest, res: Response, next: NextFunction) {
  try {
    const result = await services.user.checkUser({ id : req.id });
    res.send(handleResponse('login success', result));
  }catch (err) {
    next(err)
  }
}

export default {
  create,
  login,
  checkUser,
}

import { Response, Request, NextFunction } from 'express';
import services from '../services';
import handleResponse from '../heplers/response';

interface CustomRequest extends Request{
  id : number
}

interface ReqQuery {
  description?: string;
  location?: string;
  page?: string;
  full_time?: string;
}

async function getALl(req:Request, res: Response, next : NextFunction) {
  try {
    const { description, location, page, full_time } = req.query as ReqQuery;
    const result = await services.reqruitment.getAll({
      description, location, page, full_time,
    });
    res.send(handleResponse('get all data reqruitment', result))
  } catch (error) {
    next(error);
  }
}

async function getBy(req:CustomRequest, res: Response, next : NextFunction) {
  try {
    const { id } = req.params;
    const result = await services.reqruitment.getByOne(id);
    res.send(handleResponse('get detail data reqruitment', result));
  } catch (error) {
    next(error);
  }
}

export default {
  getALl,
  getBy,
}

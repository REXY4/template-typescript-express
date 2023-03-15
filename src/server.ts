import express, { Request, Response } from 'express';
import logger from './logger/logger';

class Server {
  private app:any = express();
  constructor() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended : true }));
    this.app.get('/', async(req: Request, res : Response) => {
      res.send('Typescript & express server')
    });
  }
  async startServer() {
    logger.info('cREATE MESSAGE')
    this.app.listen(4000, () => {
      logger.info(`⚡️[server]: Server is running at http://localhost:${4000}`);
    })
  }
}

export default Server;

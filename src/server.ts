import express, { Request, Response } from 'express';
import logger from './logger/logger';
import httpRequestMiddleWare from './middlewares/httpLogger';

class Server {
  private app:any = express();
  protected config:any;
  constructor(option:any) {
    this.config = option;
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended : true }));
    this.app.get('/', httpRequestMiddleWare, async(req: Request, res : Response) => {
      res.send('Typescript & express server')
    });
  }

  async startServer() {
    const { port, name, description, author, host } = this.config.app;
    this.app.listen(port, () => {
      console.log({
        message : 'info app',
        name,
        description,
        author,
      })
      logger.info(`⚡️[server]: Server is running at http://${host}:${port}`);
    })
  }
}

export default Server;

import express, { Request, Response } from 'express';
import controllers from './controllers';
import logger from './logger/logger';
import httpRequestMiddleWare from './middlewares/httpLogger';

class Server {
  private app:any = express();
  protected config:any;
  constructor(option:any) {
    this.config = option;
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended : true }));
    this.app.get('/api/v1', httpRequestMiddleWare, controllers.ping.checkALl)
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

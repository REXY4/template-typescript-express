import { createConnection } from 'typeorm';
import config from '../config';
import logger from './logger/logger';
import Server from './server';
import routers from './routers';

class Manifest extends Server {
  private routes:any;
  constructor() {
    super({ ...config });

  }

  async setup() : Promise<void> {
    await this.setupSql();
    await this.startServer();
  }

  start(): void {
    this.setup()
  }

  async setupSql():Promise<void> {
    const { type, host, port,  username, password, database } = config.sql;
    await createConnection({
      type,
      host,
      port,
      username,
      password,
      database,
    }).then(() => {
      logger.info('Connected to database');
    }).catch((error) => {
      logger.error(`Error connecting to database: ${error}`);
      throw error
    });
  }
}

export default Manifest;

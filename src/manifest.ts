import 'reflect-metadata'
import config from '../config';
import Server from './server';
import { SqlOrm } from './sql/orm';

class Manifest extends Server {
  private sqlOrm:any;

  constructor() {
    super({ ...config });
    this.sqlOrm =  new SqlOrm();
  }

  async setup() : Promise<void> {
    await this.setupSql();
    await this.startServer();
  }

  start(): void {
    this.setup()
  }

  async setupSql():Promise<void> {
    await this.sqlOrm.start();
  }
}

export default Manifest;

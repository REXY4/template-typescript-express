import config from '../config';
import Server from './server';

class Manifest extends Server {
  constructor() {
    super({ ...config });
  }

  async setup() : Promise<void> {
    await this.startServer();
  }

  start(): void {
    this.setup()
  }

}

export default Manifest;

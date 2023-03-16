import * as dotenv from 'dotenv'
dotenv.config();

import app from './app';
import sql from './sql'
export default {
  app,
  sql,
}

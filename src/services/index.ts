import { UserService } from './user'
import {  Recruitment } from './reqruitment'

export default {
  user : new UserService(),
  reqruitment : new Recruitment(),
}

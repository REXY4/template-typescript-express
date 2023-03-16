import controllers from '../controllers';
import { authentication } from '../middlewares/authentication';

const moduleRouteDef = {
  basePath: '/api/v1/user',
  description: 'User APIs',
  routes : [
    {
      active: true,
      method: 'post',
      path: '/register',
      summary: 'login',
      description: 'Create Api User',
      action: [
        controllers.user.create,
      ],
    },
    {
      active: true,
      method: 'post',
      path: '/login',
      summary: 'login',
      description: 'Login Api User',
      action: [
        controllers.user.login,
      ],
    },
    {
      active: true,
      method: 'get',
      path: '/check',
      summary: 'login',
      description: 'Login Api User',
      action: [
        authentication,
        controllers.user.checkUser,
      ],
    },
  ],
}

export default moduleRouteDef;

import controllers from '../controllers'
import { authentication } from '../middlewares/authentication';

interface Object {
  [props:string] : any
}

const moduleRouteDef:Object = {
  basePath: '/api/v1/reqruitment',
  description: 'Reqruitment APIs',
  routes : [
    {
      active: true,
      method: 'get',
      path: '/',
      summary: 'reqruitment',
      description: 'Get all Reqruitment',
      action: [
        // authentication,
        controllers.reqruitment.getALl,
      ],
    },
    {
      active: true,
      method: 'get',
      path: '/:id',
      summary: 'reqruitment',
      description: 'Get Detail Reqruitment',
      action: [
        authentication,
        controllers.reqruitment.getBy,
      ],
    },
  ],
}

export default moduleRouteDef;

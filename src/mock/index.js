import Mock from 'mockjs'

import user from './user'

Mock.mock('/hehe', 'get', user.getList)
export default {
  path: '/op',
  name: 'op',
  component: {template: '<router-view></router-view>'},
  redirect: '/op/recursion',
  children: [
    {path: 'recursion',name:'recursion',component: {template: '<router-view></router-view>'},
      children: [
        {path: 'index', name: 're_index1', component: () => import('@/views/recursion/index')}
      ]
    },
    {path: 'mock',name:'mock',component: {template: '<router-view></router-view>'},
      children: [
        {path: 'index', name: 'mo_index1', component: () => import('@/views/mock/index')}
      ]
    },
    {path: 'slot',name:'slot',component: {template: '<router-view></router-view>'},
      children: [
        {path: 'index', name: 'sl_index1', component: () => import('@/views/slot/index')}
      ]
    },
    {path: 'jsx',name:'jsx',component: {template: '<router-view></router-view>'},
      children: [
        {path: 'index', name: 'jsx_index1', component: () => import('@/views/jsx/index')}
      ]
    },
    {path: 'animation',name:'animation',component: {template: '<router-view></router-view>'},
      children: [
        {path: 'index', name: 'animation_index1', component: () => import('@/views/animation/index')},
        {path: 'index2', name: 'animation_index2', component: () => import('@/views/animation/index2')}
      ]
    },
    {path: 'lbs',name:'lbs',component: {template: '<router-view></router-view>'},
      children: [
        {path: 'index', name: 'lbs_index1', component: () => import('@/views/lbs/index')}
      ]
    },
    {path: 'user',name:'user',component: {template: '<router-view></router-view>'},
      children: [
        {path: 'index', name: 'user_index1', component: () => import('@/views/user/index')}
      ]
    },
    {path: 'fetch',name:'fetch',component: {template: '<router-view></router-view>'},
      children: [
        {path: 'index', name: 'fetch_index1', component: () => import('@/views/fetch/index')}
      ]
    },
    {path: 'wechat',name:'wechat',component: {template: '<router-view></router-view>'},
      children: [
        {path: 'index', name: 'wechat_index1', component: () => import('@/views/wechat/index')}
      ]
    },
  ]
}
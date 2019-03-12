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
  ]
}
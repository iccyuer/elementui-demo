import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Table from '@/components/Table'
import Table2 from '@/components/Table2'
import SlotParent from '@/components/SlotParent'
import Tabs from '@/components/Tabs'
import Test from '@/components/Test'
import Wechat from '@/components/Wechat'
import xiahuaxian from '@/components/xiahuaxian'
import toTop from '@/components/toTop'
import toTop1 from '@/components/toTop1'
import Select from '@/components/Select'
import infinite from '@/components/infinite'
import infinite2 from '@/components/infinite2'
import allowOrigin from '@/components/allowOrigin'
import pull from '@/components/pull'
import scroll from '@/components/scroll'
import dian9 from '@/components/dian9'
import form from '@/components/form'
import toForm from '@/components/toForm'


import index from '@/components/vux/index'
import tabbar from '@/components/vux/tabbar'
import sticky from '@/components/vux/sticky'
import dateFormat from '@/components/vux/dateFormat'
import actionSheet from '@/components/vux/actionSheet'
import alert from '@/components/vux/alert'
import viewBox from '@/components/vux/viewBox'


import s1 from '@/components/store/s1'
import s2 from '@/components/store/s2'
import s3 from '@/components/store/s3'

import floatTabTest from '@/components/me/floatTabTest'
import test from '@/components/me/test'

Vue.use(Router)

export default new Router({
  // mode:'history',
  base:'/',
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {path:'/',name:'Table',component:Table},
    {path:'/table2',name:'Table',component:Table2},
    {path:'/slot',name:'Table',component:SlotParent},
    {path:'/tabs',name:'Tabs',component:Tabs},
    {path:'/Test',name:'Test',component:Test},
    {path:'/Wechat',name:'Wechat',component:Wechat},
    {path:'/xiahuaxian',name:'xiahuaxian',component:xiahuaxian},
    {path:'/totop',name:'totop',component:toTop},
    {path:'/totop1',name:'totop1',component:toTop1},
    {path:'/select',name:'Select',component:Select},
    {path:'/infinite',name:'infinite',component:infinite},
    {path:'/infinite2',name:'infinite2',component:infinite2},
    {path:'/allow-origin',name:'allowOrigin',component:allowOrigin},
    {path:'/app/home/withdraw',name:'pull3',component:pull},
    {path:'/scroll',name:'scroll',component:scroll},
    {path:'/dian9',name:'dian9',component:dian9},
    {path:'/dian9',name:'dian9',component:dian9},
    {path:'/form',name:'form',component:form},
    {path:'/toform',name:'toForm',component:toForm},

    {path:'/vux',name:'vux',component:{template: '<router-view></router-view>'},
      children:[
        {path:'/vux/tabbar',name:'tabbar',component:tabbar},
        {path:'/vux/sticky',name:'sticky',component:sticky},
        {path:'/vux/dateformat',name:'dateformat',component:dateFormat},
        {path:'/vux/actionsheet',name:'actionsheet',component:actionSheet},
        {path:'/vux/alert',name:'alert',component:alert},
        {path:'/vux/viewbox',name:'viewBox',component:viewBox},
      ]
    },

    {path:'/store',name:'store',component:{template: '<router-view></router-view>'},
      children:[
        {path:'/store/s1',name:'s1',component:s1},
        {path:'/store/s2',name:'s2',component:s2},
        {path:'/store/s3',name:'s3',component:s3},
      ]
    },

    {path:'/me',name:'me',component:{template: '<router-view></router-view>'},
      children:[
        {path:'/me/floattabtest',name:'floattabtest',component:floatTabTest},
        {path:'/me/test',name:'test',component:test},
      ]
    },

  ]
})

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
import modal from '@/components/vux/modal'


import s1 from '@/components/store/s1'
import s2 from '@/components/store/s2'
import s3 from '@/components/store/s3'


import floatTabTest from '@/components/me/floatTabTest'
// import test from '@/components/me/test'
const test = () => import('@/components/me/test').then(m => m.default || m)
// const test2 = () => import('@/components/me/test').then(m => m.default || m)
// console.log(test1);
// console.log(test2);
const promise = () => import('@/components/me/promise').then(m => m.default || m)
const cutting = () => import('@/components/me/cutting').then(m => m.default || m)
const watch = () => import('@/components/me/watch').then(m => m.default || m)
const iconfont = () => import('@/components/me/iconfont').then(m => m.default || m)
const test2 = () => import('@/components/me/test2').then(m => m.default || m)
const test3 = () => import('@/components/me/test3').then(m => m.default || m)
const test4 = () => import('@/components/me/test4').then(m => m.default || m)
const test5 = () => import('@/components/me/test5').then(m => m.default || m)
const flexible = () => import('@/components/me/flexible').then(m => m.default || m)
const select = () => import('@/components/me/select').then(m => m.default || m)
const flex = () => import('@/components/me/flex').then(m => m.default || m)
const auth = () => import('@/components/me/auth').then(m => m.default || m)
const style1 = () => import('@/components/me/style_1').then(m => m.default || m)
const style2 = () => import('@/components/me/style_2').then(m => m.default || m)
const style3 = () => import('@/components/me/style_3').then(m => m.default || m)
const style4 = () => import('@/components/me/style_4').then(m => m.default || m)
const px12 = () => import('@/components/me/px12').then(m => m.default || m)
const edit = () => import('@/components/me/edit').then(m => m.default || m)
const share = () => import('@/components/me/share').then(m => m.default || m)

const backTop = () => import('@/components/me/back-top/index').then(m => m.default || m)

const lotteryTest = () => import('@/components/me/lottery/lotteryTest').then(m => m.default || m)

const out = () => import('@/components/me/comm/out').then(m => m.default || m)

const dia = () => import('@/components/me/dialog/dia').then(m => m.default || m)

const slideIndex = () => import('@/components/me/slide/index').then(m => m.default || m)

const infiniteMe = () => import('@/components/me/infinite-rolling/index').then(m => m.default || m)
const infiniteTest = () => import('@/components/me/infinite-rolling/test').then(m => m.default || m)
const barrage1 = () => import('@/components/me/infinite-rolling/barrage1').then(m => m.default || m)

const navMenu = () => import('@/components/ele/navMenu').then(m => m.default || m)
const messageBox = () => import('@/components/ele/messageBox').then(m => m.default || m)
const forms = () => import('@/components/ele/form').then(m => m.default || m)
const input = () => import('@/components/ele/input').then(m => m.default || m)
const time = () => import('@/components/ele/time').then(m => m.default || m)
const commonDia = () => import('@/components/ele/commonDia').then(m => m.default || m)
const tabview = () => import('@/components/ele/tabview/index').then(m => m.default || m)
// const switch = () => import('@/components/ele/switch').then(m => m.default || m)

const cellSwipe = () => import('@/components/mint/cellSwipe').then(m => m.default || m)

const sc1 = () => import('@/components/scss/sc1').then(m => m.default || m)

const tooltip = () => import('@/components/uiv/tooltip').then(m => m.default || m)

const vant_modal = () => import('@/components/vant/index').then(m => m.default || m)

const dialog_1 = () => import('@/components/dialog_1/index').then(m => m.default || m)

const passvalue = () => import('@/components/me/passValue/index').then(m => m.default || m)

const camera = () => import('@/components/me/camera/index').then(m => m.default || m)
const camera2 = () => import('@/components/me/camera/index2').then(m => m.default || m)
const camera3 = () => import('@/components/me/camera/index3').then(m => m.default || m)

const bug_ios = () => import('@/components/me/bug/ios').then(m => m.default || m)

const promise_1 = () => import('@/components/me/promise/index').then(m => m.default || m)
const promise_2 = () => import('@/components/me/promise/index2').then(m => m.default || m)
const promise_3 = () => import('@/components/me/promise/index3').then(m => m.default || m)

Vue.use(Router)

export default new Router({
  mode:'history',
  base:'/',
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {path:'/',redirect: '/table'},
    {path:'/table',name:'Table',component:Table},
    {path:'/table2',name:'Table2',component:Table2},
    {path:'/slot',name:'Table3',component:SlotParent},
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
        {path:'/vux/modal',name:'modal',component:modal},
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
        {path:'/me/promise',name:'promise',component:promise},
        {path:'/me/cutting',name:'cutting',component:cutting},
        {path:'/me/watch',name:'watch',component:watch},
        {path:'/me/iconfont',name:'iconfont',component:iconfont},
        {path:'/me/test2',name:'test2',component:test2},
        {path:'/me/test3',name:'test3',component:test3},
        {path:'/me/test4',name:'test4',component:test4},
        {path:'/me/test5',name:'test5',component:test5},
        {path:'/me/flexible',name:'flexible',component:flexible},
        {path:'/me/select',name:'select',component:select},
        {path:'/me/flex',name:'flex',component:flex},
        {path:'/me/auth',name:'auth',component:auth},
        {path:'/me/style1',name:'style1',component:style1},
        {path:'/me/style2',name:'style2',component:style2},
        {path:'/me/style3',name:'style3',component:style3},
        {path:'/me/style4',name:'style4',component:style4},
        {path:'/me/px12',name:'px12',component:px12},
        {path:'/me/edit',name:'edit',component:edit},
        {path:'/me/share',name:'share',component:share},

        {path:'/me/back_top',name:'backTop',component:backTop},

        {path:'comm',name:'comm',component:{template: '<router-view></router-view>'},
          children:[
            {path:'out',name:'out',component:out},
          ]
        },
        {path:'lottery',name:'lottery',component:{template: '<router-view></router-view>'},
          children:[
            {path:'lotterytest',name:'lotterytest',component:lotteryTest},
          ]
        },
        {path:'dialog',name:'dialog',component:{template: '<router-view></router-view>'},
          children:[
            {path:'dia',name:'dia',component:dia},
          ]
        },
        {path:'slide',name:'slide',component:{template: '<router-view></router-view>'},
          children:[
            {path:'index',name:'index',component:slideIndex},
          ]
        },
        {path:'passvalue',name:'passvalue',component:{template: '<router-view></router-view>'},
          children:[
            {path:'index',name:'index',component:passvalue},
          ]
        },
        {path:'infinite',name:'infinite',component:{template: '<router-view></router-view>'},
          children:[
            {path:'index',name:'index',component:infiniteMe},
            {path:'test',name:'test1',component:infiniteTest},
            {path:'barrage1',name:'barrage1',component:barrage1},
          ]
        },
        {path:'camera',name:'camera',component:{template: '<router-view></router-view>'},
          children:[
            {path:'index1',name:'camera_index',component:camera},
            {path:'index2',name:'camera_index2',component:camera2},
            {path:'index3',name:'camera_index3',component:camera3},
          ]
        },
        {path:'bug',name:'bug',component:{template: '<router-view></router-view>'},
          children:[
            {path:'bug_ios',name:'bug_ios',component:bug_ios},
          ]
        },
        {path:'promise',name:'promise',component:{template: '<router-view></router-view>'},
          children:[
            {path:'index1',name:'promise_1',component:promise_1},
            {path:'index2',name:'promise_2',component:promise_2},
            {path:'index3',name:'promise_3',component:promise_3},
          ]
        },
      ]
    },

    {path:'/ele',name:'ele',component:{template: '<router-view></router-view>'},
      children:[
        {path:'/ele/navmenu',name:'navMenu',component:navMenu},
        {path:'/ele/messagebox',name:'messageBox',component:messageBox},
        {path:'/ele/form',name:'form',component:forms},
        {path:'/ele/input',name:'input',component:input},
        {path:'/ele/time',name:'time',component:time},
        {path:'/ele/form',name:'ele_form',component:forms},
        {path:'/ele/dia',name:'ele_dia',component:commonDia},
        {path:'/ele/tabview',name:'tabview',component:tabview},
        // {path:'/ele/switch',name:'switch',component:switch},
      ]
    },
    {path:'/mint',name:'mint',component:{template: '<router-view></router-view>'},
      children:[
        {path:'/mint/cellSwipe',name:'cellSwipe',component:cellSwipe},
      ]
    },

    {path:'/scss',name:'scss',component:{template: '<router-view></router-view>'},
      children:[
        {path:'sc1',name:'sc1',component:sc1},
      ]
    },
    {path:'/uiv',name:'uiv',component:{template: '<router-view></router-view>'},
      children:[
        {path:'tooltip',name:'tooltip',component:tooltip},
      ]
    },
    {path:'/vant',name:'vant',component:{template: '<router-view></router-view>'},
      children:[
        {path:'modal',name:'modal',component:vant_modal},
      ]
    },
    {path:'/dialog_1',name:'dialog_1',component:{template: '<router-view></router-view>'},
      children:[
        {path:'index',name:'dialog_1_index',component:dialog_1},
      ]
    },
  ]
})

<template>
  <div class="action-sheet">
    <x-switch  title="click" v-model="show1"></x-switch>
    <actionsheet
    v-model="show1"
    show-cancel
    cancel-text="cancel"
    theme="ios"
    :menus="menus1"
    :close-on-clicking-mask='true'
    :close-on-clicking-menu='true'
    @on-click-menu="click1"
    >
    <h1 slot="header">我是slot的头部</h1>
    </actionsheet>
    <!-- v-model显示与否,
        menus显示的菜单内容：键值对，名字带.noop的为普通文本，无点击事件；delete为删除
        theme默认ios风格，显示在底部；android为正中，无cancel按钮
     -->
  </div>
</template>

<script>
import {Actionsheet,XSwitch} from 'vux'
export default {
  components:{
    Actionsheet,XSwitch
  },
  data(){
    return{
      show1:false,
      menus1: {
        'title.noop': 'header',
        menu1: 'item1',
        menu2: 'item2',
        delete: '<span style="color:red">Delete</span>'
      },      
      // menus1: [{
      //   label: 'header',
      //   type: 'info'
      // }, {
      //   label: 'Primary',
      //   type: 'primary',
      //   value: 'primary',
      //   otherProp: 'hey'
      // }, {
      //   label: 'Warn',
      //   type: 'warn'
      // }, {
      //   label: 'Disabled',
      //   type: 'disabled'
      // }, {
      //   label: 'Default'
      // }],
    }
  },
  methods:{
    click1(key,item){
      console.log(key,item);
    }
  }
}
</script>

<style>

</style>

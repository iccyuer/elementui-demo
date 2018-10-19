<template>
<view-box ref="viewbox" class="sdas">
  <div>
    <div style="height:100px;border:1px solid #999"></div>
    <button @click="click"> click me </button>
    <div style="height:44px;">
        <sticky
        ref="sticky"
        scroll-box="vux_view_box_body"
        :offset="46"
        :check-sticky-support="false"
        :disabled="disabled">
        <tab :line-width="1">
          <tab-item selected>正在正映</tab-item>
          <tab-item>即将上映</tab-item>
        </tab>
      </sticky>
    </div>
    <li v-for="i in 40">{{i}}</li>
  </div>
</view-box>
</template>

<script>
import { Tab, TabItem,Sticky ,ViewBox} from 'vux'

export default {
  components: {
    Sticky,Tab, TabItem,ViewBox,
  },
  data(){
    return{
      disabled: typeof navigator !== 'undefined' && /iphone/i.test(navigator.userAgent) && /ucbrowser/i.test(navigator.userAgent)
    }
  },
  methods:{
    scroll(val){
      console.log('val',val);
    },
    click(){
      // this.$refs.viewbox.scrollTo('top');
      //滚动到指定位置(number，无参数/参数无效默认top)
      this.$refs.viewbox.scrollTo(100); 
      //获取当前滚动距离
      console.log(this.$refs.viewbox.getScrollTop()); 
      //获取滚动div, 也可以直接用组件引用的.$refs.viewBoxBody
      console.log(this.$refs.viewbox.getScrollBody()); 
    }
  }
}
</script>

<style>
#box{
  overflow: scroll;
}
</style>

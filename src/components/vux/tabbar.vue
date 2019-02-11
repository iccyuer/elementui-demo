<template>
  <div>
    <div>
      <button @click="change">change</button>
      <icon :type="type" is-msg></icon>
      <icon type="success-circle" @icon-success-color></icon>
      <icon type="waiting-circle"></icon>
      <icon type="safe-success"></icon>
      <x-icon type="ios-heart" size="30" style="fill:red"></x-icon>

      <br>
      <x-button type="primary">primary</x-button>
      <x-button type="primary" mini slot="footer">
        <h1>wahaha</h1>
      </x-button>
      <!-- 插槽primary，优于text -->
      <x-button type="warn" text="warn">primary</x-button>
      <!-- 渐变 -->
      <x-button type="warn" text="warn" show-loading :gradients="['pink','red']"></x-button>

      
      <!-- <card :text="chi">
        <div slot="footer">waka</div>
        dssad
      </card> -->
      <divider>分隔线</divider>
      <!-- orient排布方向，可选['horizontal', 'vertical'],vertical中span无效-->
      <flexbox>
        <!-- span:占用宽度，总份数12，可以是小数(占比)，存在默认间隙，写满12份会溢出一些 -->
        <!-- order:flex的order属性，排序，由小到大 -->
        <flexbox-item :span='2' :order="1"><div class="flex-demo">1</div></flexbox-item>
        <flexbox-item :span='0.3' :order="2"><div class="flex-demo">2</div></flexbox-item>
        <flexbox-item :span='3/6' :order="3"><div class="flex-demo">3</div></flexbox-item>
        <!-- <flexbox-item :span='3'><div class="flex-demo">3</div></flexbox-item> -->
      </flexbox>

      <!-- col：行，2.6之前使用rows，cols:列，当行和列冲突，以列为准 -->
      <grid :col="2" :cols="3">
        <!-- icon使用线上地址，使用本地资源需使用slot=icon保证资源被正确打包 -->
        <grid-item label="Grid" v-for="i in 9" icon="https://tb1.bdstatic.com/tb/%E5%8C%97%E4%BA%AC1.jpg" :key="i">
          <img slot="icon" src="../../assets/close-ico.png">
          <div slot=label>grid!</div>
        </grid-item>
      </grid>


    </div>

    <!-- // <tabbar @on-index-change='indexChange'>
    //   <tabbar-item :class="index===0?'selected':'normal'">
    //     <span slot="label">Wechat</span>
    //   </tabbar-item>
    //   <tabbar-item show-dot :class="index===1?'selected':'normal'">
    //     <span slot="label">Message</span>
    //   </tabbar-item>
    //   <tabbar-item :class="index===2?'selected':'normal'">
    //     <span slot="label">Explore</span>
    //   </tabbar-item>
    //   <tabbar-item badge="2" :class="index===3?'selected':'normal'">
    //     <span slot="label">News</span>
    //   </tabbar-item>
    // </tabbar> -->
  </div>
</template>

<script>
import axios from 'axios';
import { Tabbar, TabbarItem ,Icon,XButton,Divider,Flexbox, FlexboxItem,Grid, GridItem} from 'vux'
import Card from './card.vue'
export default {
  props:{
    label:{
      type:String
    }
  },
  components: {
    Tabbar,
    TabbarItem,
    Icon,XButton,Divider,Flexbox, FlexboxItem,Grid, GridItem,
    Card
  },
  data(){
    return{
      index:0,
      type:'success',
      gr:['red','pink'],
      chi:'loading',
      isWebsocket:false
    }
  },
  methods:{
    go(val){
      console.log('./');
      console.log(val);
    },
    change(){
      this.type='success'
    },
    indexChange(index){
      this.index=index;
      console.log(this.index);
    },
    fetchDataByAxios(){
      axios.post('xxx').then(res=>{
        if(res.code===200){
           this.chromeData=res.data;
           //这里调用websocket
           this.fetchDataBySocket();
        }
      })
    },
    fetchDataBySocket(){
      //websocket请求...
      this.chromeData=res.data;
    }
  },
  created(){
    this.index=0;
  }
}
</script>

<style >
/* @hehe:purple;
@icon-success-color:blue;
  .selected span{
    color: @icon-success-color;
  }
  .normal span{
    color: @hehe;
  } */
  .flex-demo{
    text-align: center;
    color: #fff;
    background-color: #20b907;
    border-radius: 4px;
    background-clip: padding-box;
  }
</style>

<template>
  <div id="container">
    <div style="width:100%;height:100px;background:purple"></div>
    <br> <br>
    <div style="width:100%;height:40px;background:pink"></div>
    <br>
    <router-link to="/me/test2">test2</router-link>
    <float-tab
      scroll-box="container"
      :offset="0">
      <tab :line-width="2" active-color="#1288f8">
        <tab-item selected @on-item-click="">项目描述</tab-item>
        <tab-item @on-item-click="">投资记录</tab-item>
        <tab-item @on-item-click="">相关资料</tab-item>
      </tab>
    </float-tab>
    <div>
      <li v-for="i in 100">{{i}}</li>
    </div>
  </div>
</template>

<script>
import floatTab from './floatTab';
import { Tab, TabItem } from 'vux'
export default {
  components:{floatTab, Tab, TabItem},
  data(){
    return{

    }
  }
    
}
</script>

<style lang="scss">
  #container{
    height: 100%;
    overflow: auto;
  }
</style>

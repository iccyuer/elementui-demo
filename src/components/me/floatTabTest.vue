<template>
  <div :class="prefixCls" ref="prefixCls">
    <div style="width:100%;height:100px;background:purple"></div>
    <br> <br>
    <div style="width:100%;height:40px;background:pink"></div>
    <br>
    <div class="float-contain">
      <div :class="floatFixed?'float-normal float-fixed':'float-normal'">
        <div>我是悬浮</div>
      </div>
    </div>
    <div>
      <li v-for="i in 100">{{i}}</li>
    </div>
  </div>
</template>

<script>
const prefixCls = 'float-tab';
export default {
  name:prefixCls,
  data(){
    return{
      prefixCls,
      floatFixed: false
    }
  },
  methods:{
    handleScroll () { 
      let el = this.$refs['prefixCls'];
      let scrollTop = el.scrollTop
      let offsetTop = document.querySelector('.float-contain').offsetTop
      console.log('scrollTop',scrollTop)
      console.log('offsetTop',offsetTop)
        if (scrollTop > offsetTop) {
        this.floatFixed = true
      } else {
        this.floatFixed = false
      }
    }
  },
  mounted(){
    console.log(this.$refs['prefixCls']);
    this.$refs['prefixCls'].addEventListener('scroll', this.handleScroll)
    // window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss">
.float-tab {
  height: 100%;
  overflow: auto;
  .float-contain {
    height: 50px;
    position: relative;
    .float-normal {
      position: absolute;
      height: 100%;
      width: 100%;
      background-color: aqua;
    }
    .float-fixed {
      position: fixed;
      top: 0;
      z-index: 999;
      height: 50px;
    }
  }
}
</style>

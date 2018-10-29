<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
      <transition name="slide-right" mode="out-in">
        <router-view/>
      </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    bindEvents(){
      this.vbus.$on('userNotLogin', () => {
        console.log('receive');
      })
    }
  },
  created(){
    this.bindEvents();
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/1px.less';
html,body,#app{
  /* position: fixed; */
  height: 100%;
  width: 100%;
}

</style>

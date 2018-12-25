<template>
  <div class="back-top">
    <li v-for="i in 200" v-html="i"></li>
    <back-top></back-top>
  </div>
</template>

<script>
import backTop from './back-top'
export default {
  components: {
    backTop
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss">
  .back-top{
    width: 100%;
    background-color: aqua;
    .ico-top{
      position: fixed;
      width: 71px;
      height: 71px;
      bottom: 30px;
      right: 30px;
      img{
        width: 100%;
        height: 100;
      }
    }
  }
</style>

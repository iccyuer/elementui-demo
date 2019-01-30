<template>
  <vue-seamless-scroll :data="newsList" :class-option="optionLeft" class="seamless-warp2">
    <ul class="item">
      <li v-for="item in newsList" v-text="item.title"></li>
    </ul>
  </vue-seamless-scroll>
</template>

<script>
const name = '无限滚动';
export default {
  data () {
    return {
      newsList: [
        {
          'title': 'abcdefghijklmnopqrstuvwxyz'
        }, 
        {
          'title': '1234567890987654321'
        }]
      }
    },
  computed: {
    optionLeft () {
      return {
        direction: 2,
        limitMoveNum: 2
      }
    }
  }
}
</script>

<style lang="scss">
.seamless-warp2 {
  overflow: hidden;
  height: 25px;
  width: 380px;
  ul.item {
    width: 580px;
    li {
        float: left;
        margin-right: 10px;
    }
  }
}
</style>

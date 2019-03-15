<template>
  <div>
    <title-template :level="2">啦啦啦😋</title-template>
    <title-render :level="3">啦啦啦😋</title-render>
    <font >click me</font>
  </div>
</template>

<script>
import titleTemplate from './components/title-template.vue'
import titleRender from './components/title-render.vue'
import font from './components/font.vue'
export default {
  components: {
    titleTemplate,
    titleRender,
    font
  },
  created() {
    // console.log('ass了😋'.toString())
  }
}
</script>

<style>

</style>

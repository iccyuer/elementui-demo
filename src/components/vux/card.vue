<template>
  <div class="card">
    <div class="header"></div>
    <div class="footer" v-html="text">
      <slot name="footer"></slot>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'card',
  props:{
    text:{
      type:String
    }
  }
}
</script>

<style lang="scss">
  .card{
    position: fixed;
    width: 100%;
    height: 100%;
    .header{
      position: absolute;
      top:0;
      left: 0;
    }
    .footer{
      position: absolute;
      top: 200px;
      left: 0;
    }
  }
</style>

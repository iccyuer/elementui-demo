<template>
  <div class="points">
    <div class="point-one"></div>
    <div class="point-two"></div>
    <div class="point-three"></div>
    <div class="point-four"></div>
    <div class="point-five"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log('points-mounted')
  },
  destroyed() {
    console.log('points-destroyed')
  }
}
</script>

<style lang="scss">
  .points{
    .point-one{
      position: absolute;
      width: 14.1px;
      height: 14.1px;
      background-color: #2e2e50;
      border-radius: 50%;
      left: -2px;
      top: 30px; 
    }
  }
</style>

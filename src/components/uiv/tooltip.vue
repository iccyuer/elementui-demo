<template>
  <div class="tool-tip">
    <!-- <btn type="primary" id="btn">Hover me!</btn>
    <tooltip text="Static tooltip content goes here" target="#btn" placement="bottom"/> -->
    <btn v-tooltip.click="'Static tooltip content'" type="primary">Click</btn>
  </div>
</template>

<script>
// import { Button, Tooltip } from 'uiv' 
export default {
  // components: {
  //   Button,
  //   Tooltip
  // },
  // directives: {
  //   Tooltip
  // },
}
</script>

<style lang="scss">
  .tool-tip{
    text-align: center;
    margin: 100px auto;
  }
  .tooltip{
    .tooltip-arrow{
    border-top-color: aqua !important;
    }
    .tooltip-inner{
      background-color: aqua;
    }
  }
  
</style>

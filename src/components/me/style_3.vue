<template>
  <div class="s-3">
    <div class="content">
      <div class="top"></div>
      <div class="bottom"></div>
      <div class="border-wrap"></div>
    </div>
    <div class="content">
      <div class="top"></div>
      <div class="bottom"></div>
      <div class="border-wrap"></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang ="scss">
  .s-3{
    .content{
      width: 300px;
      height: 400px;
      margin: 100px auto;
      border-radius: 10px;
      overflow: hidden;
      position: relative;
      .top{
        width: 100%;
        height: 150px;
        background-color: red;
      }
      .bottom{
        width: 100%;
        height: 250px;
        background-color: aqua;
      }
      .border-wrap{
        width: 97%;
        height: 97%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 10px;
        border: 1px dotted blue;
        /* padding: 20px; */
        box-sizing: border-box;
      }
    }
  }
  
</style>

<template>
  <div class="animation2">
    <div class="box" :class="{'start-animation': startAnimation}"></div>
    <div class="start-animation"></div>
    <button @click="go">go</button>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  data() {
    return {
      startAnimation: false
    }
  },
  methods: {
    go() {
      this.startAnimation = true
      setTimeout(() => {
        this.startAnimation = false
      }, 1000)
    }
  }
}
</script>

<style lang="scss">
  .animation2{
    padding-top: 800px;
    text-align: center;
    .box{
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: inline-block;
      background-color: red;
      // animation: throw 1s linear forwards;
      // animation: run-right-right 3s 0.4s 1 linear;
      // animation: run-right-right 1s 0.4s 1 cubic-bezier(.26,.3,1,.81), run-right-top 1s 0.4s 1 cubic-bezier(.66,.1,1,.41);
      // animation: run-right-right 3s 0.4s 1 linear, run-right-top 3s 0.4s 1 ease-out;
      animation-fill-mode: forwards;
      position: relative;
    }
    .start-animation{
      animation: throw-horizontal 1s 0s 1 linear, throw-vertical 1s 0s 1 cubic-bezier(0.03, 0.43, 0.39, 2.93);
      // animation: run-right-right 1s 0.4s 1 cubic-bezier(.26,.3,1,.81), run-right-top 1s 0.4s 1 cubic-bezier(.66,.1,1,.41);
    }
  }
  @function getPx() {

  }
  @keyframes throw-horizontal{
    0%{
      left: 0;
    }
    50%{
      // left: 50px;
    }
    100%{
      // left: #{round(random() * 200)}px;
      left: 100px;
    }
  }
  @keyframes throw-vertical{
    0%{
      top: 0;
    }
    50%{
      // top: -50px;
    }
    100%{
      top: -100px;
    }
  }
  //向上走的动画初始及结尾值
  @keyframes run-right-top {
    0% {
      bottom: 40px;
    }

    100% {
      bottom: 800px;
    }
  }
  //向上右的动画初始及结尾值
  @keyframes run-right-right {
    0% {
      left: 40px;
      // transform: scale(0.7);
    }

    100% {
      left: 600px;
      // transform: scale(0.45);
    }
  }
</style>

<template>
  <div :class="prefixCls">
    <transition
      enter-active-class="animated flipInX"
      leave-active-class="animated bounceOut"
    >
      <div class="mask"></div>
      <div :class="`${prefixCls}-container`">
        <img src="../../../assets/logo.png" alt="">
      </div>
    </transition>
  </div>
</template>

<script>
const prefixCls = "op-dialog";
export default {
  data() {
    return {
      prefixCls
    };
  }
};
</script>

<style lang="scss">
  .op-dialog{
    .mask{
      width: 100%;
      height: 100%;
      position: fixed;
      background-color: rgba(0, 0, 0, 0.6);
      z-index: 1000;
    }
    &-container{
      width: 100%;
      height: 100%;
      color: red;
    }
  }
</style>

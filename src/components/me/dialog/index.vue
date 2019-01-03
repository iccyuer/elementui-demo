<template>
  <div :class="prefixCls">
    <div class="mask" key="0" v-if="value"></div>
    <transition-group
      name="fade"
    >
      <div :class="`${prefixCls}-container`" key="1" v-if="value">
        <slot></slot>
      </div>
    </transition-group>
  </div>
</template>

<script>
const prefixCls = "op-dialog";
export default {
  data() {
    return {
      prefixCls,
    };
  },
  props:{
    value:{
      type: Boolean,
      default: false
    }
  },
  computed: {
    showMe(){
      return this.value;
    }
  },
  mounted() {
    console.log(this);
  }
};
</script>

<style lang="scss">
.op-dialog {
  background-color: #f86635;
  width: 100%;
  height: 100%;
  .mask {
    // width: 100%;
    // height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1000;
  }
  &-container {
    // width: 100%;
    // height: 100%;
    position: fixed;
    color: red;
    z-index: 5000;
    text-align: center;
    top: 0;
    .body{
      width: 200px;
      height: 200px;
      position: absolute;
      top:200px;
      left: 50%;
      transform: translate(-50%);
      background-color: white;
    }
  }
  .fade-enter-active {
    transition: all 0.5s ease;
  }
  .fade-leave-active {
    transition: all 0.1s ease;
  }
  .fade-enter /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: scale(1.2);
    transform-origin: center;
  }
  .fade-leave-to {
    opacity: 0;
    transform: scale(0.9);
    transform-origin: center;
  }
}
</style>

<template>
  <div class="slide">
    <transition :name="transitionName1">
      <div class="block-1" v-show="activeItem === 1">
        <button @click="toPage(2)">click me</button>
        <h1>1</h1>
      </div>
    </transition>
    <transition :name="transitionName2">
      <div class="block-2" v-show="activeItem !== 1">
        <button @click="toPage(1)">click me</button>
        <h1>2</h1>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeItem: 1,
      transitionName1: 'op',
      transitionName2: 'slide-left'
    }
  },
  methods: {
    toPage(index) {
      if (index === 1) {
        this.transitionName2 = 'slide-right'
      } else if (index === 2) {
        this.transitionName2 = 'slide-left'
      }
      this.activeItem = index
    }
  }
}
</script>

<style lang="scss">
  .slide{
    height: 50%;
    position: relative;
    button{
      width: 100px;
      height: 50px;
      background-color: red;
    }
  }
  .block-1{
    transition: all .8s cubic-bezier(0, 1, 0, 1);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
  }
  .block-2{
    transition: all .8s ease;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
  }
  .block-1{
    background-color: aqua;
  }
  .block-2{
    background-color: palevioletred;
  }
  .slide-left-enter,
  .slide-right-leave-to {
    opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
  }

  // .slide-left-leave-to,
  // .slide-right-enter {
  //   opacity: 0;
  //   -webkit-transform: translate(-100%, 0);
  //   transform: translate(-100% 0);
  // }
  .op-enter-to,
  .op-leave{
    // opacity: 0;
  }

</style>

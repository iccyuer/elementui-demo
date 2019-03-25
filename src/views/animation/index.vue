<template>
  <div class="animation">
    <button @click="animated">animated</button>
    <div class="box" @update:list="val => listData = val"></div>
    <!-- <div>--{{total}}--</div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0
    }
  },
  computed: {
    total: {
      get() {
        return this.index + "!!"
      },
      set(val) {
        this.index = val;
      }
    },
    op() {
      return this.index + "@@"
    }
  },
  methods: {
    animated() {
      this.index ++
      // this.total = "1"
      // console.log(this.total)
      // let set  = new Set();
      // console.log(set, Set);
      console.log(this.index);
      console.log(this.$options.data().index)
      console.log(this.$options)
      console.log(this.$options.computed.op())
    }
  }
}
</script>

<style lang="scss">
  .animation{
    padding-top: 100px;
    text-align: center;
    .box{
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: red;
      display: inline-block;
    }
    .box:hover{
      transition: cubic-bezier(0.175, 0.885, 0.32, 1000);
      position: relative;
      top: 10px;
      left: 10px;
    }
  }
</style>

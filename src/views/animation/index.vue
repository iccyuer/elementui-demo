<template>
  <div class="animation">
    <button @click="animated">animated</button>
    <div class="box" @update:list="val => listData = val"></div>
    <!-- <div>--{{total}}--</div> -->
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item :command="item.id" v-for="(item, index) in list" :key="index">{{item.title}}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      list: [
        { id: 1, title: '(*@ο@*) 哇～' },
        { id: 3, title: '\(^o^)/~' },
        { id: 99, title: 'O__O "…' },
      ]
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
    },
    handleCommand(id) {
      console.log(id)
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
      position: relative;
      left: 0;
      background-color: red;
      display: inline-block;
      transition: 2s all cubic-bezier(1,-0.39,.36,1.44);
    }
    .box:hover{
      // top: 10px;
      left: 100px;
      transform: rotate(2880deg);
    }

    // .box{
    //   width: 35px;
    //   height: 35px;
    //   line-height: 35px;
    //   position: relative;
    //   -webkit-border-radius: 100%;
    //   -moz-border-radius: 100%;
    //   border-radius: 100%;
    //   background: #f07709;
    //   color: #fff;
    //   text-align: center;
    //   font-family: Georgia;
    //   z-index: 1;
    //   left: 0;
    //   transition: 1.5s all cubic-bezier(1,-0.39,.36,1.44) 0.2s;
    // }
    // .box:hover{
    //   left: 365px;
    //   -webkit-transform: rotate(2880deg);
    //   -moz-transform: rotate(2880deg);
    //   -o-transform: rotate(2880deg);
    //   -ms-transform: rotate(2880deg);
    //   transform: rotate(2880deg);
    // }
  }
</style>

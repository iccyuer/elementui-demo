<template>
  <div class="flex-box">
    <div class="box-1">
      <li v-for="i in 5" v-html="i" :key="i" class="box-1-item"></li>
    </div>

    <div class="box-2"></div>
    <slide-verify
      :l="42"
      :r="10"
      :w="310"
      :h="155"
      slider-text="向右滑动"
      @success="onSuccess"
      @fail="onFail"
      @refresh="onRefresh"
    ></slide-verify>
    <div>{{msg}}</div>
  </div>
</template>

<script>
import SlideVerify from "vue-monoplasty-slide-verify";
import Vue from 'vue'
Vue.use(SlideVerify);
export default {
  data() {
    return {
      msg: ""
    };
  },
  methods: {
    onSuccess() {
      this.msg = "login success";
    },
    onFail() {
      this.msg = "";
    },
    onRefresh() {
      this.msg = "";
    }
  }
};
</script>

<style lang="scss">
.flex-box {
  .box-1 {
    display: -webkit-flex; /* Safari */
    display: flex;

    flex-direction: row;

    .box-1-item {
    }
  }
}
</style>

<template>
  <div>
    <div class="top1"></div>
    <div class="top2"></div>
    <input type="text" name id @blur="onBlur">
    <br>
    <input type="text" name id>
    <div class="bottom3"></div>
    <div class="bottom4"></div>
  </div>
</template>

<script>
// import { aaaa } from './plugins';
export default {
  data() {
    return {};
  },
  created() {
    aaaa();
  },
  methods: {
    onFocus() {
      setTimeout(() => {
        alert(window.screenTop);
      },1000)
    },
    onBlur() {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
    }
  }
};
</script>

<style lang="scss">
.top1,
.top2,
.bottom3,
.bottom4 {
  width: 100%;
  height: 300px;
}
.top1 {
  background-color: #423764;
}
.top2 {
  background-color: #c73232;
}
.bottom3 {
  background-color: #28cc5f;
}
.bottom4 {
  background-color: #0fa9f0;
}
</style>

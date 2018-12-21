<template>
  <van-popup v-model="show">
    <div class="title">
      <img src="../../assets/img/bitmap.png" alt="">
    </div>
  </van-popup>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    handleOpen() {
      this.show = true;
    }
  }
}
</script>

<style lang="scss">
  .title{
    background-color: transparent;
    img{
      width: 251px;
      height: 357px;
      background-color: transparent;
    }
  }
</style>

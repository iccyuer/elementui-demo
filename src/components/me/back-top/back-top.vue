<template>
  <div class="act-back-top" v-show="backTop" @click="backToTop">
    <img src="../../../assets/img/ico-top.png" alt="">
  </div>
</template>
<script>
export default {
  name: 'back-top',
  props: {
    mainId: {
      type: String
    }
  },
  data() {
    return {
      backTop: false,
      scrollBody: null,
      clientHeight: document.documentElement.clientHeight || document.body.clientHeight
    }
  },
  mounted() {
    if(this.mainId) {
      this.scrollBody = document.getElementById(this.mainId);
      this.scrollBody.addEventListener('scroll', this.handleScrollBox);
    } else {
      window.addEventListener('scroll', this.handleScrollBody)
    }
  },
  destroyed() {
    if(this.mainId) {
      this.scrollBody.removeEventListener('scroll', this.handleScroll);
    } else {
      window.removeEventListener('scroll', this.handleScroll)
    }
  },
  methods: {
    // 返回顶部
    backToTop() {
      if (this.mainId) {
        this.scrollBody.scrollTop = 0;
      } else {
        document.documentElement.scrollTop = document.body.scrollTop = 0;
        window.scrollTo(0, 0);
      }
    },
    // 监听滚动执行的方法
    handleScrollBody() {
      let scrollHeight = document.documentElement.scrollTop || document.body.scrollTop
      if (scrollHeight > this.clientHeight) {
        this.backTop = true
      } else {
        this.backTop = false
      }
    },
    handleScrollBox() {
      let scrollHeight = this.scrollBody.scrollTop
      if (scrollHeight > this.clientHeight) {
        this.backTop = true
      } else {
        this.backTop = false
      }
    }
  }
}
</script>
<style lang="scss">
  .act-back-top {
    width: 71px;
    height: 71px;
    position: fixed;
    bottom: 50px;
    right: 33px;
    box-sizing: border-box;
    z-index: 99;
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>

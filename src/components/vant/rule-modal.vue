<template>
  <van-popup v-model="show">
    <div class="modal-wrap">
      <div class="modal-contents">
        <div class="modal-contents-close" @click="show = false"></div>
        <div class="modal-contents-pic" v-if="true">
          <img src="" alt="">
        </div>
        <h2>23</h2>
        <p>3432</p>
        <points v-if="show"></points>
      </div>
    </div>
  </van-popup>
</template>

<script>
import points from './points'
export default {
  data() {
    return {
      show: false
    }
  },
  components: {
    points
  },
  methods: {
    handleOpen() {
      this.show = true;
    }
  }
}
</script>

<style lang="scss">
  .van-popup{
    background-color: transparent;
  }
  .modal-wrap{
    overflow: hidden;
    margin: auto;
    width: 100%;
    min-height: 356px;
    background: url('../../assets/img/bitmap.png') no-repeat 20px top/251px 356px;
    .modal-contents{
      width: 589px;
      min-height: 248px;
      background-color: #ffb500;
      position: relative;
      margin: 194px auto 0;
      .modal-contents-close{
        width: 21.4px;
        height: 21.4px;
        background: url('../../assets/img/close.png') no-repeat center/100% 100%;
        position: absolute;
        right: 10px;
        top: 15px;
      }
    }
  }
</style>

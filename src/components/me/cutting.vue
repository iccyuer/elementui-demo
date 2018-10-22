<template>
  <div class="cutting">
    <!-- <div class="pre">
      <img src="../../assets/logo.png" alt="">
    </div>

    <br>-->
    
      <vue-cropper 
      ref="cropper" 
      :img="option.img" 
      :output-size="option.size" 
      :output-type="option.outputType" 
      :info="true" :full="option.full"
      :can-move="option.canMove" 
      :can-move-box="option.canMoveBox" 
      :fixed-box="option.fixedBox" 
      :original="option.original"
      :auto-crop="option.autoCrop" 
      :auto-crop-width="option.autoCropWidth" 
      :auto-crop-height="option.autoCropHeight" 
      :center-box="option.centerBox"
      :high="option.high">
      </vue-cropper>
      <br>
      <button @click="start">start</button>
      <button @click="stop">stop</button>
      <button @click="clear">clear</button>
      <button @click="get">get</button>
      <br>
      <div class="result">
        <img :src="resultImg" alt="">
      </div>
  </div>
</template>

<script>
import { VueCropper } from "vue-cropper";
export default {
  components: {
    VueCropper
  },
  data() {
    return {
      img: "http://ofyaji162.bkt.clouddn.com/bg1.jpg",
      option: {
        img: require("../../assets/logo.png"),
        size: 1,
        full: false,
        outputType: "png",
        canMove: true,
        fixedBox: false,
        original: false,
        canMoveBox: true,
        autoCrop: false,
        // 只有自动截图开启 宽度高度才生效
        autoCropWidth: 200,
        autoCropHeight: 150,
        centerBox: false,
        high: true,
        cropData: {}
      },
      resultImg:''
    };
  },
  methods: {
    start() {
      this.$refs.cropper.startCrop();
    },
    stop() {
      this.$refs.cropper.stopCrop();
    },
    clear() {
      this.$refs.cropper.clearCrop();
    },
    get() {
      this.$refs.cropper.getCropData((data) => {
        this.resultImg=data;
      })
    }
  }
};
</script>

<style lang="scss">
.cutting {
  text-align: center;
  height: 200px;
  .pre {
    width: 200px;
    height: 200px;
  }
}
</style>

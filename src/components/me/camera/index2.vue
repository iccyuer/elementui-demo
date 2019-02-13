<template>
  <div class="box">
    <video src></video>
    <button class="shot" @click="takeShot">拍照</button>
    <canvas id="canvas"></canvas>
    <img :src="img_src">
  </div>
</template>

<script>
import qrdecode from 'qrcode-pure/lib/qrdecode'
export default {
  data() {
    return {
      videoDom: null,
      img_src: ''
    }
  },
  created() {
    this.openCamera();
  },
  methods: {
    openCamera() {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // 固定大小
        let constraints = { audio: false, video: { width: 200, height: 250 } };
        // 前置摄像头
        let constraints1 = { audio: false, video: { facingMode: "user" } };
        // 后置摄像头
        let constraints2 = { audio: false, video: { width: { ideal: 0 }, height: { ideal: 0 }, facingMode: { exact: "environment" } } };
        // 调取摄像头
        navigator.mediaDevices.getUserMedia(
          constraints2
        )
        .then((mediaStream) => {
          this.videoDom = document.querySelector('video');
          this.videoDom.srcObject = mediaStream;
          this.videoDom.onloadedmetadata = (e) => {
            this.videoDom.play();
          };
        }).catch(function(err) {
          console.log(err.name + ": " + err.message);
        });
      } else {
        alert('不支持摄像头调用');
      }
    },
    takeShot() {
      var canvas = document.getElementById('canvas');
      canvas.getContext('2d').drawImage(this.videoDom, 0, 0, 200, 200);
      this.img_src = canvas.toDataURL("image/png");

      let result = qrdecode(canvas);
      // result返回值为解码后的值
      console.log('result', result)
    }
  }
};
</script>

<style>
</style>

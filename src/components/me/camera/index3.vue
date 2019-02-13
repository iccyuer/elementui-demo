<template>
  <div>
    <button @click="openCamera = true">open</button>
    <p>{{qrResult}}</p>
    <qrcode-stream @decode="onDecode" @init="onInit" v-if="openCamera"></qrcode-stream>
  </div>
</template>

<script>
import { QrcodeStream } from 'vue-qrcode-reader'
export default {
  data() {
    return {
      qrResult: '',
      openCamera: false
    }
  },
  components: {
    QrcodeStream
  },
  methods: {
    onDecode (decodedString) {
      this.qrResult = decodedString;
      alert(decodedString);
    },
    async onInit (promise) {
    // show loading indicator

    try {
      await promise

      // successfully initialized
    } catch (error) {
      if (error.name === 'NotAllowedError') {
        // user denied camera access permisson
        alert('请允许使用相机');
      } else if (error.name === 'NotFoundError') {
        // no suitable camera device installed
        alert('未找到摄像机设备');
      } else if (error.name === 'NotSupportedError') {
        // page is not served over HTTPS (or localhost)
        alert('运行环境未处于https/localhost');
      } else if (error.name === 'NotReadableError') {
        // maybe camera is already in use
        alert('相机已在使用中');
      } else if (error.name === 'OverconstrainedError') {
        // passed constraints don't match any camera.
        // Did you requested the front camera although there is none?
        alert('未找到指定相机');
      } else if (error.name === 'StreamApiNotSupportedError') {
        // browser seems to be lacking features
        alert('当前浏览器不支持');
      }
      this.openCamera = false;
    } finally {
      // hide loading indicator
    }
  }
  }
}
</script>

<style>

</style>

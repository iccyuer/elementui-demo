<template>
  <div>
    <button @click="openCamera = true">open</button>
    <p>{{qrResult}}</p>
    <qrcode-stream :camera="constraints" @decode="onDecode" @init="onInit" v-if="openCamera"></qrcode-stream>
  </div>
</template>

<script>
import { QrcodeStream } from "vue-qrcode-reader";
export default {
  data() {
    return {
      qrResult: "",
      openCamera: false,
      // 约束
      constraints: {
        audio: false, // don't request microphone access
        // video: {
        facingMode: { exact: "environment" }, // use rear camera if available
        width: { min: 360, ideal: 680, max: 1920 }, // constrain video width resolution
        height: { min: 240, ideal: 480, max: 1080 } // constrain video height resolution
        // }
      }
    };
  },
  components: {
    QrcodeStream
  },
  methods: {
    // 解码
    onDecode(decodedString) {
      this.qrResult = decodedString;
      alert(decodedString);
      if (this.checkURL(decodedString)) {
        location.href = decodedString;
      }
    },
    // 初始化
    async onInit(promise) {
      // show loading indicator

      try {
        await promise;

        // successfully initialized
      } catch (error) {
        if (error.name === "NotAllowedError") {
          // user denied camera access permisson
          alert("请允许使用相机");
        } else if (error.name === "NotFoundError") {
          // no suitable camera device installed
          alert("未找到摄像机设备");
        } else if (error.name === "NotSupportedError") {
          // page is not served over HTTPS (or localhost)
          alert("运行环境未处于https/localhost");
        } else if (error.name === "NotReadableError") {
          // maybe camera is already in use
          alert("相机已在使用中");
        } else if (error.name === "OverconstrainedError") {
          // passed constraints don't match any camera.
          // Did you requested the front camera although there is none?
          alert("未找到指定相机");
        } else if (error.name === "StreamApiNotSupportedError") {
          // browser seems to be lacking features
          alert("当前浏览器不支持");
        }
        this.openCamera = false;
      } finally {
        // hide loading indicator
      }
    },
    checkURL(URL) {
      var str = URL;
      //判断URL地址的正则表达式为:http(s)?://([\w-]+\.)+[\w-]+(/[\w- ./?%&=]*)?
      //下面的代码中应用了转义字符"\"输出一个字符"/"
      var Expression = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
      var objExp = new RegExp(Expression);
      if (objExp.test(str) == true) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style>
</style>

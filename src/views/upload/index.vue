<template>
  <div>
    <el-upload
      action="http://localhost:3000/dashi/user/upload"
      list-type="picture-card"
      :multiple="false"
      :on-preview="handlePictureCardPreview"
      :before-upload="beforeAvatarUpload"
      :on-remove="handleRemove"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <img :src="imgSrc" alt>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt>
    </el-dialog>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      imgSrc: ""
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      // ----
      let imageUrl = URL.createObjectURL(file);
      console.log("imageUrl", imageUrl);
      console.log("file", file);
      let image = new Image();
      image.src = imageUrl;
      image.onload = () => {
        let imgWidth = image.width;
        let imgHeight = image.height;
        let canvas = document.createElement("canvas");
        canvas.width = imgWidth;
        canvas.height = imgHeight;
        let ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0, imgWidth, imgHeight); //(img,x,y,w,h)
        ctx.textBaseline = "hanging";
        ctx.font = "bold 10px 'Microsoft YaHei','宋体'";
        ctx.fillStyle = "orange";
        // ctx.fillText(new Date(), 5, 5);
        this.canvasTextAutoLine(new Date().toString(), canvas, 5, 5, 10)
        let canvasImage = canvas.toDataURL("image/jpeg", 0.9);
        console.log("canvasImage", canvasImage);
        let fileImage = this.dataURLtoFile(canvasImage, file.name);
        console.log("fileImage", fileImage);

        const formData = new FormData();
        formData.append('file', fileImage);
        axios.post('http://localhost:3000/dashi/user/upload',formData)
          .then(res => {
            console.log('res', res)
          })

        document.body.appendChild(canvas);
      };
      this.imgSrc = imageUrl;
      return false;
      // ----

      // let reader = new FileReader();
      // reader.readAsDataURL(file);
      // reader.onload = e => {
      //   // console.log('e', e.target.result)
      //   // var canvas = new Canvas()
      //   // canvas.width = '30px'
      //   // canvas.height = '30px'
      //   // var ctx = canvas.getContext("2d")
      //   // ctx.drawImage(e, 0, 0, 300, 200);//(img,x,y,w,h)
      //   // body.apendChild(canvas)
      // };

      // if (!isJPG) {
      //   this.$message.error("上传头像图片只能是 JPG 格式!");
      // }
      // if (!isLt2M) {
      //   this.$message.error("上传头像图片大小不能超过 2MB!");
      // }
      // return isJPG && isLt2M;
    },
    // base64-->File
    dataURLtoFile(dataurl, filename) {
      let arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, { type: mime });
    },
    /**
     * canvas文字折行
     * str:要绘制的字符串
     * canvas:canvas对象
     * initX:绘制字符串起始x坐标
     * initY:绘制字符串起始y坐标
     * lineHeight:字行高
     */
    canvasTextAutoLine(str, canvas, initX, initY, lineHeight) {
      var ctx = canvas.getContext("2d");
      ctx.textBaseline = "hanging";
      ctx.font = "bold 10px 'Microsoft YaHei','宋体'";
      ctx.fillStyle = "orange";
      var lineWidth = 0;
      var canvasWidth = canvas.width;
      var lastSubStrIndex = 0;
      for (let i = 0; i < str.length; i++) {
        lineWidth += ctx.measureText(str[i]).width;
        if (lineWidth > (canvasWidth / 8) * 5) {
          ctx.fillText(str.substring(lastSubStrIndex, i), initX, initY);
          initY += lineHeight;
          lineWidth = 0;
          lastSubStrIndex = i;
        }
        if (i == str.length - 1) {
          ctx.fillText(str.substring(lastSubStrIndex, i + 1), initX, initY);
        }
      }
    }
  }
};
</script>

<style>
</style>

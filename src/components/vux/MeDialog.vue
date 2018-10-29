<template>
  <div v-transfer-dom>
    <x-dialog
      v-model="showDialog"
      hide-on-blur
    >
      <div class="container">
        <div class="close-icon">
          <img src="../../assets/close-ico.png" alt="">
        </div>
        <div class="newwork-err">
          <div class="err-body">
            <img src="../../assets/logo.png" alt="">
            <div class="err-msg">
              <span>网络异常</span> <br>
              <span>请检查网络是否正常</span>
            </div>
            <div class="err-btn" @click="">
              <span>知道了</span>
            </div>
          </div>
        </div>
      </div>
    </x-dialog>
  </div>
</template>

<script>
import { XDialog,TransferDomDirective as TransferDom } from 'vux'
export default {
  components:{
    XDialog
  },
  directives:{
    TransferDom
  },
  data(){
    return{
      showDialog:false
    }
  },
  methods:{
    open(){
      this.showDialog = true;
    }
  }
}
</script>

<style lang="scss">
.weui-dialog {
  max-width: 500px;
  width: 500px;
  height: 470px;
  overflow: visible;
  text-align: left;
  color: #fff;
  box-sizing: border-box;
  padding: 25px 20px;
  top:-200px;
  border-radius: 20px;
  display: block;
}
  .container{
    background-color: transparent;
    .close-icon{
      position: absolute;
      top:-100px;
      right: 20px;
      img{
        width: 50px;
        height: 50px;
        object-fit: contain;
      }
    }
    .newwork-err {
      // width: 500px;
      // height: 372px;
      border-radius: 20px;
      background-color: #ffffff;
      // position: absolute;
      // top: 217px;
      // left: 50%;
      // transform: translateX(-50%);
      padding: 24px 18px 15px;
      text-align: center;
      .err-body {
        img {
          width: 175px;
          height: 151px;
          object-fit: contain;
        }
        .err-msg {
          margin-top: 16px;
          span:first-child {
            font-size: 34px;
            line-height: 1.29;
            color: #333333;
          }
          span:last-child {
            width: 361px;
            height: 88px;
            font-family: SourceHanSansCN;
            font-size: 26px;
            line-height: 1.69;
            text-align: center;
            color: #666666;
          }
        }
        .err-btn {
          width: 384px;
          height: 80px;
          border-radius: 39.5px;
          background-image: linear-gradient(to bottom, #feda60, #fcd145);
          box-shadow: 0 2px 10px 0 #e4cb7a;
          border: solid 1px #fff06c;
          margin-top: 35px;
          position: relative;
          span {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            height: 40px;
            font-family: SourceHanSansCN;
            font-size: 40px;
            text-align: center;
            color: #b67a0a;
          }
       }
      }
    }
  }
</style>

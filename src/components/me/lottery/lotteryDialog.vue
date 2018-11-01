<template>
  <div v-transfer-dom>
    <x-dialog
      v-model="dialogVisible">
        <div class="coupons-content">
          <div class="close-icon" @click="close">
            <img src="../../../assets/img/ico-close.png" alt="">
          </div>
          <div class="prize-title">
            <div class="title-bg">
              <img src="../../../assets/img/bg-alert.png" alt="">
            </div>
            <div class="title-msg">
              <span v-if="isOldUser">恭喜您获得</span>
              <span v-else>恭喜您帮好友抽得</span>
            </div>
          </div>
          <div class="prize-body" v-if="prizeInfo.type === 'coupon'">
            <div class="pic-coupon pict">
              <p>
                <span>{{prizeInfo.count*100}}%</span> <br>
                <span>加息券</span>
              </p>
            </div>
            <div class="time">
              <span>有效期:2018-10-31至2018-11-30</span>
            </div>
            <div class="details">
              <span>查看加息券详情</span>
            </div>
            <div class="btn-use" v-if="isOldUser">
              <span>马上使用</span>
            </div>
          </div>
          <div class="prize-body" v-else>
            <div class="pic-integral pict">
              <p>
                <span>{{prizeInfo.count}}</span> <br>
                <span>积分</span>
              </p>
            </div>
            <div class="btn-use" v-if="isOldUser" >
              <span>前往兑换礼品</span>
            </div>
          </div>
        </div>
    </x-dialog>
  </div>
</template>

<script>
import { XDialog, TransferDomDirective as TransferDom } from "vux";
export default {
  components: {
    XDialog
  },
  directives: {
    TransferDom
  },
  props: {
    isOldUser: {
      type: Boolean,
      required: true
    },
    prizeInfo:{
      type: Object,
      required: true
    }
  },
  data() {
    return {
      dialogVisible: false
    };
  },
  methods: {
    open() {
      this.dialogVisible = true;
    },
    close() {
      this.dialogVisible = false;
    }
  }
};
</script>

<style lang="scss">
$imgUrl: "../../../assets/img/";

.weui-dialog {
  max-width: 460px;
  width: 460px;
  height: 100px;
  overflow: visible;
  text-align: left;
  color: #fff;
  box-sizing: border-box;
  padding: 25px 20px;
  top:-200px;
  border-radius: 20px;
  display: block;
}

.coupons-content {
  width: 460px;
  height: auto;
  border-radius: 20px;
  background-color: #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-top: 35px;
  padding-bottom: 46px;
  .close-icon {
    position: absolute;
    top: -93px;
    right: 28px;
    img {
      width: 52px;
      height: 52px;
      object-fit: contain;
    }
  }
  .prize-title {
    .title-bg {
      text-align: center;
      img {
        width: 522px;
        height: 371px;
        object-fit: contain;
        position: absolute;
        top: 58px;
        left: 50%;
        transform: translate(-50%);
      }
    }
    .title-msg {
      text-align: center;
      span {
        width: 180px;
        height: 36px;
        font-family: SourceHanSansCN;
        font-size: 36px;
        text-align: center;
        color: #666666;
      }
    }
  }
  .prize-body {
    margin-top: 49px;
    text-align: center;
    position: relative;
    z-index: 8;
    .pic-coupon {
      background: url($imgUrl+'coupons-pic.png') no-repeat center
    }
    .pic-integral {
      background: url($imgUrl+'integral-pic.png') no-repeat center
    }
    .pict {
      width: 214px;
      height: 134px;
      background-size: 100%;
      display: inline-block;
      margin-bottom: 20px;
      position: relative;
      > p{
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        font-size: 30px;
      }
    }
    img {
      width: 214px;
      height: 134px;
      object-fit: contain;
      margin-bottom: 24px;
    }
    .time {
      margin-bottom: 23px;
      span {
        width: 307px;
        height: 24px;
        font-family: SourceHanSansCN;
        font-size: 24px;
        text-align: center;
        color: #333333;
      }
    }
    .details {
      margin-bottom: 31px;
      span {
        width: 168px;
        height: 24px;
        font-family: SourceHanSansCN;
        font-size: 24px;
        text-align: center;
        color: #f86635;
        text-decoration: underline;
      }
    }
    .btn-use {
      width: 384px;
      height: 80px;
      border-radius: 39.5px;
      background-image: linear-gradient(to bottom, #feda60, #fcd145);
      box-shadow: 0 2px 10px 0 #e4cb7a;
      border: solid 1px #fff06c;
      margin: auto;
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
</style>

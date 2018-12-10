<template>
  <div>
    <dialog-m v-model="show">
      <div class="rule">
        <div class="close-icon">
          <img src="../../../assets/close-ico.png" alt="">
        </div>
        <div class="rule-content">
          <div class="rule-title">
            <span>活动规则</span>
          </div>
          <div class="rule-body">
            <p>1.抽奖所得优惠券实时到账，优惠券使用规则以券面为准； <br>
              2.自己抽奖所获积分实时到账，您可在个人中心查看明细； <br>
              3.好友助力抽奖所得积分，将取积分价值前三于第二日10点之前发放至您的账户，您可在个人中心查看明细；<br>
              4.活动期间发现有恶意刷奖用户将取消参与活动资格； <br>
              5.海投汇在法律允许范围内保留对本活动的最终解释权。</p>
          </div>
        </div>
      </div>
    </dialog-m>
  </div>
</template>

<script>
import dialogM  from './index.vue'
export default {
  components:{
    dialogM
  },
  data() {
    return{
      show: false
    }
  }
}
</script>

<style lang="scss">
    .rule {
    position: absolute;
    top:200px;
    left: 50%;
    transform: translate(-50%);
    // width: 511px;
    // height: 440px;

    .close-icon {
      position: absolute;
      top: -60%;
      right: 4px;

      img {
        width: 52px;
        height: 52px;
        object-fit: contain;
      }
    }

    .rule-content {
      width: 511px;
      height: 440px;
      border-radius: 20px;
      background-color: rgba(255, 255, 255, 1);
      position: absolute;
      top: -40%;
      left: 50%;
      transform: translateX(-50%);
      /*margin: 112px auto;*/
      padding: 46px 41px 61px 42px;
      text-align: center;

      .rule-title {
        width: 100%;
        height: 36px;
        object-fit: contain;
        top: 46px;
        background-size: 385px 14px;

        span {
          width: 144px;
          height: 36px;
          font-family: SourceHanSansCN;
          font-size: 36px;
          text-align: center;
          color: #666666;
        }
      }

      .rule-body {
        width: 511px;
        height: 380px;
        margin-top: 24px;
        font-family: SourceHanSansCN;
        font-size: 24px;
        line-height: 1.58;
        text-align: left;
        color: #666666;
      }
    }
  }
</style>

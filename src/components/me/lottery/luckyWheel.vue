<template>
  <layout>
    <template slot="title">
      <lottery-title></lottery-title>
    </template>

    <!-- 转盘部分 -->
    <div class="wheel">
      <div class="rule-icon" @click="openRule">
        <img src="../../../assets/img/wechat/rule-icon.png" alt="">
      </div>
      <lottery
        ref="lottery"
        :lotteryType="0"
        :isOldUser="true"
        :prizeId="lotteryPrizeId"
        :gifOrPng="showGifOrPng"
        @lottery-message="lotteryMessage"
        @rotate-handle="rotateHandle"
        @lottery-result="lotteryResult">
      </lottery>
    </div>

    <!-- 主体部分 -->
    <div class="body">
      <div class="lottery-number">
        <span>今日剩余<span class="number">{{lotteryNumber}}</span>次抽奖机会</span>
      </div>
      <div class="share-bd">
        <button class="share-btn" @click="openShare"><span>分享好友帮我抽奖</span></button>
      </div>
      <!-- 抽奖记录 -->
      <lottery-record
        ref="lotteryRecord"
        :isOldUser="true">
      </lottery-record>
    </div>

    <lottery-dialog
      ref="lotteryDialog"
      :isOldUser="true"
      :prizeInfo="lotteryInfo"
      @close-dialog="closeDialog">
    </lottery-dialog>

  </layout>
</template>

<script>
  import layout from './components/layout'
  import lottery from './components/lottery.vue'
  import lotteryRecord from './components/lotteryRecord.vue'
  import lotteryDialog from './components/lotteryDialog.vue'
  import lotteryTitle from './components/lotteryTitle.vue'

  import wx from 'weixin-js-sdk';
  import {base64} from 'vux';
  import {mapGetters} from 'vuex';
  import {measure} from '@mixin/commonMeasure';
  import getBaseApi from '@utils/base-url';
  import {
    fetchGetUserFindLuckTimes,
    fetchUserTokenAndOpenid,
    fetchUserWxInfo,
    fetchWxShortLinks,
    fetchUserWinForSelf,
    fetchWxSignature,
    fetchGetUserCouponDetail,
    fetchSaveWechatInfo
  } from '@api/activity/lottery';

  export default {
    head: {
      title: '幸运大转盘'
    },
    mixins: [measure],
    components: {
      layout,
      lottery,
      lotteryRecord,
      lotteryDialog,
      lotteryTitle
    },
    data() {
      return {
        wxInfo: {
          appid: "wxc182804e3da140dd",
          secret: "",
          open_id: '',
          code: '',
          access_token: '',
          timestamp: '', // 必填，生成签名的时间戳
          nonceStr: '', // 必填，生成签名的随机串
          signature: '',// 必填，签名，见附录1
          nickName: '',
          imgUrl: '',
        },
        lotteryNumber: 0,
        activityOver: false,
        click_flag: true,
        lotteryPrizeId: '', // 中奖id
        couponId: 0, // 优惠券id
        lotteryInfo: {
          type: '',
          count: 0,
          get_time: '',
          end_time: ''
        }, // 中奖信息
      }
    },
    computed: {
      ...mapGetters([
        'user_id'
      ]),
      showGifOrPng() {
        if (this.click_flag) {
          if (this.user_id && this.lotteryNumber) {
            return true;
          } else if (this.user_id && !this.lotteryNumber) {
            return false;
          } else if (!this.user_id) {
            return true;
          }
        } else {
          return false;
        }
      }
    },
    methods: {
      getMode() {
        const hostname = window.location.hostname;
        if (hostname === 'new-uat.test.htouhui.com') {
          this.wxInfo.appid = 'wx7cd05065aef2b710';
        } else if (hostname === 'new-sit.test.htouhui.com') {
          this.wxInfo.appid = 'wxc182804e3da140dd';
        } else if (hostname === 'stage.htouhui.com') {
          this.wxInfo.appid = 'wx2c7718f965ebfaab';
        } else if (hostname === 'www.htouhui.com') {
          this.wxInfo.appid = 'wxb44852d5745b0b27';
        }
      },
      openRule() {
        this.$refs['lotteryDialog'].openRule();
      },
      openShare() {
        this.$refs['lotteryDialog'].openShare();
      },
      closeDialog(type) {
        if (type === 'prize') {
          this.$refs['lotteryRecord'].getPrizeRecord(this.user_id);
        }
      },
      lotteryMessage(msg) {
        if (msg === 'activity-over') {
          this.activityOver = true;
          this.$refs['lotteryDialog'].openActivityDeadline();
        }
      },
      // 获取用户信息(user_id)
      getUserInfo(isToLogin) {
        if (!this.user_id) {
          this.$store.dispatch('GetUserInfo').then(res => {
            if (res.status === 200) {
              this.getUserLotteryTime();
              this.$refs['lotteryRecord'].getPrizeRecord(this.user_id);
              // 再次进行签名验证
              this.initWxconfig();
            } else if (res.status === 99999 || res.status === 99998) {
              if (isToLogin) {
                // 跳转自己的登录
                this.$router.push({
                  path: '/activity_wechat/lucky_login',
                  query: {redirect: this.$route.fullPath}
                });
              }
            }
          })
        } else {
          this.getUserLotteryTime();
          this.$refs['lotteryRecord'].getPrizeRecord(this.user_id);
          // 再次进行签名验证
          this.initWxconfig();
        }
      },
      // 接口 -- 获取用户抽奖次数
      getUserLotteryTime() {
        let userId = '';  // 老用户user_id
        let powerUserId = ''; // 助力用户时的老用户user_id
        let powerId = ''; // 助力用户power_id
        if (!this.user_id) {
          this.toast({text: '用户信息获取失败，请刷新页面'});
          return;
        }
        userId = this.user_id;
        powerUserId = this.user_id;
        fetchGetUserFindLuckTimes({
          'user_id': userId,
          'power_user_id': powerUserId,
          'power_id': powerId,
          'activity_id': 1
        }).then(res => {
          if (res.status === 200) {
            const info = res.data;
            this.hideLoading();
            this.activityOver = false;
            this.lotteryNumber = info;
          } else if (res.status === 5044) {
            // 活动结束
            this.lotteryNumber = 0;
            this.hideLoading();
            this.activityOver = true;
            this.$refs['lotteryDialog'].openActivityDeadline();
          }
        }).catch(err => {
            this.hideLoading();
          }
        )
      },
      rotateHandle() {
//        if (this.$route.fullPath.indexOf('code') === -1) {
//          this.openAuthorAlert();
//          return;
//        }
        if (!this.$route.query.code) {
          this.openAuthorAlert();
          return;
        }
        if (!this.user_id) {
          this.getUserInfo(true);
          return;
        }
        if (this.activityOver) {
          this.$refs['lotteryDialog'].openActivityDeadline();// 当前活动已结束
          return;
        }
        if (this.lotteryNumber === 0) {
          this.toast({
            text: '今日抽奖机会已用尽，可邀请好友助力抽奖',
            width: '8.5em'
          });
          return;
        }
        if (!this.click_flag) return;
        this.getPrizeIdSelf();
      },
      // 接口 -- 本人抽奖(获取奖品id)
      getPrizeIdSelf() {
        if (!this.wxInfo.open_id) {
          this.toast({text: '微信授权失败，请刷新重新授权'});
          return;
        }
        if (!this.user_id) {
          this.toast({text: '用户信息获取失败，请刷新页面'});
          return;
        }
        fetchUserWinForSelf({'open_id': this.wxInfo.open_id, 'user_id': this.user_id, 'activity_id': 1}).then(res => {
          if (res.status === 200) {
            const info = res.data;
            this.click_flag = false; // 旋转结束前，不允许再次触发
            // 抽奖
//            this.lotteryPrizeId = info.prize_id;
            this.$refs['lottery'].rotating(info.prize_id);
            if (this.lotteryNumber !== 0) {
              this.lotteryNumber -= 1;
            }
            // 如果有持有优惠券id则
            if (info.user_coupon_id) {
              this.couponId = info.user_coupon_id;
              this.getPrizeDetails(info.user_coupon_id);
            }
          } else if (res.status === 5044) {
            // 活动已结束
            this.activityOver = true;
            this.$refs['lotteryDialog'].openActivityDeadline();
          } else if (res.status === 5042) {
            this.click_flag = true;
            this.$refs['lotteryDialog'].openNetworkErr();
          } else {
            this.click_flag = true;
//            this.$refs['lotteryDialog'].openNetworkErr();
          }
        }).catch(err => {
          // 异常，弹网络异常
          this.click_flag = true;
          this.$refs['lotteryDialog'].openNetworkErr();
        })
      },
      lotteryResult(lotteryInfo) {
        this.click_flag = true;
        this.lotteryInfo.type = lotteryInfo.type;
        this.lotteryInfo.count = lotteryInfo.count;
        this.$refs['lotteryDialog'].openPrize();
      },
      // 接口 -- 请求加息券详情
      getPrizeDetails(userCouponId) {
        fetchGetUserCouponDetail({'user_coupon_id': userCouponId})
          .then(res => {
            if (res.status === 200) {
              this.lotteryInfo.coupon_id = userCouponId;
              this.lotteryInfo.get_time = res.data.get_time;
              this.lotteryInfo.end_time = res.data.end_time;
            }
          })
      },
      // 跳转加息券详情
      toPrizeDetails(coupon_id) {
        if (!coupon_id) {
          coupon_id = this.couponId;
        }
        this.$router.push({
          path: '/activity_wechat/lucky_details',
          query: {user_coupon_id: coupon_id, is_old_user: this.isOldUser}
        });
      },
      // 接口 -- 生成短链接(解决#)
//       getShortLinks() {
//         fetchWxShortLinks({url: window.location.href}).then(res => {
//           const info = res.short_url;
//           // console.log('short_url', getBaseApi() + info);
// //          return;
//           this.toWxAuthor(getBaseApi() + info);
//         })
//       },
      // 去微信授权
    //   toWxAuthor(redirect_uri) {
    //     alert('授权前跳转');
    //     setTimeout(() => {
    //       window.location = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" +
    //         this.wxInfo.appid +
    //         "&redirect_uri=" +
    //         redirect_uri +
    //         "&response_type=code&scope=snsapi_userinfo&state=abcdefghigklmnopqrstuvwxyz#wechat_redirect";
    //     }, 100)
    //   },
      // 接口 -- 通过code换取网页授权access_token和openid
      getUserTokenAndOpenid() {
        fetchUserTokenAndOpenid({'code': this.wxInfo.code}).then(res => {
          if (res.status === 200) {
            const info = res.data;
            this.wxInfo.access_token = info.access_token;
            this.wxInfo.open_id = info.openid;
//            this.getWxSingnature();
           this.initWxconfig();
            // 获取微信信息(通过code获取的这两个接口必须存在一定时间差)
            this.getUserWxInfo();
          }
        })
      },
      // 接口 -- 通过code获取微信用户信息
      getUserWxInfo() {
        fetchUserWxInfo({'code': this.wxInfo.code}).then(res => {
          if (res.status === 200) {
            const info = res.data;
            this.wxInfo.nickName = info.nickname;
            this.wxInfo.imgUrl = info.head_img_url;
          }
        })
      },
      // 接口 -- 获取微信签名信息
      getWxSingnature() {
        let url = window.location.href.split('#')[0]; // 不能通过encode处理url
//        url = encodeURIComponent(url)
        fetchWxSignature({'url': url})
          .then(res => {
            if (res.status === 200) {
              const info = res.data;
              this.wxInfo.signature = info.signature;
              this.wxInfo.timestamp = info.timestamp;
              this.wxInfo.nonceStr = info.nonce_str;
              this.initWxconfig();
            }
          })
      },
      // 初始化微信配置、分享
      initWxconfig() {
        console.log('initWxconfig-->', this.user_id, 'op->', this.wxInfo.open_id);
        let redirect_uri = '';
        if (this.user_id && this.wxInfo.open_id) {
          // 分享助力页
          redirect_uri = `${location.origin}${location.pathname}activity_wechat/lucky_power?invite=${base64.encode(this.user_id)}&op=${base64.encode(this.wxInfo.open_id)}`;
        } else {
          // 分享抽奖页
          redirect_uri = `${location.origin}${location.pathname}activity_wechat/lucky_wheel`;
        }
        link = `http://${location.hostname}/api/activity/url/lottery_activity?redirect_uri=${redirect_uri}`
        console.log('link', link);
        let title = '幸运大转盘，快来帮我抽积分免费兑换iPhone~';
        let desc = '我在海投汇参与抽积分活动！积分可以兑换优酷会员，iPhone！快来帮我抽奖吧！';
        let imgUrl = 'https://static.htouhui.com/official-website-h5/production/1.0.0/static/img/lottery.png';
        wx.config({
          debug: false,
          appId: this.wxInfo.appid, // 必填，公众号的唯一标识
          timestamp: this.wxInfo.timestamp, // 必填，生成签名的时间戳
          nonceStr: this.wxInfo.nonceStr, // 必填，生成签名的随机串
          signature: this.wxInfo.signature,// 必填，签名，见附录1
          // 需要分享的列表项:发送给朋友，分享到朋友圈
          jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline']
        });
        // 处理验证失败的信息
        wx.error((res) => {
          console.log('验证失败返回的信息:', res);
        });
        // 处理验证成功的信息
        wx.ready(() => {
          // 分享到朋友圈
          wx.onMenuShareTimeline({
            title, // 分享标题
            desc,// 分享描述
            link, // 分享链接
            imgUrl, // 分享图标
            success(res) {
              console.log('分享朋友圈成功');
            },
            cancel(res) {
              console.log('分享朋友圈失败');
            }
          });
          // 分享给朋友
          wx.onMenuShareAppMessage({
            title, // 分享标题
            desc, // 分享描述
            link, // 分享链接
            imgUrl, // 分享图标
            success(res) {
              console.log('分享朋友成功');
            },
            cancel(res) {
              console.log('分享朋友失败');
            }
          });
        });
      },
      // 循环判断保存微信信息最终保存
      saveWechatData() {
        if (!(this.wxInfo.open_id && this.user_id && this.wxInfo.imgUrl && this.wxInfo.nickName)) {
          setTimeout(this.saveWechatData, 400)
        } else {
          // 接口 -- 存
          this.saveWechatInfo();
        }
      },
      // 接口 -- 保存微信信息
      saveWechatInfo() {
        let info = {
          open_id: this.wxInfo.open_id,
          user_id: this.user_id,
          img_url: this.wxInfo.imgUrl,
          nick_name: this.wxInfo.nickName
        };
        fetchSaveWechatInfo(info).then(res => {
          if (res.status === 200) {
            //保存微信信息成功
          }
        })
      },
      //引导授权弹窗
      openAuthorAlert() {
        this.confirm({
          content: '需要微信授权才可以进行抽奖',
          confirmText: '重试',
          cancelText: '返回',
          onConfirm: ({}) => {
            this.getShortLinks();
          },
          onCancel() {
            // 强制关闭网页(微信)
            wx.closeWindow();
          }
        });
      }
    },
    mounted() {
      this.getMode();
      this.getWxSingnature();
      const code = this.$route.query.code;
      if (code) {
        this.alertLoading({text: '页面加载中...'});
        if (Array.isArray(code)) {
          this.wxInfo.code = code[code.length - 1];
        } else {
          this.wxInfo.code = code;
        }
        this.getUserTokenAndOpenid();
        this.getUserInfo(false);
        this.saveWechatData();
      } else {
        // 授权重定向没有拿到code情况...
      }
    }
  }
</script>

<style lang="scss">
  .wheel {
    position: relative;
    height: auto;
    .rule-icon {
      position: absolute;
      right: 0;
      top: 0;
      z-index: 15;
      img {
        width: 99px;
        height: 101px;
        object-fit: contain;
      }
    }
  }

  .body {
    position: relative;
    width: 100%;
    height: auto;
    .lottery-number {
      width: 100%;
      height: 48px;
      font-size: 30px;
      color: #ffffff;
      font-weight: 100;
      .number {
        font-size: 48px;
        color: #ffff02;
      }
    }
    .share-bd {
      margin-top: 20px;
      margin-bottom: 26px;
      .share-btn {
        width: 560px;
        height: 97px;
        border-radius: 48.5px;
        background-image: linear-gradient(to bottom, #feda60, #fcd145);
        box-shadow: 0 9px 17px 0 rgba(205, 80, 18, 0.63);
        border: solid 1px #fff06c;
        span {
          width: 368px;
          height: 46px;
          font-size: 46px;
          font-weight: bold;
          color: #b67a0a;
        }
      }
    }
  }
</style>

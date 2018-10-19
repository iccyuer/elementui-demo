<template>
    <div>
        <h1>wecaht author</h1>
        <div class="userinfo">
          <img :src="imgUrl" alt="">
          <div>{{nickName}}</div>
        </div>
        <button @click="silent">静默授权</button> <br> <br>
        <button @click="author">点击跳转微信授权(获取code)</button> <br> <br>
        <button @click="getToken">通过code换取网页授权access_token和openid</button>  <br> <br>
        <button @click="getTokenNow">获取现有access_token</button>  <br> <br>
        <button @click="getUserInfo">通过access_token获取用户信息</button> <br> <br>
        <button @click="getUserInfoByCode">直接通过code获取用户信息</button>
    </div>
</template>

<script>
import axios from "axios";
import wx from 'weixin-js-sdk';
export default {
  data() {
    return {
      imgUrl:'',
      nickName:'',
      // appid: "wx7cd05065aef2b710",
      appid: "wxc182804e3da140dd",
      secret: "3324ecc0a54722b1a2d59a4a1699280f",
      code: "",
      state: "",
      access_token:'13_MVW31k2rwZllufbSHomAQonbkpMEk8KiN5ZAe6sn3uF3USHyUwF0wscjtzIwvS5zWtZoS8L-F76FAEFqlkeY-L7yK5-sQY1H8DutcAzir9tsk9jKj7Vgmk9Poy26be9Ozh0lrk_oHB9mPgxfPAViAJAUFA',
      openid:'',
      wxconfig:{},

      //获取access_token时的数据
      openid:'',
      expires_in:'',
      refresh_token:''
    };
  },
  methods: {
    silent() {
      let href = window.location.href;
      let redirect_uri = "http://192.168.0.197:8085/wechat";
      window.location.href =
        "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" +
        this.appid +
        "&redirect_uri=" +
        redirect_uri +
        "&response_type=code&scope=snsapi_base&state=abcdefghigklmnopqrstuvwxyz#wechat_redirect";
    },
    author() {
      let href = window.location.href;
      let redirect_uri = "http://192.168.0.197:8085/wechat";
      window.location.href =
        "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" +
        this.appid +
        "&redirect_uri=" +
        redirect_uri +
        "&response_type=code&scope=snsapi_userinfo&state=abcdefghigklmnopqrstuvwxyz#wechat_redirect";
    },
    getToken() {
      let that=this;
      if (!this.code) {
        alert("请先进行授权再次获取access_token");
        return;
      }
      axios
        .get("wx/sns/oauth2/access_token", {
          params: {
            appid: this.appid,
            secret: "d0270196b514f856fe636091f1730b43",
            code: this.code,
            grant_type: "authorization_code"
          }
        })
        .then((response)=> {
          console.log(response);
          console.log(response.data);
          this.access_token=response.data.access_token;
          this.openid=response.data.openid;
        })
        .catch(function(error) {
          console.log(error);
        });

      // this.$http
      //   .get(
      //     "https://api.weixin.qq.com/sns/oauth2/access_token",
      //     {
      //       appid: this.appid,
      //       secret: "d0270196b514f856fe636091f1730b43",
      //       code: this.code,
      //       grant_type: "authorization_code"
      //     }
      //   )
      //   .then(
      //     function(data) {
      //       console.log(data);
      //     },
      //     function(err) {
      //       console.log(err);
      //     }
      //   );

      //访问微信的会跨域！！！！！
      // this.$http
      //   .get(
      //     "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET",
      //     {
      //       appid: this.appid,
      //       secret: "d0270196b514f856fe636091f1730b43",
      //       code: this.code,
      //       grant_type: "authorization_code"
      //     }
      //   )
      //   .then(
      //     function(data) {
      //       console.log(data);
      //     },
      //     function(err) {
      //       console.log(err);
      //     }
      //   );
      //访问自己的服务器获取token和openid
        // this.$http
        // .get(
        //   "http://101.201.113.187:53429/api/wechat/activity/get_web_access_token",
        //   {
        //     params:{
        //     code:this.code
        //     }
            
        //   }
        // )
        // .then(
        //   function(data) {
        //     console.log(data);
        //     let dataJson=JSON.parse(data.bodyText);
        //     console.log(dataJson);
        //     this.access_token=dataJson.data.access_token;
        //     this.openid=dataJson.data.openid;
        //     this.expires_in=dataJson.data.expires_in;
        //     this.refresh_token=dataJson.data.refresh_token;
        //     },
        //     function(err) {
        //       console.log(err);
        //     }
        // );
    },

    getTokenNow(){
      this.$http
        .get(
          "http://101.201.113.187:53429/api/wechat/activity/get_access_token")
        .then(
          function(data) {
          console.log(data);
          let dataJson=JSON.parse(data.bodyText);
          console.log(dataJson);
          this.access_token=dataJson.data;
          },
          function(err) {
            console.log(err);
          }
      );
    },
    getUserInfo(){
      this.$http
        .get(
          "wx/sns/userinfo",
          {
            params:{
            access_token: this.access_token,
            openid: this.openid,
            lang: "zh_CN"
            }
          }
        )
        .then(
          function(data) {
            console.log(data);
          },
          function(err) {
            console.log(err);
          }
      );
    },
    getUserInfoByCode(){
      this.$http
        .get(
          "http://101.201.113.187:53429/api/wechat/activity/get_user_info_by_code",
          {
            params:{
            code:this.code
            }
          }
        )
        .then(
          function(data) {
            console.log(data);
            let dataJson=JSON.parse(data.bodyText);
            console.log(dataJson.data);
            this.nickName=dataJson.data.nickname;
            this.imgUrl=dataJson.data.head_img_url;
          },
          function(err) {
            console.log(err);
          }
      );
    },
    initWxconfig(){
       wx.config({
          debug: false,
          appId: this.appid, // 和获取Ticke的必须一样------必填，公众号的唯一标识
          timestamp:this.wxconfig.timestamp, // 必填，生成签名的时间戳
          nonceStr: this.wxconfig.nonce_str, // 必填，生成签名的随机串
          signature: this.wxconfig.signature,// 必填，签名，见附录1
          //需要分享的列表项:发送给朋友，分享到朋友圈，分享到QQ，分享到QQ空间
          jsApiList: [
            'onMenuShareAppMessage','onMenuShareTimeline',
            'onMenuShareQQ','onMenuShareQZone'
          ]
        });
         //处理验证失败的信息
        wx.error(function (res) {
          console.log('验证失败返回的信息:',res);
          // logUtil.printLog('验证失败返回的信息:',res);
        });
        //处理验证成功的信息
        wx.ready(function () {
        //              alert(window.location.href.split('#')[0]);
          //分享到朋友圈
          wx.onMenuShareTimeline({
            title: '幸运大转盘，快来帮我抽积分免费兑换iPhone~', // 分享标题
            desc: '我在海投汇参与抽积分活动！积分可以兑换优酷会员，iPhone！快来帮我抽奖吧！',
            link: window.location.href.split('#')[0], // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: 'https://www.htouhui.com/site/themes/default/images/index_new/home-pic-01.png', // 分享图标
            success: function (res) {
              // 用户确认分享后执行的回调函数
              // logUtil.printLog("分享到朋友圈成功返回的信息为:",res);
              console.log('分享朋友圈成功');
            },
            cancel: function (res) {
              // 用户取消分享后执行的回调函数
              // logUtil.printLog("取消分享到朋友圈返回的信息为:",res);
              console.log('分享朋友圈失败');
            }
          });
          //分享给朋友
          wx.onMenuShareAppMessage({
            title: '幸运大转盘，快来帮我抽积分免费兑换iPhone~', // 分享标题
            desc: '我在海投汇参与抽积分活动！积分可以兑换优酷会员，iPhone！快来帮我抽奖吧！', // 分享描述
            link: window.location.href.split('#')[0]+'?user_id=10086', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: 'https://www.htouhui.com/site/themes/default/images/index_new/home-pic-01.png', // 分享图标
            type: '', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function (res) {
              // 用户确认分享后执行的回调函数
              // logUtil.printLog("分享给朋友成功返回的信息为:",res);
              console.log('分享朋友成功');
            },
            cancel: function (res) {
              // 用户取消分享后执行的回调函数
              // logUtil.printLog("取消分享给朋友返回的信息为:",res);
              console.log('分享朋友失败');
            }
          });
          //分享到QQ
          // wx.onMenuShareQQ({
          //   title: _this.newDetailObj.title, // 分享标题
          //   desc: _this.desc, // 分享描述
          //   link: window.location.href.split('#')[0], // 分享链接
          //   imgUrl: _this.newDetailObj.thu_image, // 分享图标
          //   success: function (res) {
          //     // 用户确认分享后执行的回调函数
          //     // logUtil.printLog("分享到QQ好友成功返回的信息为:",res);
          //     console.log('分享朋友成功');
          //   },
          //   cancel: function (res) {
          //     // 用户取消分享后执行的回调函数
          //     // logUtil.printLog("取消分享给QQ好友返回的信息为:",res);
          //     console.log('分享朋友失败');
          //   }
          // });

          // //分享到QQ空间
          // wx.onMenuShareQZone({
          //   title: _this.newDetailObj.title, // 分享标题
          //   desc: _this.desc, // 分享描述
          //   link: window.location.href.split('#')[0], // 分享链接
          //   imgUrl: _this.newDetailObj.thu_image, // 分享图标
          //   success: function (res) {
          //     // 用户确认分享后执行的回调函数
          //     // logUtil.printLog("分享到QQ空间成功返回的信息为:",res);
          //   },
          //   cancel: function (res) {
          //     // 用户取消分享后执行的回调函数
          //     // logUtil.printLog("取消分享到QQ空间返回的信息为:",res);
          //   }
          // });
        });
    },
    getSignature(){
      this.$http
      .get(
        "http://101.201.113.187:53429/api/wechat/activity/get_signature",{
          params:{
            url:window.location.href
          }
        }
      )
      .then(
        function(data) {
          console.log(data);
          let dataJson=JSON.parse(data.bodyText);
          console.log(dataJson);
          this.wxconfig=dataJson.data;
          //获取签名之后初始化微信分享配置
          this.initWxconfig();
        },
        function(err) {
          console.log(err);
        }
      );
    }
  },
  mounted() {
    console.log(this.$route);
    this.code = this.$route.query.code;
    this.state = this.$route.query.state;
  },
  created(){
    // alert('created');
    this.getSignature();
    window.onfocus=function(){
      console.log('focus');
    }
    window.onblur=function(){
      console.log('blur');
    }
  },
  updated(){
    // alert('updated');
  },
  beforeRouteUpdate(to, from, next) {
    // alert('beforeRouteUpdate');
    next();
  },
  beforeRouteLeave(to,from,next){
    // alert('beforeRouteLeave');
    next();
}
};
</script>

<style>
</style>

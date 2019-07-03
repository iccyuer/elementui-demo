<template>
  <div>
    <h2>wechat share</h2>
    <button @click="scanQrcode">scan</button>
  </div>
</template>

<script>
import http from '../../util/fetch'
import wx from 'weixin-js-sdk'
export default {
  data() {
    return {
      appId: 'wxc182804e3da140dd',
      timestamp: '',
      nonceStr: '',
      signature: '',

    }
  },
  created() {
    console.log(this.$route)
    this.fetchSignature()
  },
  methods: {
    fetchSignature() {
      http.get('http://192.168.10.153:8086/dashi/wechat/get_web_signature', {
        params: {
          url: location.href.split('#')[0],
          // url: 'https://open.weixin.qq.com/connect/oauth2/authorize'
          // url: 'http://192.168.10.153:8086/op/wechat/index2'
        }
      }).then(res => {
        let { status, data } = res.data
        // console.log(res)
        if (status === 200) {
          console.log(data)
          this.timestamp = data.timestamp
          this.nonceStr = data.nonceStr
          this.signature = data.signature
          this.config()
        }
      }).catch(err => {
        console.log(err)
      })
    },
    config() {
      // let link = `${location.origin}/heheheh/adsasds?dsd`;
      let link = `http://192.168.10.153:8086/dashi/wechat/redirect?redirect_url=http://192.168.10.194:8086/op/wechat/index2`;
      // let link = 'https://open.weixin.qq.com/connect/oauth2/authorize';
      let title = '💝💓💟';
      let desc = ' ♥ ♦ ♡ ❤ ❥ ♥ ❣ ღ ♥';
      let imgUrl = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557147864081&di=16a089bbbc755ac09a7be13d93655971&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181119%2Fcb1ec8ae14034c039a34b6233d2b24cd.jpeg';
      wx.config({
        debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: this.appId, // 必填，公众号的唯一标识
        timestamp: this.timestamp, // 必填，生成签名的时间戳
        nonceStr: this.nonceStr, // 必填，生成签名的随机串
        signature: this.signature,// 必填，签名
        jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline', 'scanQRCode'] // 必填，需要使用的JS接口列表
      });
      wx.ready(() => {
        // 分享到朋友圈
        wx.onMenuShareTimeline({
          title, // 分享标题
          desc, // 分享描述
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
    scanQrcode() {
      wx.scanQRCode({
      needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
      scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
      success: function (res) {
        var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
        alert(result)
      }
      });
    }
  }
}
</script>

<style>

</style>

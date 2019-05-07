<template>
  <div>
    <button @click="oauth">to oauth</button>
    <button @click="getToken">to get access_token</button>
    <button @click="getUserInfo">to get user_info</button>
    <div>
      <h5>{{wxInfo.code}}</h5>
      <h5>{{token}}</h5>
      <h5>{{userInfo}}</h5>
    </div>
  </div>
</template>

<script>
import http from '../../util/fetch'
export default {
  data() {
    return {
      wxInfo: {
        appid: 'wxc182804e3da140dd',
        code: '',
      },
      token: '',
      userInfo: ''
    }
  },
  created() {
    let query = this.$route.query
    if (query && query.code) {
      if (Array.isArray(query.code)) {
          this.wxInfo.code = query.code[query.code.length - 1];
        } else {
          this.wxInfo.code = query.code;
        }
    }
  },
  methods: {
    oauth() {
      let redirect_uri = window.location.href
      window.location = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' +
          this.wxInfo.appid +
          '&redirect_uri=' +
          redirect_uri +
          '&response_type=code&scope=snsapi_userinfo&state=abcdefghigklmnopqrstuvwxyz#wechat_redirect';
    },
    getToken() {
      if (!this.wxInfo.code) {
        alert('缺少code参数')
        return
      }
      http.get('http://192.168.10.76:3000/dashi/wechat/get_web_oauth_access_token',{
        params: {
          code: this.wxInfo.code
        }
      }).then(res => {
        console.log('data', res.data)
        this.token = res.data.data
      }).catch(error => {
        console.log('error', error)
      })
    },
    getUserInfo() {
      if (!this.wxInfo.code) {
        alert('缺少code参数')
        return
      }
      http.get('http://192.168.10.76:3000/dashi/wechat/get_web_wechat_user_info',{
        params: {
          code: this.wxInfo.code
        }
      }).then(res => {
        console.log('data', res.data)
        this.userInfo = res.data.data
      }).catch(error => {
        console.log('error', error)
      })
    }
  }
}
</script>

<style>

</style>

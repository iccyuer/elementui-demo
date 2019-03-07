<template>
  <div style="left=100px"> <br>
    <!-- <button @click="webAuth">webAuth</button> -->
    <button @click="serverAuth" class="">serverAuth</button>
    <button @click="test">test</button>
    <button @click="url">url</button>
    <button @click="webAuth">webAuth</button>  <br>  <br>
    <button @click="serverAuth" class="">serverAuth</button> <br> <br>
    <button @click="create">create</button>

    <button @click="test">test</button>  <br>
    <input type="text" ref="input">
  </div>
</template>

<script>
import axios from "axios";
import wx from 'weixin-js-sdk';
import { setTimeout, setInterval } from 'timers';
export default {
  data(){
    return{
    }
  },
  methods:{
    webAuth() {
      this.$router.push('/me/test2')
    },
    serverAuth() {
      // location.href = 'http://www.baidu.com';
      location.href = 'http://192.168.0.90:3000/oauth';
      // console.log(window);
      setInterval(() => {
        console.log(1);
        wx.closeWindow();
      },200)
      // setTimeout(() => {
      //   console.log(window);
      // }, 500);
      return;
      axios
        .get("http://192.168.0.90:3000/oauth", {
          params: {
            // appid: this.appid,
            // secret: "d0270196b514f856fe636091f1730b43",
            // code: this.code,
            // grant_type: "authorization_code"
          }
        })
        .then((response)=> {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    create() {
            axios
        .get("http://192.168.0.90:3000/create", {
          params: {
            url:location.href
          }
        })
        .then((response)=> {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    test() {
      let query = this.$route.query;
      alert(query.code);
    },
    url() {
      // let url = 'http://new-sit.test.htouhui.com/activity-h5/activity_wechat/lucky_power?invite=aDQ1NTYxNTc4NDA=&op=9efwe823h2f372NUSo3'
      let url = 'http://192.168.43.197:8085/me/auth?invite=333sss&op=9isd3hs9';
      url = encodeURIComponent(url);
      console.log(url);
      'http%3A%2F%2F192.168.43.197%3A8085%2Fme%2Fauth%3Finvite%3D333sss%26op%3D9isd3hs9'
      alert(query.code+'--'+query.state);
      console.log(location.href);
      console.log(query);
    }
  },
  beforeCreate() {
    // location.href = 'http://192.168.0.90:3000/oauth';
  },
  created() {
    let query = this.$route.query;
    console.log(query);
    // alert('created');
    // location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxc63718bce6132657&redirect_uri=http://19//://192.168.0.90:8085/me/auth&response_type=code&scope=snsapi_userinfo&state=abcdefghigklmnopqrstuvwxyz#wechat_redirect';
  },
  mounted() {
    // alert('mounted');
    alert('created');
    // location.href = 'http://192.168.0.90:3000/oauth';
  },
  mounted() {
    alert('mounted');
    this.$refs['input'].focus();
    // location.href = 'http://192.168.0.90:3000/oauth';
    // console.log(window);

  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      // 通过 `vm` 访问组件实例
      // alert('beforeRouteEnter');
    })
  },
  beforeRouteUpdate (to, from, next) {
    // alert('beforeRouteUpdate');
    next()
  }
}
</script>

<style>
</style>

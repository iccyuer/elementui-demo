<template>
  <div style="left=100px"> <br>
    <!-- <button @click="webAuth">webAuth</button> -->
    <button @click="serverAuth" class="">serverAuth</button>
    <button @click="test">test</button>
    <button @click="url">url</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
    }
  },
  methods:{
    serverAuth() {
      location.href = 'http://192.168.0.90:3000/oauth'
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
    }
  },
  created() {
    let query = this.$route.query;
    console.log(query);
    // alert('created');
    // location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxc63718bce6132657&redirect_uri=http://19//://192.168.0.90:8085/me/auth&response_type=code&scope=snsapi_userinfo&state=abcdefghigklmnopqrstuvwxyz#wechat_redirect';
  },
  mounted() {
    // alert('mounted');
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

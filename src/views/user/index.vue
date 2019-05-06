<template>
  <div class="user">
    <div class="login">
      <el-input v-model="userName" placeholder="用户名"></el-input>
      <el-input v-model="userPwd" placeholder="密码"></el-input>
      <el-button @click="login" type="primary">登录</el-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      userName: 'dsasd',
      userPwd: '123456'
    }
  },
  methods: {
    login() {
      axios.post('/dashi/user/login',{ user_name: this.userName, user_pwd: this.userPwd })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style lsng="scss">

</style>

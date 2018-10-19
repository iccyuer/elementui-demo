<template>
  <div class="allow-origin">
    <button @click="origin">allow origin</button> <br> <br>
    <button @click="normal">not allow origin</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    methods:{
      origin(){
        let s='https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=a&json=1&p=3&sid=1466_21112&csor=1&cb=jQuery110205835763576834964_1537862032252&_=1537862032256'
        axios.get('api/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=a').then(res=>{
          console.log('res',res);
        }).catch(err=>{
          console.log('err',err);
        })
      },
      normal(){
        axios.get('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=a').then(res=>{
          console.log('res',res);
        }).catch(err=>{
          console.log('err',err);
        })
      }
    }
}
</script>

<style>

</style>

<template>
  <div>
    <h1>asd</h1>
    <h2>{{date}}</h2>
    <h2>{{date | dateFormat}}</h2>
    <button @click="go">click me</button>
  </div>
</template>

<script>
import {dateFormat} from 'vux'
export default {
  data(){
    return{
      date:new Date()
    }
  },
  filters:{
    dateFormat
  },
  methods:{
    go(){
      console.log(dateFormat(new Date(),'YYYY-MM-DD HH:mm:ss'));
    }
  }
}
</script>

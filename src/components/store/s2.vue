<template>
  <div>
    <span>{{count}}</span>
    <span>{{area}}</span>
    <button @click="go">click me</button>
    <button @click="query">query</button>
    <button @click="change">change</button>
    <button @click="get">get</button>
    <button @click="post">post</button>
    <button @click="haha('dadas')">name</button>
    <button @click="calc">calc</button>
    <button @click="judge">judge</button>
    <button @click="exec0">不能以0开头</button>
    <button @click="exec0">不能以0开头</button>
  </div>
</template>

<script>
let pic='haha';
let hehe='area';
export default {
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  data(){
    return{
      paramUrl:this.$route.query.hehe,
      people:{
        name:'he',
        age:21
      },
      [hehe]:'china',
      op:'da'
    }
  },
  methods:{
    go(){
      this.$store.commit('increment');
    },
    query(){
      console.log(this.$route.query);
    },
    change(){
      this.$route.query.hehe='op';
      var add = (a, b) => a + b
      console.log(add(3, 8)) // 11
    },
    get(){
      console.log(this.people.age);
    },
    post(){
      var params = new URLSearchParams();
      params.append("name",'13999999999');
      params.append("pwd",'123456');
      this.$axios({
          method: 'post',
          url:'http://xcx.xywol.com/index.php/api/version/login',
          data:params
      }).then((res)=>{
          console.log(res);
      }).catch((err)=>{
        console.log(err);
      });
    },
    [pic](val){
      console.log(val);
    },
    calc(){
      let s=Math.floor(Number(900) / 10000);
      console.log(s);
      if(!s){
        console.log('false');
      }else{
        console.log('true');
      }
    },
    judge(){
      console.log(this.op.type);
    },
    exec0(){
      let reg=/^[^0]\w$/
    }
  }
};
</script>

<style>
</style>

<template>
  <div>
    <button @click="go">go</button>
    <button @click="go1">go1</button>
    <button @click="go2">go2</button>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    go(){
      let app = () =>{
        return 1;
      }
      let app1 = () => 2;
      console.log(app());
      console.log(app1());
    },
    go1(){
      let app = () =>{
        return new Promise((resolve,reject) =>{
          resolve('hehe');
        })
      }
      console.log(app);
    },
    p() {
      return new Promise((resolve,reject) => {
        setTimeout(() => {
          resolve('3000');
        }, 3000);
        setTimeout(() => {
          resolve('5000');
        }, 5000);
      })
    },
    go2(){
      this.p().then(res => {
        console.log(res);
      })
    }
  }
}
</script>

<style>

</style>

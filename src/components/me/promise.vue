<template>
  <div>
    <button @click="go">go</button>
    <button @click="go1">go1</button>
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
    }
  }
}
</script>

<style>

</style>

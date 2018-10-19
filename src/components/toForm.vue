<template>
  <div>
    <form-d ref="toform" :action="inps"></form-d>
    <button @click="soso">soso</button>
  </div>
</template>

<script>
import formD from './form'
export default {
  components:{formD},
  data(){
    return{
      // inps:{
      //   title:'wala',
      //   swip:'klkl',
      //   num:12
      // }
      inps:{}
    }
  },
  methods:{
    soso(){
      // this.$refs['toform'].submit(this.inps);
      // this.$router.push({path:'/form'})
      // console.log(formD);
      // formD.methods.submit(this.inps);
      // console.log(formD.data().op);
      // console.log(this.$refs['toform'].op);
      this.inps={
        title:'wala',
        swip:'klkl',
        num:12
      }
    }
  }
}
</script>

<style>

</style>

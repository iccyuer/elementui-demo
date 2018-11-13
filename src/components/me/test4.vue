<template>
  <div>
    <button @click="gg">gg  </button>  <span>{{lotteryNumber}}</span>
  </div>
</template>

<script>
export default {
  data(){
    return{
      lotteryNumber: 0
    }
  },
  methods:{
    gg(){
      if(this.lotteryNumber !==0){
        this.lotteryNumber -= 1;
      }
    }
  }
}
</script>

<style>

</style>

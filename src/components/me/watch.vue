<template>
  <div>
    <input type="text" v-model="inp">
    <input type="text" v-model="inp2">
  </div>
</template>

<script>
export default {
  data(){
    return{
      inp:'',
      inp2:''
    }
  },
  watch:{
    inp(newVal,oldVal){
      console.log(newVal,oldVal);
    },
    inp2:{
      handler(newVal,oldVal){
        console.log(newVal,oldVal);
      },
      immediate: true,
      deep:true
    }
  }
}
</script>

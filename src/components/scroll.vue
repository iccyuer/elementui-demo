<template>
  <div class="sc" ref="sc" @touchmove="scroll1">
    <li v-for="i in 100">{{i}}ad</li>
    <button class="btn" @click='goTop'>goTop</button>
  </div>
</template>
<script>
export default {
  data(){
    return{
      num:10
    }
  },
  methods:{
    getScroll(){
      let sc=this.$refs.sc;
      console.log(document.querySelector('.sc').scrollTop);
    },
    scroll1(){
      console.log(document.querySelector('.sc'));
      console.log(document.querySelector('.sc').scrollTop);
    },
    goTop(){
      console.log('goTop')
      document.querySelector('.sc').scrollTop = 0;
    }
  },
  mounted(){
    this.getScroll();
    console.log(this);
    var that=this;
    // setInterval(()=>{
    //   that.num+=10;
    //   // console.log(that.num)
    //   console.log(document.querySelector('.sc').scrollTop=0);
    //   // that.$refs.sc.scrollTo({top:that.num,left:0})
    // },1000)
  }
}
</script>

<style>
.sc{
  position: fixed;
  width: 100%;
  overflow:auto;
  height: 100%;
}
</style>

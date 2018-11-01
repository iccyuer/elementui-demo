<template>
  <render :ele="ele"></render>
</template>


<script>
import render from './render';
export default {
  /*
    
  */
  components:{
    render
  },
  data() {
    return {
      ele:'el-button'
    };
  }
};
</script>

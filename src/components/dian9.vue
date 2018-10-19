<template>
  <div class="dian">
   <li v-for="i in 10">{{i}}</li>
  </div>
</template>

<script>
export default {
    
}
</script>

<style >
  .dian{
    width: 100px;
    height: auto;
    background: url('../assets/logo.png') no-repeat ;
    background-size: 100% 100px;
  }
  .dian img{
    width: 100px;
    height: auto;
  }
</style>

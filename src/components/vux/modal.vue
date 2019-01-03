<template>
  <div>
    <div class="header">header</div>
    <button @click="openDialog" style="margin-top:60px">openDialog</button>
    <li v-for="i in 100">{{i}}</li>
    <me-dialog ref="open"></me-dialog>
  </div>
</template>

<script>
import MeDialog from './MeDialog'
export default {
  components:{MeDialog},
  methods:{
    openDialog(){
      this.$refs['open'].open();
    }
  }
}
</script>

<style lang="scss">
  .header{
    position: fixed;
    width: 100%;
    height: 60px;
    background-color: aqua;
  }
  html, body, #app{
    // height: auto;
  }
</style>


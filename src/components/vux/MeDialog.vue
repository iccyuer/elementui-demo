<template>
  <div v-transfer-dom>
    <x-dialog
      v-model="showDialog"
      hide-on-blur
    >
      <div class="container">
        <img src="../../assets/logo.png" alt="">
      </div>
    </x-dialog>
  </div>
</template>

<script>
import { XDialog,TransferDomDirective as TransferDom } from 'vux'
export default {
  components:{
    XDialog
  },
  directives:{
    TransferDom
  },
  data(){
    return{
      showDialog:false
    }
  },
  methods:{
    open(){
      this.showDialog = true;
    }
  }
}
</script>

<style lang="scss">
  .container{
    background-color: transparent;
  }
</style>

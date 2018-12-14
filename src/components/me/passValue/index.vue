<template>
  <div>
    <el-button type="primary" @click="open">show</el-button>
    <cookie
    :beforeClick="beforeClick" 
    :afterClick="afterClick"
    ref="cookie">
      <coo ref="coo"></coo>
    </cookie>
  </div>
</template>

<script>
import cookie from './cookie'
import coo from './coo'
export default {
  components: {
    cookie, coo
  },
  methods:{
    open() {
      this.$refs['cookie'].handleOpen()
      this.$refs['coo'].defaultA()
    },
    beforeClick(resolve,reject){
      setTimeout(()=>{
        resolve(1);
      },1000);

    },
    afterClick(){
      console.log('after-click');
    }
},
}
</script>

<style lang="scss">

</style>

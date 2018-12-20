<template>
  <div>
    <el-button type="primary" @click="open">show</el-button>
    <cookie
    :beforeClick="beforeClick" 
    :afterClick="afterClick"
    ref="cookie">
      <!-- <coo ref="coo" :initConfig="init" slot-scope="data" @coo-mounted="coo-mounted"></coo> -->
      <coo1 ref="coo1"></coo1>
    </cookie>
  </div>
</template>

<script>
import cookie from './cookie' 
import coo from './coo'
const coo1 = () => import('./coo').then(m => m.default || m)
export default {
  components: {
    cookie, coo, coo1
  },
  methods:{
    open() {
      this.$refs['cookie'].handleOpen()
      // this.$refs['coo'].defaultA()
      this.$refs['coo1'].defaultA()
    },
    init() {
      console.log('ttf')
    },
    beforeClick(resolve,reject){
      setTimeout(()=>{
        resolve(1);
      },1000);

    },
    afterClick(){
      console.log('after-click');
    }
  }
}
</script>

<style lang="scss">

</style>

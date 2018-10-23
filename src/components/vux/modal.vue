<template>
  <div>
    <button @click="openDialog">openDialog</button>
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

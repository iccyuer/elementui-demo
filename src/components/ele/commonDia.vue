<template>
  <div>
    <el-dialog
      :visible.sync="showDisDia"
      width="100%"
      lock-scroll
      @open="openDialog"
      @opened="openDialog2"
      @close="closeDialog"
      @closed="closeDialog2"
      :close-on-click-modal="true"
      class="dia-dead-line">
      <h1>wakak</h1>
      <button @click="closeSelf">121</button>
    </el-dialog>
    <button @click="openDia">openDia</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showDisDia: false
    }
  },
  methods: {
    openDia () {
      this.showDisDia = true
    },
    closeSelf () {
      this.showDisDia = false
    },
    openDialog () {
      console.log('open')
    },
    openDialog2 () {
      console.log ('opened')
    },
    closeDialog () {
      console.log('close')
    },
    closeDialog2 () {
      console.log('closed')
    }
  }
}
</script>

<style lang="scss">
@keyframes dialog-fade-in {
  0% {
    transform: translate3d(0, 100%, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes dialog-fade-out {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, -100%, 0);
    opacity: 0;
  }
}
</style>

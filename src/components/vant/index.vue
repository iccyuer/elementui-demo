<template>
  <div class="vant-demo">
    <h1>header</h1>
    <van-button type="default" @click="showDialog">default</van-button>
    <modal-comm
      ref="modal-comm">
      </modal-comm>
    <h2>footer</h2>
  </div>
</template>

<script>
import modalComm from './modal-comm'
export default {
  components: {
    modalComm
  },
  methods: {
    showDialog() {
      this.$refs['modal-comm'].handleOpen();
    }
  }
}
</script>

<style>

</style>

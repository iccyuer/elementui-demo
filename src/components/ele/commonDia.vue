<template>
  <div>
    <el-dialog
      :visible.sync="showDisDia"
      width="50%"
      lock-scroll
      @open="openDialog"
      @opened="openDialog2"
      @close="closeDialog"
      @closed="closeDialog2"
      :close-on-click-modal="true"
      class="dia-dead-line">
      <h1>wakak</h1>
      <el-form>
        <el-form-item label="超长文本" class="too-long">
          <span>{{tooLongText}}</span>
        </el-form-item>
      </el-form>
      <p class="too">{{tooLongText}}</p>
      <button @click="closeSelf">121</button>
    </el-dialog>
    <button @click="openDia">openDia</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showDisDia: false,
      tooLongText: 'abcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefg'
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
*{
  // animation: dialog-fade-in 0.4s linear;
}
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
.el-dialog__body{
  .too-long{
    span{
      display: inline-block;
      width: 80px;
      word-wrap:break-word;
      // overflow: hidden;
    }
  }
  .too{
    display: inline-block;
    width: 80px;
    word-wrap:break-word;
  }
}

</style>

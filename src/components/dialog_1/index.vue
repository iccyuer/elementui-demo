<template>
  <div>
    <div class="header">header</div>
    <button style="margin-top:60px" @click="handleOpen">sweet</button>
    <button style="margin-top:60px" @click="showDialog = true">vux</button>
    <button style="margin-top:60px" @click="popupVisible = true">mint</button>
    <button style="margin-top:60px" @click="open2 = true">uiv</button>
    <li v-for="i in 200" v-html="i"></li>
    <!-- sweet -->
    <sweet-modal
    hide-close-button
    :blocking="false"
    overlay-theme="dark"
    :enable-mobile-fullscreen="false"
    ref="sweet-modal"
    class="sweet-modal-c">This is an alert.
    </sweet-modal>
    <!-- vux -->
    <x-dialog
      v-model="showDialog"
      hide-on-blur
      >
      <div class="container">
        <div class="close-icon">
          <img src="../../assets/close-ico.png" alt="" @click="showDialog = false">
        </div>
        <div class="newwork-err">
          <div class="err-body">
            <img src="../../assets/logo.png" alt="">
            <div class="err-msg">
              <span>网络异常</span> <br>
              <span>请检查网络是否正常</span>
            </div>
            <div class="err-btn" @click="">
              <span>知道了</span>
            </div>
          </div>
        </div>
      </div>
    </x-dialog>
    <!-- mint -->
    <mt-popup
      v-model="popupVisible"
      popup-transition="popup-fade">
      wakakaka
    </mt-popup>
    <!-- uiv -->
    <modal v-model="open2" title="Modal Title" size="sm">
      <p>This is a small modal.</p>
    </modal>
  </div>
</template>

<script>
import { SweetModal } from 'sweet-modal-vue'
import { XDialog,TransferDomDirective as TransferDom } from 'vux'
import { Modal } from 'uiv'
export default {
  components: {
    SweetModal,
    XDialog,
    Modal
  },
  data () {
    return {
      showDialog: false,
      popupVisible: false,
      open2: false
    }
  },
  methods: {
    handleOpen() {
      this.$refs['sweet-modal'].open()
      // this.showDialog = true
      // this.popupVisible =  true
      // this.open2 = true
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
  .sweet-modal-c{
    background: rgba(24, 32, 40, 0.74) !important;
  }
</style>

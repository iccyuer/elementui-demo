<template>
  <div :class="prefixCls" ref="prefixCls">
    <div :class="floatFixed?'float-normal float-fixed':'float-normal'">
      <slot></slot>
    </div>
  </div>
</template>

<script>
const prefixCls = 'float-tab';
export default {
  name:prefixCls,
  props:{
    scrollBox: String,
    offset:{
      type: Number,
      default(){
        return 0
      }
    }
  },
  data(){
    return{
      prefixCls,
      floatFixed: false
    }
  },
  computed:{
    scrollElement(){
      return document.querySelector(`#${this.scrollBox}`);
    },
    floatTab(){
      return this.$refs['prefixCls'];
    },
    floatNormal(){
      return document.querySelector('.float-normal');
    }
  },
  methods:{
    handleScroll () { 
      let scrollTop = this.scrollElement.scrollTop;
      let offsetTop = this.floatTab.offsetTop;
        if (scrollTop > offsetTop - this.offset) {
        this.floatFixed = true
        this.floatNormal.style.top = this.offset + "px";
      } else {
        this.floatFixed = false
        this.floatNormal.style.top = 0;
      }
    },
    initStyle(){
      let slot = this.floatNormal.firstChild || this.floatNormal.firstElementChild;
      let slotHeight = slot.offsetHeight;
      this.floatTab.style.height = slotHeight + 'px';
    }
  },
  mounted(){
    this.scrollElement.addEventListener('scroll', this.handleScroll);
    this.initStyle();
  }
}
</script>

<style lang="scss">
  .float-tab{
    position: relative;
    height: auto;
    .float-normal {
      position: absolute;
      width: 100%;
    }
    .float-fixed {
      position: fixed;
      top: 0;
      z-index: 999;
    }
  }
</style>

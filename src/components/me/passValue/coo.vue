<template>
  <div>
    <button @click="notify">coo-click</button>
  </div>
</template>

<script>
export default {
  data() {
    return{

    }
  },
  props: {
    initConfig: {
      type: Function,
      default() {
        console.log('defaultA')
      }
    }
  },
  methods:{
    defaultA() {
      console.log('defaultA')
    },
    notify() {
      this.vbus.$emit('coo-click')
    }
  },
  mounted() {
    console.log('coo-mounted', this)
    this.$emit('coo-mounted')
    // this.$root.$on('defaultB', this.defaultA())
    // console.log(GLOBAL.vbus)
    // GLOBAL.vbus.$on('defaultB', this.defaultA())
  },
  destroyed() {
    console.log('coo-destroyed')
  }
}
</script>

<style>

</style>

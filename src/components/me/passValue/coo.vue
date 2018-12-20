<template>
  <div><span>dsd</span></div>
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
    }
  },
  mounted() {
    this.$emit('coo-mounted')
  }
}
</script>

<style>

</style>

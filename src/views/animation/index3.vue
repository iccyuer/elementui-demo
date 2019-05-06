<template>
  <div class="animation3">

    <button @click="go">go</button>
  </div>
</template>

<script>
class Thorw {
  constructor() {
    this.direction = Math.random() > 0.5 ? 'left' : 'right'
    this.horizontal = Math.round(Math.random() * 200)
    this.vertical = Math.round(Math.random() * 200)
  }
  start() {
    
  }
}
export default {
  data () {
    return {
      boxArr = []
    }
  },
  methods: {
    go() {
      
    }
  }
}
</script>

<style lang="scss">
  .animation3{

  }
</style>

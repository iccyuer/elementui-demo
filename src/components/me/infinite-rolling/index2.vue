<template>
  <div class="wrapper-area">
    
  </div>
</template>

<script>
export default {
  pros: {
    wrapperWidth: {
      type: String,
      default: '100%'
    }
  },
  data() {
    return {
      newsList: [1, 2, 3, 4, 5]
    }
  },
  mounted() {
    
  },
  methods: {

  }
}
</script>

<style lang="scss">
  .wrapper-area{
    width: 100%;
    height: 300px;
  }
</style>

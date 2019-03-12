<template>
  <div>
    23
  </div>
</template>

<script>
import axios from 'axios'
export default {
  created() {
    this.mockTest();
  },
  methods: {
    mockTest() {
      axios.get('/hehe', { params: {}})
        .then(res => {
          console.log(res);
        })
    }
  }
}
</script>

<style>

</style>

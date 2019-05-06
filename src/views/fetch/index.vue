<template>
  <div>
    <h2>ahah</h2>
    <button @click="go">go</button>
  </div>
</template>

<script>
import http from '../../util/fetch'
export default {
  methods: {
    go() {
      http.post('/dsdsd', { a: 1 })
        .then(res => {
          console.lgo(res)
        })
    }
  }
}
</script>

<style>

</style>

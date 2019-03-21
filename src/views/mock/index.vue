<template>
  <div>
    23
    <hehe></hehe>
    <input type="text" placeholder="please enter" v-focus>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios'
// import '@/directives/focus'
import focus from '@/directives/focus/focus'
// Vue.use(focus);
console.log('!!', focus);
export default {
  directives: {
    focus
  },
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

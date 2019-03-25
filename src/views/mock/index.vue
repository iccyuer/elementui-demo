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
  data() {
    return {
      num: 0
    }
  },
  created() {
    this.mockTest();
    // this.timingTask();
  },
  methods: {
    timingTask(val) {
      console.log('di', val);
      setTimeout(this.timingTask(new Date()), 1000);
    },
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

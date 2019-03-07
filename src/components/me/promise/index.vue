<template>
  <div>
    <button @click="go">go</button>
    <button @click="go1">go1</button>
    <button @click="go2">go2</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    go() {
      setTimeout(() => {
        console.log('我是先来的')
      }, 1000);
      console.log('我是后来的')
    },
    go1() {
      return new Promise((resolve,reject) => {
        setTimeout(() => {
          console.log('我是先来的')
          resolve(111);
        },1000);
        console.log('我是后来的')
      })
    },
    test() {
      return new Promise((resolve, reject) => {
        resolve(true);
      })
    },
    go2() {
      // this.go1().then((res) => {
      //   console.log(res)
      // })
      this.test().then(res => {
        console.log(res);
      })
    }
  }
}
</script>

<style lang="scss">

</style>

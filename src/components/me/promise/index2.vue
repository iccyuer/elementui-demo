<template>
  <div>
    <button @click="go(5)">go</button>
    <button @click="go2">go2</button>
  </div>
</template>

<script>
export default {
  methods: {
    go(max) {
      var
        t,
        a = 0,
        b = 1,
        arr = [0, 1];
      while (arr.length < max) {
        a = b;
        b = a + b;
        // [a, b] = [b, a + b];
        arr.push(b);
      }
      console.log(arr);
      return arr;
    },
    go2() {
      let arr = [1, 2, 3]
      console.log(...arr);
      let a = {
        0: 'qweqw',
        1: 'asda',
        2: 'dadsasd1'
      }
      console.log(a);
      console.log({...a});
      let b = {
        ...a
      }
      console.log(b);
    }
  }
}
</script>

<style>

</style>

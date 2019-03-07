<template>
  <div>
    <button @click="go">go</button>
    <button @click="go2">go2</button>
  </div>
</template>

<script>
export default {
  methods: {
    async forDemo() {
      let arr = [1, 2, 3, 4, 5];
      for (let i = 0; i < arr.length; i ++) {
          await console.log(arr[i]);
      }
    },
    async forBugDemo() {
      let arr = [1, 2, 3, 4, 5];
      let that = this;
      arr.forEach( function(item) {
        // await cosole.log(item);
      });
    },
    go() {
      // this.forDemo();
      // this.forBugDemo();
      // console.log(this.normalFunc()); // Promise
      // this.normalFunc().then(res => {
      //   console.log(res); // async_normalFunc
      // })

      // console.log(this.asyncFunc()); // Promise
      // this.asyncFunc().then(res => {
      //   console.log(res); // async_asyncFunc
      // })
      console.log(this.sleep());
      this.sleep().then(res => {
        console.log(res);
      })
    },
    async normalFunc() {
      return 'async_normalFunc';
    },
    async asyncFunc() {
      return new Promise((resolve, reject) => {
        resolve('async_asyncFunc');
      })
    },
    async go2() {
      this.awaitFunc();
// this.add(1, 2)
//   .then(res => {
//     return this.add(res, 3);
//   })
//   .then(res => {
//     return this.add(res, 4);
//   })
//   .then(res => {
//     console.log('result:' ,res); // 10
//   })
// let result1 = await this.add(1, 2);
// let result2 = await this.add(result1, 3);
// let result3 = await this.add(result2, 4);
// console.log(result3); //10
    },
async sleep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('waka');
    }, 1000);
  })
},
async awaitFunc() {
  let number = await Math.random(); // 立即执行
  console.log(number);
  let result = await this.sleep(); //等待Promise结果
  console.log(result);
},

async add(add1, add2) {
  return add1 + add2;
}
  },

}
</script>

<style>

</style>

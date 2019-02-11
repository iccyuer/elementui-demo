<template>
  <div>
    <button @click="gg">gg</button>
    <span>{{lotteryNumber}}</span>
    <button @click="regTest">正则测试</button>
    <button @click="test">click</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lotteryNumber: 0
    };
  },
  methods: {
    gg() {
      if (this.lotteryNumber !== 0) {
        this.lotteryNumber -= 1;
      }
      console.log(this.calculate(10000, 0.1, 10));
    },
    calculate(capital, rate, year) {
      console.log(capital, rate, year);
      if (!year) return capital;
      const amount = capital * rate + capital;
      console.log("amount", amount);
      return this.calculate(amount, rate, year - 1);
    },
    regTest() {
      let url = 'http://192.168.0.90:8081/activity/h5/old_invite_new/invite_old'
      const reg = /\/activity\/h5\/{1}/;
      if (reg.test(url)) {
        alert('location')
      } else {
        alert('router')
      }
    },
    test() {
      let a = 0;
      if (a !== false) {
        console.log('aaa');
      }
    }
  }
};
</script>

<style>
</style>

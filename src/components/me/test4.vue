<template>
  <div>
    <button @click="gg">gg</button>
    <span>{{lotteryNumber}}</span>
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
    }
  }
};
</script>

<style>
</style>

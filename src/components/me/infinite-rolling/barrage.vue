<template>
  <div class="barrage-area">
    <button @click="go">go</button>  <br/>
    <span class="barrage" v-for="(item, index) in barrageList" :key="index">
      <span>{{item}}</span>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    wrapperWidth: {
      type: String,
      default: '100%'
    },
    poolSize: {
      type: Number,
      default: 5
    }
  },
  data() {
    return {
      newsList: [1, 2, 3, 4, 5],
      barrage: {
      },
      barrageList: [],
    }
  },
  mounted() {
  },
  methods: {
    getRandom(val) {
      return Math.floor(Math.random()*val) + 1;
    },
    go() {
      this.barrageList.push(this.getRandom(10));
    }
  }
}
</script>

<style lang="scss">
  .barrage-area{
    width: 100%;
    height: 300px;
  }
</style>

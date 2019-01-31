<template>
  <div class="barrage-area">
    <button @click="go">go</button>  <br/>
    <span class="barrage" v-for="(item, index) in barrageList" :key="index" :style="{top: item.top}">
      <span :style="{color: item.color}">{{item.msg}}</span>
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
      barrageAreaWidth: 0,
      barrageAreaHeight: 0,
    }
  },
  mounted() {
    let barrageArea = document.querySelector('.barrage-area');
    this.barrageAreaWidth = barrageArea.offsetWidth;
    this.barrageAreaHeight = barrageArea.offsetHeight;
  },
  methods: {
    getRandom(val) {
      return Math.floor(Math.random()*val) + 1;
    },
    go() {
      let data = {
        id: new Date().getTime(),
        msg: this.getRandom(10),
        color: `rgb(${this.getRandom(255)},${this.getRandom(255)},${this.getRandom(255)})`,
        top: this.barrageAreaHeight*Math.random() + 'px',
        scroll: ((id) => {
          
        })
      }
      console.log(data);
      this.barrageList.push(data);
    }
  }
}
</script>

<style lang="scss">
  .barrage-area{
    width: 100%;
    height: 300px;
    position: relative;
    .barrage{
      position: absolute;
      left: 100%;
    }
  }
</style>

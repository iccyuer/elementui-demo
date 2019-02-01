<template>
  <div class="barrage-area">
    <button @click="go">go</button>  <br/>
    <span class="barrage" v-for="(item, index) in barrageList" :key="index" :style="{top: item.top, transform: item.translateSit}">
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
    this.barrageAreaWidth = barrageArea.offsetWidth - 50;
    this.barrageAreaHeight = barrageArea.offsetHeight;
    setInterval(() => {
      this.go();
    }, 2000);
  },
  methods: {
    getRandom(val) {
      return Math.floor(Math.random()*val) + 1;
    },
    go() {
      // if (this.barrageList.length >= 5) {
      //   alert('弹幕太多啦！');
      //   return;
      // }
      let data = {
        id: new Date().getTime(),
        msg: this.getRandom(10),
        color: `rgb(${this.getRandom(255)},${this.getRandom(255)},${this.getRandom(255)})`,
        top: this.barrageAreaHeight * Math.random() + 'px',
        translateSit: 'translate3d(' + this.barrageAreaWidth + 'px, 0px, 0px)',
        speed: Math.random() + 0.5,
        scroll: (() => {
          let translateX = this.getComputedTranslateX(data.translateSit);
          if (translateX <= 0) {
            this.barrageList.splice();
            this.barrageList.some((item, index) => {
              if (item.id === data.id) {
                this.barrageList.splice(index, 1);
              }
            })
          } else {
            data.translateSit = 'translate3d(' + (translateX - data.speed) + 'px, 0px, 0px)';
          window.requestAnimationFrame(() => {
            data.scroll();
          })
          }
        })
      }
      data.scroll();
      this.barrageList.push(data);
    },
    getComputedTranslateX(translateSit) {
      if (translateSit) {
        let startX = 0;
        startX = Number(translateSit.replace(/translate3d\(|\)|px/g, '').split(',')[0]);
        return startX;
      }
    }
  }
}
</script>

<style lang="scss">
  .barrage-area{
    width: 100%;
    height: 100%;
    position: relative;
    .barrage{
      position: absolute;
      // left: 100%;
    }
  }
</style>

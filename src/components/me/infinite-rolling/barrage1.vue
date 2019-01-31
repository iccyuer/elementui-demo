<template>
  <div>
    <span v-for="el in ku" :key="el.id" class="fly" :style="{top:el.top + 'px'}">
      {{el.msg}}
    </span>
    <input type="text" placeholder=' xxx' v-model.trim='msg' @keyup.enter="setdata">
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: null, //缓存
      ku: [ ] //存取数据
    }
  },
  methods: {
    setdata() {
      if(this.msg) {
      let num = Math.random()*300;
      let top = Math.floor(num);
      let obj = {msg:this.msg,top:top}
      this.ku.push(obj);
      this.msg = " ";
      }
    }
  }
}
</script>

<style>
  .fly {
    position: absolute;
    transform: translateX(xxvw);
    animation: go xxs ease-in infinite;

  }
  @keyframes go {
    from {
      transform: translateX(xxvw);
    }
    to {
      transform:  translateX(xxxvw);
    }
  }
</style>

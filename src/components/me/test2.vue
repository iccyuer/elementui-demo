<template>
  <div>
    <p>{{list}}</p>
    <button @click="go">go</button>
    <p>{{go}}</p>
    <button @click="get">get</button>
    <button @click="extend">...</button>
    <button @click="change" :class="btnClass">change</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      op: {
        name: "io",
        age: 12
      },
      list: [],
      colorChange: false,
      btnClass:{
        blue:true,
        gray:false,
      }
    };
  },
  methods: {
    go() {
      let aa = {
        name: +this.op.name,
        age: +this.op.age
      };
      console.log(aa);

      let a = 5;
      let b = 2;
      let c = +"1"; //1
      console.log(c);
    },
    get() {
      console.log(process);
    },
    extend() {
      let arr1 = [1, 2, 3, 4];
      this.list = [...this.list, ...arr1];
    },
    change() {
      this.btnClass.gray = !this.btnClass.gray;
    }
  }
};
</script>

<style lang="scss">
.gray {
  border: 1px solid gray !important;
  color: gray !important;
}
.blue {
  border: 1px solid #2f6ec0 !important;
  color: #2f6ec0;
}
</style>

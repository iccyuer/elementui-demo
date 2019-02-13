<template>
  <div>
    <div v-for="(item, index) in arr" :key="index">
      <span>{{item}}</span>  <button @click="dele(arr, index)">del</button> 
    </div>
    <hr>
    <div v-for="(item, index) in op.data" :key="item">
      <span>{{item}}</span>  <button @click="op.del(index)">del</button> 
    </div>

    <hr>
    <button @click="go">go</button>
  </div>
</template>

<script>
export default {
  data() {
    return{
      arr: [1, 2, 3, 4, 5],
      op: {
        data: [6, 7, 8, 9, 10],
        del(idx) {
          console.log(this);
          if (!this.data) return;
          let l = [];
          this.data.forEach((val, index) => {
            if (index !== idx) l.push(val)
          });
          this.data = l;
        }
      }
    }
  },
  methods: {
    del(obj, idx) {
      if (!obj.data) return;
      let l = [];
      obj.data.forEach((val, index) => {
        if (index !== idx) l.push(val)
      });
      obj.data = l;
      console.log(obj.data);
    },
    dele(obj, idx) {
      if (!obj) return;
      let l = [];
      obj.forEach((val, index) => {
        if (index !== idx) l.push(val)
      });
      obj = l;
      console.log(obj);
    },
    go() {
      let a = new Date(2019, 2, 2);
      let b = new Date(1);
      console.log(a.getDay());
      console.log(b);
    }
  }
}
</script>

<style>

</style>
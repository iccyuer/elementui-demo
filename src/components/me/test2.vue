<template>
  <div>
    <p>{{list}}</p>
    <button @click="go">go</button>
    <p>{{go}}</p>
    <button @click="get">get</button>
    <button @click="extend">...</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      op:{
        name:'io',
        age:12,
      },
      list:[]
    }
  },
  methods:{
    go(){
      let aa= {
        name:+this.op.name,
        age:+this.op.age
      }
      console.log(aa);

      let a = 5;
      let b = 2;
      let c = +'1'; //1
      console.log(c)

    },
    get(){
      console.log(process)
    },
    extend(){
      let arr1 = [1,2,3,4];
      this.list=[...this.list,...arr1];
    }
  }
}
</script>

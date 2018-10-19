<template>
  <form ref="form" action="#" method="post">
    <!-- <input type="text" name="name">
    <input type="text" name="pwd">

    <div @click="sub">提交</div> -->
    <input
        type="text"
        v-for="(val, key) in action"
        :key="key"
        :name="key"
        :value="val"
      />
  </form>
</template>

<script>
export default {
  updated(){
    this.$refs['form'].submit();
  }    ,
  name:'form1',
  props:{
    action:Object
  },
  data(){
    return{
      list:{},
      op:'ioio'
    }
  },
  methods:{
    // sub(){
    //   // this.$refs['form'].submit();
    //   // console.log(this.$refs['form'].submit);
    //   this.$router.push({
    //     path:'/store/s2',
    //     query:{Id:'asd'}
    //   })
    // }
    submit(data){
      console.log(data);
      this.list=data;
    }
  }
}
</script>

<style>

</style>

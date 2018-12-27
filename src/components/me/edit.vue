<template>
  <div class="edit">
    <div class="" v-for="(item, index) in form" :key="index">
      <div class="cell" :class="">
        <span>姓名</span>
        <input type="text" v-model="item.inpName" v-if="true">
        <span class="label" v-html="item.inpName" v-else></span>
        <span @click="">编辑</span>
      </div>
      <div class="cell" :class="">
        <span>地址</span>
        <input type="text" v-model="item.inpAddress" v-if="true">
        <span class="label" v-html="item.inpAddress" v-else></span>
        <span @click="">编辑</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form:[
        {
          inpName: '432423',
          inpAddress: 'bj'
        }
      ]
    }
  },
  methods: {
    edit(val) {
      console.log(val)
    }
  }
}
</script>

<style lang="scss">
  input{
    background-color: #ffffff;
    border: none;
    outline: none;
    margin: 0;
    padding: 0;
  }
  .edit{
    width: 80%;
    margin: 100px auto;
    height: 500px;
    background-color: aqua;
    padding: 50px;
    .cell{
      width: auto;
      height: 38px;
      background-color: #2e2e50;
      color: #ffffff;
      padding: 6px;
      input{
        width: 300px;
        color: black;
      }
      .label{
        display: inline-block;
        width: 300px;
      }
    }
  }
</style>

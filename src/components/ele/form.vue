<template>
  <div>
    <el-date-picker
      v-model="value6"
      type="daterange"
      format="yyyy-MM-DD HH:mm:ss"
      value-format="yyyy-MM-DD HH:mm:ss"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>

    <el-date-picker
      v-model="value5"
      type="datetime"
      format="yyyy-MM-DD HH:mm:ss"
      placeholder="选择开始日期">
    </el-date-picker>
  </div>
</template>

<script>
export default {
  data(){
    return{
      value6:'',
      value5:''
    }
  },
  watch:{
    value6(val){
      console.log('6',val);
    },
    value5(val){
      console.log('5',val);
    }
  }
}
</script>

<style>

</style>

<template>
  <div>
    <el-date-picker  v-model="Time" type="daterange" value-format='yyyy-MM-dd'
                     start-placeholder="开始日期"  end-placeholder="结束日期" range-separator="至" :default-time="['00:00:00', '23:59:59']" :clearable="false"
                     size='small'>
    </el-date-picker>
  </div>
</template>

<script>
export default {
  data(){
    return{
      Time:''
    }
  },
  watch:{
    Time(val){
      console.log(val);
    }
  }
};
</script>

<style>
</style>

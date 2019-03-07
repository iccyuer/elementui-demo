<template>
  <div class="switch">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          status: false
        },
        {
          status: false
        },
        {
          status: false
        },
        {
          status: false
        },
        {
          status: false
        },
      ]
    }
  }
}
</script>

<style>

</style>

<template>
  <div class="contract-audit">
    <h2>合同审核</h2>
    <el-button type="primary" @click="add">新增</el-button>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
      label="操作">
      <template slot-scope="scope">
        <el-button @click="handleCheck(scope.$index, scope.row)" type="text" size="small">查看</el-button>
        <el-button @click="handleEdit(scope.$index, scope.row)" type="text" size="small">编辑</el-button>
        <el-button @click="handleRemove(scope.$index, scope.row)" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
    <!-- 弹窗 -->
    <dialog-audit
      ref="dialog-audit"
      @on-submit="onSubmit"
      ></dialog-audit>
  </div>
</template>

<script>
import dialogAudit from './dialog-audit.vue'
export default {
  components: {
    dialogAudit
  },
  data() {
    return {
      tableData: [{
        name: '合同审核',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  },
  methods: {
    // 操作 -- 新增
    add() {
      this.$refs['dialog-audit'].handleOpen({ title: '新增',type: 'add' });
    },
    // 操作 -- 查看
    handleCheck(index, row) {
      this.$refs['dialog-audit'].handleOpen({ title: '查看',type: 'check', data: row, index });
    },
    // 操作 -- 编辑
    handleEdit(index, row) {
      this.$refs['dialog-audit'].handleOpen({ title: '编辑',type: 'edit', data: row, index });
    },
    // 操作 -- 删除
    handleRemove(index, row) {
      this.tableData.splice(index,1);
    },
    // 操作 -- 弹窗新增/编辑的提交成功的回调(这里将来写刷新table表格的接口)
    onSubmit(type, msg) {
      if (type === 'add') {
        let data = {
          name: msg.name,
          address: msg.address
        }
        this.tableData.unshift(data);
      } else if (type === 'edit') {
        let data = {
          name: msg.name,
          address: msg.address
        }
        this.tableData.splice(msg.id,1,data);
      }
    }
  }
}
</script>

<style>

</style>

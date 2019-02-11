<template>
  <el-dialog
    :title="title"
    :visible.sync="dialogVisible"
    width="70%">
    <!-- 新增/编辑 -->
    <el-form ref="form1" :model="form" label-width="80px" v-if="type === 'add' || type === 'edit'">
      <el-form-item label="姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="form.address"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click.native="onSubmit">提交</el-button>
        <el-button @click.native="dialogVisible = false">取消</el-button>
      </el-form-item>
    </el-form>
    <!-- 查看 -->
    <el-form ref="form2" :model="form" label-width="80px" v-else>
      <el-form-item label="姓名">
        <span v-html="form.name"></span>
      </el-form-item>
      <el-form-item label="地址">
        <span v-html="form.address"></span>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click.native="dialogVisible = false">确定</el-button>
        <el-button @click.native="dialogVisible = false">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
export default {
  props: {
  },
  data() {
    return {
      dialogVisible: false,
      title: '新增',
      type: 'add',
      form: {
        id: 0,
        name: '',
        address: ''
      }
    }
  },
  methods: {
    handleOpen(param) {
      if (param) {
        this.title = param.title ? param.title : '新增';
        this.type = param.type ? param.type : 'add';
        this.form.id = param.index ? param.index : 0;
        this.form.name = param.data && param.data.name ? param.data.name : '';
        this.form.address = param.data && param.data.address ? param.data.address : '';
      }
      // 重置表单状态的逻辑
      // xxx
      // 开启弹窗
      this.dialogVisible = true;
    },
    // 操作 -- 新增/编辑
    onSubmit() {
      if (this.type === 'add') {
        // 新增的提交(这里将来写ajax)
        this.$emit('on-submit', this.type, this.form);
      } else if (this.type === 'edit') {
        // 编辑的提交(这里将来写ajax)
        this.$emit('on-submit', this.type, this.form);
      }
      this.dialogVisible = false;
    }
  }
}
</script>

<style>

</style>

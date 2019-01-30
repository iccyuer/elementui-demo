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
    <hr>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm.op" label-width="100px" class="demo-ruleForm">
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="ruleForm.name" @change="inputChange"></el-input>
      </el-form-item>
      <el-form-item label="照片" prop="img" ref="img-input">
        <el-input v-model="ruleForm.img" class="replace-input" style="display: none"></el-input>
        <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-success="handSuccess"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
      </el-form-item>

      <el-form-item label="超长文本" class="too-long">
        <p>{{tooLongText}}</p>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm()">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      tooLongText: `abcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefg`,
      value6:'',
      value5:'',
      ruleForm:{
        name: '',
        img: ''
      },
      rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          img: [
            // { required: true, message: '请上传图片' },
          ]
      }
    }
  },
  watch:{
    value6(val){
      console.log('6',val);
    },
    value5(val){
      console.log('5',val);
    }
  },
  methods: {
    inputChange(val) {
      console.log(val);
      this.$refs['img-input'].clearValidate()
      if(val.length === 3) {
        this.rules.img.push({ required: true, message: '请上传图片' })
      } else {
        this.rules.img.pop()
      }
    },
    handSuccess() {
      this.$refs['img-input'].clearValidate()
      this.ruleForm.img = 'success'
    },
    handlePictureCardPreview() {},
    handleRemove() {
      this.$refs['img-input'].clearValidate()
      this.ruleForm.img = ''
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      console.log(this.$refs)
      // this.$refs['ruleForm.op'].resetFields();
    }
  }
}
</script>

<style lang="scss">
  .replace-input{
    input{
      display: none;
    }
  }
  .too-long{
    p{
      width: 500px;
      height: 200px;
      // overflow: hidden;
      white-space: pre-wrap;
      // text-overflow: ellipsis;
    }
  }
</style>

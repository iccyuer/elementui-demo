<template>
  <div>
    <cookie :list="list" :data="value"></cookie>
    <hr>
    <input type="text" v-model="form.name">
    <input type="text" v-model="form.age">
    <span>{{form.sex}}</span>
    <button @click="go">click me</button>
    <hr>
    <el-checkbox-group v-model="checkList">
      <el-checkbox label="复选框 A"></el-checkbox>
      <el-checkbox label="复选框 B"></el-checkbox>
      <el-checkbox label="复选框 C"></el-checkbox>
      <el-checkbox label="禁用" disabled></el-checkbox>
      <el-checkbox label="选中且禁用" disabled></el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
import cookie from "./components/cookie";
export default {
  components: {
    cookie
  },
  data() {
    return {
      list: [
        {
          label: "name",
          value: ""
        },
        {
          label: "age",
          value: ""
        }
      ],
      value: "he",
      form: {
        name: ""
      },
      checkList: []
    };
  },
  methods: {
    go() {
      console.log(this.form);
      this.form.sex = "man";
      // this.$set(this.form, 'sex', 'man');
    }
  }
};
</script>

<style lang="scss">
.hehe {
  .j {
    font-size: 10px;
  }
}
</style>

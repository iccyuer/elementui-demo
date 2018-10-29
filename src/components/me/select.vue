<template>
  <div>
    <!-- <div :class="currentIndex===idx?'gray':'blue'" @click="change(item,idx)" v-for="(item,idx) in datas" :key="idx">{{item}}</div> -->
    <div class="btn-box" v-for="(item,idx) in datas" :key="idx">
      <!-- <span @click="clickOkTitle(item.id,idx)" :class="colorChange === true && idx===colorIndex ? 'isDisable':'button-ok'">确认</span>
      <span class="button-cecl" @click="clickClearTitle(item.id)">取消</span> -->

      <el-button type="success" plain @click="clickOkTitle(item.id,idx)" :disabled="colorIndex===idx">确认</el-button>
      <el-button type="danger" plain @click="clickClearTitle(item.id,idx)">取消</el-button>
    </div>
  </div>  
</template>

<script>
export default {
  data(){
    return{
      datas:[
        1,2,3,4,5,6,7,8,9,0
      ],
      currentIndex:-1,
      colorChange:false,
      colorIndex:-1
    }
  },
  methods:{
    clickOkTitle(id,index){
      this.$confirm("确认此条消息为嫌疑人, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
      .then(res => {
        this.colorIndex = index;
        this.colorChange = true;
        console.log(this.colorChange);
        this.$message({
          type: "success",
          message: "确认成功!"
        });
      })
      .catch(() => {
        this.$message({
          type: "info",
          message: "已取消确认"
        });
      });
    },
    clickClearTitle(){
      this.$confirm("取消此条消息为嫌疑人, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
      .then(res => {
        this.colorIndex = -1;
        this.colorChange = true;
        console.log(this.colorChange);
        this.$message({
          type: "success",
          message: "确认成功!"
        });
      })
      .catch(() => {
        this.$message({
          type: "info",
          message: "已取消确认"
        });
      });
    }
  }
}
</script>

<style lang="scss">
.btn-box {
  text-align: center;
  width: 100%;
  clear: both;
  left: 0px;
  bottom: px2rem(5px);
  margin:10px 0px
}
.btn-box>span{
  padding: 0.02rem 0.14rem;
  font-size: 12px;
  text-align: center;
  border: 0px;
  border-radius: 3px;
  cursor: pointer;
  display: inline-block !important;
}
.button-cecl {
  border: 1px solid #ac5070 !important;
  color: #ac5070;
  margin-left: 0.05rem;
}
.isDisable {
  border: 1px solid gray !important;
  color: gray !important;
}
.button-ok {
  border: 1px solid #2f6ec0 !important;
  color: #2f6ec0;
}
</style>

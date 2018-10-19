<template>
  <div>
    <button @click="go">click me</button>
    <button @click="push">push</button>
    <div class="content">
       你真好你真好你真好你真好你真好你真好你真好你真好你真好你真好你真好你真好你真好你真好你真好你真好你真好你真好你真好你真好
    </div>
    <button v-show="true">想你</button>
    <div>
      <ul>
        <li v-for="(item,idx) in arr2" :key="idx">
          <span>{{item.id}}-->{{item.text}}</span>
        </li>
      </ul>
    </div>
    <div>
      <button @click="go1">go1</button>
      <button @click="go2">go2</button>
      <button @click="go3">go3</button>
    </div>
  </div>
</template>

<script>
import store from './store'
export default {
  data(){
    return{
      arr1:[
        {id:1,text:'你真好11'},
        {id:2,text:'你真好22'},
        {id:3,text:'你真好33'},
        {id:4,text:'你真好44'},
        {id:5,text:'你真好55'},
        {id:1,text:'你真好111'},
        {id:2,text:'你真好222'},
        {id:6,text:'你真好66'},
      ],
      arr2:[],
      arr3:[1,2,3,5,6,7]
    }
  },
  methods:{
    go(){
      store.commit('increment')
      console.log(store.state.count)
    },
    push(){
      this.arr1.forEach((item,index) => {
        let result = this.arr2.every(function (item2, index2, arr) {
          return item.id!==item2.id;
        });
        if(result){
          this.arr2.push(item);
        }
      });
    },
    go1(){
      for (let i = 0; i < this.arr3.length; i++) {
        setTimeout(() => {
          console.log(i,this.arr3[i]);
        }, 1000);
      }
    },
    go2(){
      this.arr3.length=41;
      console.log(this.arr3);
    },
    go3(){
      var arr =[1,2,3,4];
      arr.push('asw');
      var tily=arr;
      tily.push('tily');
      console.log(arr);
      console.log(tily);
    }
    // fetchCarAlarmData() {
    //   getCarAlarmData().then(res => {
    //   var arr = [];
    //   if (res.retCode === ERR_OK) {
    //     this.formatArray(res.data);
    //   }
    //   });
    // },
    // formatArray(arr){
    //   arr.forEach((item,index) => {
    //     let result = this.AlarmAndMoniter.every(function (item2, index2, arr) {
    //       return item.id!==item2.id;
    //     });
    //     if(result){
    //       this.AlarmAndMoniter.push(item);
    //     }
    //   });
    //   this.text(this.AlarmAndMoniter[0], 0);
    // }
  },
  // //方法名改成你自己的，参数你3个参数看你需要用哪个就用那个
  // //id为点进来传进来的要删除的id
  // close(id){
  //   this.$confirm('此操作将永久删除该信息, 是否继续?', '提示', {
  //         confirmButtonText: '确定',
  //         cancelButtonText: '取消',
  //         type: 'warning',
  //         center: true
  //       }).then(() => {
  //         //这里是点击了确定，去掉删除的接口
  //         this.fetchClearData(id);
  //       }).catch(() => {
  //         this.$message({
  //           type: 'info',
  //           message: '已取消删除'
  //         });
  //       });
  // },
  // //删除接口方法
  // fetchClearData(id){
  //   getClearData({id}).then(res => {
  //     if (res.retCode === ERR_OK) {
  //       this.$message({
  //         type: 'success',
  //         message: '删除成功!'
  //       });
  //       //err_ok说明调用删除接口成功了，这个时候再次调用车辆的接口信息,然后重新去请求了数据，页面刷新了
  //       this.fetchCarAlarmData();
  //     }
  //   });
  // }
}
</script>

<style>
.content{
  width: 350px;
  overflow : hidden;
  text-overflow: clip;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

}
</style>

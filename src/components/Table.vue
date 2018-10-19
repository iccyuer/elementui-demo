<template>
    <div>
        <el-table
        :data="tableData"
        style="width: 100%">
            <el-table-column
                :prop="hehe"
                label="日期"
                width="180">
            </el-table-column>
            <!-- <el-table-column
                prop="name"
                label="姓名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址">
            </el-table-column>
            <el-table-column
                label="title">
                <template slot-scope="scope">
                   {{scope.toString()}}  
                    <div>{{scope.row.title}}</div>
                     <div>{{scope.column}}</div>
                    <div>{{scope.$index}}</div> 
                </template>
            </el-table-column> -->

            <template v-for="val in list">
              <el-table-column
                  :prop="val.prop">
              </el-table-column>
            </template>
            
        </el-table>

        <button @click='go'>跳转</button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      list:[{prop:'date'},{prop:'name'},{prop:'address'},{prop:'title'}],
      hehe:'name',
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          title: "walala"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          title: "wakaka"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          title: "waopop"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          title: "wauiiu"
        }
      ]
    };
  },
  methods:{
    go(){
      this.$router.push({path:'/'})
    }
  }
};
</script>
<template>
    <div class="slot-parent">
        <child>
            <template slot="header">
                <h3>我是header-slot</h3>
            </template>
            <template slot="main" slot-scope="scope">
                <h3>我是main-slot</h3>
                <!-- scope的值为：{ "dataM": [ "elsa", "anna", "alaf" ], "he": "hehe!!" } -->
                <!-- 所有通过v-bind绑定的属性都会出现在scope里面 -->
                <!-- 接收的scope值可以是自定义变量 -->
                {{scope}}
                <li v-for="val in scope.dataM">{{val}}</li>
                <button @click="getScope(scope)">click me</button>  
            </template>
            <!-- slot-scope vue2.5版本中取代了scope,使用会出现警告 -->
            <template slot="footer" scope="scope1">
                <h3>我是footer-slot</h3>
                {{scope1}}
                <li v-for="val in scope1.datan">{{val}}</li>
                <button @click="getScope(scope1)">click me</button>  
            </template>
            <template>
                <h3>我是noName-slot</h3>
            </template>
        </child>    

        <child-t :list-data="list">
          <template slot="tutu" slot-scope="scope">
            {{scope}}
            <ul>
              <li v-for="(val,index) in scope.row">
                {{val.name}}--{{val.age}}--{{val.title}}
              </li>
            </ul>
          </template>
        </child-t>
    </div>    
</template>

<script>
import ChildT from './Slot2'
export default {
  components:{
    ChildT
  },
  methods: {
    getScope(val) {
      console.log(val);
    }
  },
  data() {
    return {
      list: [
        { name: "elaf", age: 18, title: "wulala" },
        { name: "anna", age: 10, title: "opop" },
        { name: "elas", age: 16, title: "nmnm" }
      ]
    };
  }
};
</script>

<style>
</style>

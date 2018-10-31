<template>
  <div>
    <p>{{list}}</p>
    <button @click="go">go</button>
    <p>{{go}}</p>
    <button @click="get">get</button>
    <button @click="extend">...</button>
    <button @click="judge">true</button>
    <button @click="getRoute">getRoute</button>
    <button @click="timeout">timeout</button>
    <button @click="chong">chong</button>
    <br>
    <router-link to="/me/test">test</router-link>

    <br>
    <button @click="emit">emit</button>
    <br>
    <div class="info vux-1px-b">
      <div>姓名：</div>
      <div>身份证号：</div>
    </div>
    <button @click="for1">for</button>
    <button @click="san">san</button>
    <p>{{color}}</p>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "test2"
  },
  data() {
    return {
      op: {
        name: "io",
        age: 12
      },
      list: [],
      rawArr: [
        "NHx(氨氮)",
        "DO(溶解氧)",
        "DO(溶解氧)",
        "高锰酸盐指数",
        "DO(溶解氧)"
      ],
      sans:0,
      color:''
    };
  },
  methods: {
    go() {
      let aa = {
        name: +this.op.name,
        age: +this.op.age
      };
      console.log(aa);

      let a = 5;
      let b = 2;
      let c = +"1"; //1
      console.log(c);
    },
    get() {
      console.log(process);
    },
    extend() {
      let arr1 = [1, 2, 3, 4];
      this.list = [...this.list, ...arr1];
    },
    judge() {
      let a = "21";
      if (1 === true) {
        console.log("true");
      } else {
        console.log("false");
      }
    },
    getRoute() {
      console.log(this.$route);
    },
    timeout() {
      let idx = "op";
      setTimeout(() => {
        console.log(idx);
      }, 1000);
    },
    chong() {
      let rawArr = [
        "NHx(氨氮)",
        "DO(溶解氧)",
        "DO(溶解氧)",
        "高锰酸盐指数",
        "DO(溶解氧)"
      ];
      // return;
      let json = {};
      rawArr.map( item => {
        if(!json[item]) json[item] = 1;
        else json[item] += 1;
      })
      let resultArr = [];
      for(let item in json){
        let ele = {
          name: item,
          count: json[item]
        }
        resultArr.push(ele);
      }
      console.log(resultArr);

      for (var i = 0; i < rawArr.length; i++) {
        if (json[rawArr[i]] == undefined) {
          json[rawArr[i]] = 1;
        } else {
          json[rawArr[i]] += 1;
        }
      }
      console.log(json);
    },
    emit() {
      // this.vbus.$emit('userNotLogin');
      console.log(this);
      console.log(this.$el);
    },
    for1(){
      let arr = [1,2,3,4,5];
      let a = '';
      for(let i of arr){
        if(i === 3){
          break;
        }else{
          a = i; 
        }
        console.log('aaa');
      }
    },
    san(){
      // this.sans = !this.sans;
      this.color = this.sans?'#38a9f4':'#999999';
    }
  }
};
</script>

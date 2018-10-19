<template>
    <div>
        <input type="text" v-model="num">
        <button @click="hehe">click me</button>
        <button @click="uu">click uu</button>
        <span>{{moneyBumber}}</span>
        <button @click='tolink'>处理分享链接测试</button>
        <button @click='fullPath'>获取路径</button>
        <button @click='getRoute'>获取路由</button>
        <button @click='time'>setTimeOut</button>



        <div class="btn" @click="shadow">点击有阴影</div>

<br> <br> <br> <br>
        <div>
          <div class="content">
              <span class="count">12</span>
              <span class="unit">笔</span>
              <div class="underline"></div>
          </div>
        </div>

        <div>
          <input type="text" v-model='inp' style="margin-left:20px">
          <button @click="check">check</button>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      num: "",
      moneyBumber: "",
      inp: "",
      num1: 1
    };
  },
  methods: {
    hehe() {
      this.moneyBumber = this.num;
      // console.log(num);
      // console.log(num/10000);
      // var num1;
      // num1=parseFloat(num);
      // console.log(num1);

      // console.log(num1.toFixed(2));
      try {
        let moneyBumber = parseFloat(this.moneyBumber);
        console.log(moneyBumber);
        if (moneyBumber > 10000) {
          moneyBumber = moneyBumber / 10000;
        }
        moneyBumber = moneyBumber.toFixed(2);
        this.moneyBumber = moneyBumber;
      } catch (err) {
        console.log(err);
        return value;
      }
    },
    uu() {
      let arr = new Array();
      console.log(arr);
      if (!arr) {
        console.log("1");
      }
      if (!arr.length) {
        console.log("2");
      }
    },
    tolink() {
      // let link='http://new-sit.test.htouhui.com/m/?from=singlemessage#/wechat/lucky_wheel?invite=aDk2MzAzMTU5MzY%3D&code=011E9uL71tBwRS1xpTL71McxL71E9uLI';
      let link =
        "http://new-sit.test.htouhui.com/m/?from=singlemessage#/wechat/lucky_wheel?invite=aDk2MzAzMTU5MzY%3D";
      if (link.indexOf("invite") !== -1) {
        console.log(link.split("&"));
        console.log(link.split("&")[0]);
        console.log(link.split("&")[1]);
        let linkArr = link.split("&code")[0].split("?");
        console.log(linkArr[0] + "#/wechat/lucky_wheel?" + linkArr[2]);
      }
    },
    fullPath() {
      console.log(this.$route.fullPath);
    },
    check() {
      if (this.inp && /^[\s]+/.test(this.inp)) {
        callback(new Error('不能以空格开头'));
      }else if (this.inp && /^0+/.test(this.inp)){
        callback(new Error('不能以零开头'));
      }else if(this.inp && /^\w|[\u4E00-\u9FA5]+$/.test(this.inp)){
        callback();
      }else{
        callback(new Error('任务名称只能包含数字字母和中文'));
      }


      //------------------
      // let re = /^([a-zA-Z]|[\d]|[\u4E00-\u9FA5]){1,20}$/;
      // let re10 = /[\u4E00-\u9FA5]{0,10}/;
      // let re11 = /[\u4E00-\u9FA5]{11,}/;
      // // let ren=/[\u4E00-\u9FA5]+/;
      // // console.log(re.test(this.inp));
      // // console.log(this.inp,this.inp.length);
      // if (re.test(this.inp)) {
      //   console.log("字符通过");
      //   // if(re10.test(this.inp) && !re11.test(this.inp)){
      //   //   console.log('汉字通过');
      //   // }else{
      //   //   console.log('汉字未通过');
      //   // }
      //   // let result=ren.exec(this.inp);
      //   // console.log(result);
      //   // console.log(this.inp.split(/[a-zA-Z]|[\d]/));
      //   let rowResult = this.inp.split(/[a-zA-Z]|[\d]/);
      //   let length = 0;
      //   rowResult.forEach(v => {
      //     if (v) {
      //       length += v.length;
      //     }
      //   });
      //   console.log("汉字长度", length);
      //   if (length > 10) {
      //     console.log("汉字未通过");
      //   } else {
      //     console.log("汉字通过");
      //   }
      // } else {
      //   console.log("字符未通过");
      // }
    },
    getRoute() {
      // let path='https://stage.htouhui.com/m/?from=groupmessage#/wechat/lucky_wheel?invite=aDcyNzA5ODU4NTQ%3D&op=b1B5OWowUkZpbGVGLXdsWGJwZEE1WHBTZHVSaw%3D%3D&code=001lE1qQ1e2uZ91ljqqQ1gRjqQ1lE1qY&state=abcdefghigklmnopqrstuvwxyz'
      console.log(this.$route);
    },
    shadow() {},
    time() {
      this.num1++;
      console.log(this.num1);
      if (this.num1 < 10) {
        setTimeout(this.time(), 300);
      } else {
        console.log('over')
      }
    }
  }
};
</script>

<style scoped>
.btn {
  /* color: yellow; */
  background: url("../assets/logo.png");
}
.btn:active {
  /* color: red; */
  background: url("../assets/close-ico.png");
}
.content {
  /* text-decoration: underline; */
  position: relative;
  text-align: center;
}
.count {
  width: 64px;
  height: 42px;
  font-family: Roboto;
  font-size: 36px;
  line-height: 0;
  letter-spacing: 0;
  text-align: center;
  color: #0573f4;
}
.unit {
  font-family: STHeitiSC;
  font-size: 20px;
  font-weight: 300;
}
.underline {
  height: 2px;
  background-color: #0573f4;
  width: 50px;
  position: absolute;
  display: inline-block;
  bottom: 0px;
  margin: auto;
}
</style>

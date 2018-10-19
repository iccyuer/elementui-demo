<template>
  <div>
    <span>{{nums}}</span>
    <span>{{numsLength}}</span>
    <span>{{num}}</span>

    <hr>
    <span>{{resultNums}}</span>
    <span>{{resultNumsLength}}</span>
    <span>{{getNumsByIndex(1)}}</span>
      <hr>
    <span>{{ns}}</span>
    <br><br><br><br>
    <span>{{count}}</span>
    <button @click="change">click me</button>
    <hr>
    <div>{{pepple}}</div>
    <button @click="change1">click me</button>
    <button @click="sync">sync</button>
    <button @click="async">async</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data(){
    return{
      // ns:''
    }
  },
  computed: {
    nums() {
      return this.$store.getters.resultNums;
    },
    numsLength() {
      return this.$store.getters.resultNumsLength;
    },
    num() {
      return this.$store.getters.getNumsByIndex(2);
    },
    ...mapGetters([
      "resultNums",
      "resultNumsLength", 
      "getNumsByIndex",
      'count',
      'pepple'
      ]
    ),
    ...mapGetters({
      ns:'resultNums'
    })
  },
  methods:{
    change(){
      this.$store.commit('increment')
      this.$store.commit('increment2',{num:2})
    },
    change1(){
      this.$store.commit('changePeople',{name:'elsa',age:13})
    },
    sync(){
      this.$store.commit('sync').then(res=>{
        console.log('sync over');
      })
    },
    async(){
      this.$store.dispatch('async').then(res =>{
        console.log('async over');
      })
    },
  }
};
</script>

<style>
</style>

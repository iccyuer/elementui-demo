<template>
  <div style="left=100px"> <br>
    <button @click="webAuth">webAuth</button>
    <button @click="serverAuth" class="">serverAuth</button>
    <button @click="test">test</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
    }
  },
  methods:{
    serverAuth() {
      location.href = 'http://192.168.0.90:3000/oauth'
    },
    test() {
      let query = this.$route.query;
      alert(query.code);
    }
  },
  created() {
    alert('created');
  },
  mounted() {
    alert('mounted');
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      // 通过 `vm` 访问组件实例
      alert('beforeRouteEnter');
    })
  },
  beforeRouteUpdate (to, from, next) {
    alert('beforeRouteUpdate');
    next()
  }
}
</script>

<style>
</style>

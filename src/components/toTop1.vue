<template>
    <!-- 百分比布局返回顶部测试 -->
    <div class="base-layout">
      <div>
        <h1>top</h1>
        <h1>top</h1>
        <h1>top</h1>
        <h1>top</h1>
        <h1>top</h1>
        <h1>top</h1>
        <h1>top</h1>
        <h1>top</h1>
        <h1>top</h1>
        <h1>top</h1>
        <h1>top</h1>
        <h1>top</h1>
        <h1>top</h1>
        <h1>top</h1>
        <h1>top</h1>
        <h1>top</h1>
        <h1>top</h1>
      </div>
      <button @click='top'></button>
   </div>
    
</template>

<script>
export default {
  methods: {
    top() {
      console.log(document.documentElement.scrollTop);
      console.log(document.body.scrollTop);
      console.log(window.pageYOffset);
      document.documentElement.scrollTop = document.body.scrollTop = 0
    }
  }
};
</script>

<style>

</style>

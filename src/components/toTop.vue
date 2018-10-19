<template>
    <!-- 百分比布局返回顶部测试 -->
    <div class="base-layout">
      <!-- 页头 -->
      <header>
        
      </header>
      <!-- 内容 -->
      <main>
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
      </main>
      <!-- 页脚 -->
      <footer>
        
      </footer>
      <!-- 其他 -->
      <slot></slot>
   </div>
    
</template>

<script>
export default {
  methods: {
    top() {
      console.log(document.documentElement.scrollTop);
      console.log(document.body.scrollTop);
      console.log(window.pageYOffset);
      // document.getElementsByTagName('main')[0].scrollTop = 0;
      document.documentElement.scrollTop = document.body.scrollTop = 0
    }
  }
};
</script>

<style>
.base-layout {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
header {
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

main {
  height: calc(100% - 1px);
  width: 100%;
  z-index: 1;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}

footer {
  position: absolute !important;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 11;
  right: 0;
}
</style>

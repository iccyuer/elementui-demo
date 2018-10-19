<template>
    <div>
        <h1>我是子组件</h1>
        <!-- 具名插槽 （带name属性，可出现多个） -->
        <slot name="header"></slot>

        <!-- 作用域插槽 | 带数据的插槽 (绑定属性携带数据，可绑定多个) -->
        <slot name="main" :data-m="scope" :he="hehe" :row="list"></slot>
        <slot name="footer" :data-n=scopen></slot>

        <!-- 单个插槽 | 默认插槽 | 匿名插槽 (只能出现一个)-->
        <slot></slot>
    </div>    
</template>

<script>
export default {
  name: "child",
  data() {
    return {
      scope: ["elsa", "anna", "alaf"],
      scopen: ["elsa-n", "anna-n", "alaf-n"],
      hehe: "hehe!!",
      list:[1,2,3]
    };
  }
}
</script>

<style>
</style>

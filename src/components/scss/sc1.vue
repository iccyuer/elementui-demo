<template>
  <div :class="prefixCls">
    <p>属性和选择器嵌套</p>
    <section>
      <p>属性和选择器嵌套</p>
      <div class="pic">
        <img src="../../assets/logo.png" alt="...">
      </div>
      <ul>
        <li v-for="i in 10">{{i}}</li>
      </ul>
    </section>
  </div>
</template>

<script>
const prefixCls = 'op-list'
export default {
  data(){
    return{
      prefixCls
    }
  }
}
</script>

<style lang="scss">
  @import '../../style/form';
  $gray:#999;
  .op-list{
    > p{
      color: $gray;
    }
    section{
      > p{
        font-size: 20px;
      }
      
    }
  }
</style>


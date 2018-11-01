<template>
  <div class="inside">
    <div class="top">
      <slot name="top"></slot>
    </div>
    <div class="content">
      <slot>
        <span>32</span>
      </slot>
    </div>
    <button @click="find">find</button>
    <li v-for="(item,index) in data" :key="index">{{item.title}}--{{item.length}}</li>
  </div>
</template>

<script>
export default {
  name: 'inside',
  props:{
    data:{
      type: Array
    }
  },
  data(){
    return{}
  },
  methods:{
    find(){
      this.$emit('change');
    }
  }
}
</script>

<style lang="scss">
  .inside{
    .top{
      margin-top: 50px;
    }
    .content{
      color: pink;
    }
  }
</style>

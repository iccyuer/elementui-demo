<template>
    <div>
      <slot name="tutu" :row="listData"></slot>
    </div>
</template>

<script>
export default {
  name:"child-t",
  props: {
    listData: {
      type: Array,
      required:true
    }
  }
};
</script>

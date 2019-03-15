<template>
  <div>
    <template v-for="item in list">
      <slot :name="item.label">
        <input type="text" v-model="item.value" @change="change(item)">
      </slot>
      <input type="text" v-model="data">
    </template>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    },
    data: {
      type: String
    }
  },
  methods: {
    change(val) {
      console.log(+val.value);
      if ('222' === val.value) {
        alert(1);
      }
    }
  }
}
</script>

<style>

</style>

<template>
  <div>
    <template v-for="item in list">
      <slot :name="item.label">
        <input type="text" v-model="item.value" @change="change(item)">
      </slot>
      <input type="text" v-model="data">
    </template>
    <div>😆</div>
    <template v-for="item in list">
      <div>
        {{item.label}}---{{item.value}}--<button @click="del(item)">del</button>
      </div>
    </template>
    <div> <button @click="push">push</button> </div>
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
    push() {
      this.list.push({ name: 'ads', value: 'ads' })
      this.data = 'saa'
    },
    del(ele) {
      for (const item of this.list) {
        if (item.label === ele.label) {
          const index = this.list.indexOf(item)
          this.list.splice(index, 1)
          break
        }
      }
    },
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

<template>
  <div class="cell-swipe">
    <mt-cell-swipe
      v-for="i in 6"
      :key="i"
      :right="[
        {
          content: '编辑',
          style: { background: '#26a2ff', color: '#fff' },
          handler () {handClick(item)}
        },
        {
          content: '删除',
          style: { background: 'red', color: '#fff' },
          handler () {dele(item.id)}
        }
    ]">
      <div class="">
        <p>adfafa</p>
      </div>
    </mt-cell-swipe>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .cell-swipe{

  }
</style>

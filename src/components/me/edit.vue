<template>
  <div class="edit">
    <div class="cell">
      <input type="text" v-model="inp1">
      <span>编辑</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inp1: '',
    }
  }
}
</script>

<style lang="scss">
  .edit{
    width: 80%;
    margin: 100px auto;
    height: 500px;
    background-color: aqua;
    padding: 50px;
    .cell{

    }
  }
</style>

<template>
  <div class="style-2">
    <div v-for="(item, index) in tabConfig" 
    :class="[
      'area-tabs-item',
      {'area-item-active':currentItem === index},
      {'area-item-br1': item.description.split('<br/>').length-1 === 1},
      {'area-item-br2': item.description.split('<br/>').length-1 === 2}
    ]"
        @click="changeItems(item.id, index)" v-html="item.description">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentItem: 0,
      tabConfig:[
        { id: 60, description: '品质生活<br/>&<br/>时尚3C' },
        { id: 62, description: '坦克世界' },
        { id: 28, description: '战舰世界<br/>k' },
        { id: 90, description: '激战2' },
        { id: 90, description: '激战0' }
      ]
    }
  },
  computed: {
    activityIds(val) {
      console.log(val)
      let arr = [];
      this.tabConfig.forEach((val, index) => {
        arr.push(val.id);
      })
      return arr;
    }
  },
  methods: {
    changeItems(id, index) {
      this.currentItem = index
      this.activityIds = '2'
    },
  }
}
</script>

<style lang="scss">
  .style-2{
    margin: 100px auto;
    text-align: center;
  }
  .area-tabs-item {
    color: black;
    width: 102px;
    height: 69px;
    background-color: #f8f8f8;
    cursor: pointer;
    text-align: center;
    line-height: 69px;
    display: inline-block;
    vertical-align: top;
    span {
      height: 22px;
      font-size: 16px;
      font-weight: 500;
      text-align: center;
      color: #333333;
    }
  }
  .area-item-br1{
    padding-top: 5px;
    line-height: 35px;
  }
  .area-item-br2{
    padding-top: 5px;
    line-height: 22px;
  }
  .area-item-active {
    background-color: #2e2e50;
    box-shadow: -2px 2px 4px 0 rgba(0, 0, 0, 0.5);
    height: 75px;
    transform: translateY(-6px);
    color: #ffd96f;
  }
</style>

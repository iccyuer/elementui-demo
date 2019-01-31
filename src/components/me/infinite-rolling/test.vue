<template>
  <div>
    <scroller class="wa" :list=list>
      <template slot-scope="props">
        <span v-text="props.item"></span>
      </template>
    </scroller>
    <barrage></barrage> 
  </div>
</template>

<script>
import scroller from './index'
import barrage from './barrage'
export default {
  components: {
    scroller,
    barrage
  },
  data() {
    return {
      list: ['1234567890', '!!!', 'abcdefg', 'hello', 999999, '231312312', '2312312312312312']
    }
  }
}
</script>

<style lang="scss">
  .wa{
    // width: 200px;
  }
</style>

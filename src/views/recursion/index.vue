<template>
  <div>
    <city :cities="cities">></city>
  </div>
</template>

<script>
import city from './components/city'
export default {
  components: {
    city
  },
  data() {
    return {
      cities: [
        {
          name: '北京',
          child: [
            {
              name: '东城区'
            },
            {
              name: '西城区'
            }
          ]
        },
        {
          name: '河北',
          child: [
            {
              name: '廊坊'
            }
          ]
        },
        {
          name: '天津'
        }
      ]
    }
  }
}
</script>

<style>

</style>

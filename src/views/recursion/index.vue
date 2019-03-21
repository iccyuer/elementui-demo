<template>
  <div>
    <city :cities="cities">></city>
    <button @click="go">go</button>
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
  },
  methods: {
    go() {
      var arr = ['五',4,3,'叁',9];
      var newArr = []
      arr.forEach(function(item) {
        switch (item) {
          case 4:
            newArr.push('四')
            break;
          case 3:
            newArr.push('三')
            break;
          case 9:
            newArr.push('九')
            break;
          default:
          newArr.push(item);
        }
      })
      console.log(newArr)
      return newArr;
    }
  }
}
</script>

<style>

</style>

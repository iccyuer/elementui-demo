<template>
  <div class="city">
    <!-- <template v-for="(city, index) in cities">
      <ul>{{city.name}}
        <li v-if="city.child">
          <city :cities="city.child"></city>
        </li>
      </ul>
    </template> -->
    <!-- <a v-bind="{ href: 'http://www.baidu.com',target: '_blank',rel: 'noopener' }">baidu</a> -->
  </div>
</template>

<script>
export default {
  name: 'city',
  props: {
    cities: {
      type: Array,
      default() { return []}
    }
  }
}
</script>

<style lang="scss">
  .city{

  }
</style>

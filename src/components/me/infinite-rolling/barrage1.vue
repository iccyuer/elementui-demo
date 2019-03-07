<template>
  <div class="op">
    <button @click="go">go</button>
  </div>
</template>

<script>
export default {
data() {
  return {
    name: 'ccc'
  }
},
methods: {
  go() {
    let entity = {
      name: 'tutu',
      age: 10,
      boot() {
        console.log(this); 
        console.log(this.name); 
      },
      boot2: () => {
        console.log(this); 
        console.log(this.name); 
      }
    }
    entity.boot();
    entity.boot2();
  }
}
}
</script>

<style>

</style>

<template>
    <div>
        <li @click='aboutUs' class="aboutUs">关于我们 <div class="aboutUs_hr" @click='aboutUs'></div></li>
        <li @click='aboutUs' class="aboutUs">关于我们2 <div class="aboutUs_hr" @click='aboutUs'></div></li>
    </div>
</template>

<script>
export default {
  methods: {
    aboutUs() {
      console.log("1");
    }
  }
};
</script>

<style>
li:hover {
  font-size: 18px;
  color: #144fc0;
  position: relative;
}
.aboutUs_hr {
  width: 100px;
  height: 2px;
  background: #144fc0;
  display: block;
  margin: auto;
}
</style>

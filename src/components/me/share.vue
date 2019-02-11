<template>
  <div>
    <h2>测试普通浏览器分享</h2>
    <img src="../../assets/img/go.png" alt="" style="width: 300px; height: 300px">
  </div>
</template>

<script>
export default {
  data() {

  },
  created() {
    this.normalShare();
  },
  methods: {
    // 普通浏览器分享
    normalShare() {
      let headDom = document.querySelector('head');
      let meta1 = document.createElement('meta');
      meta1.setAttribute('property', 'og:type');
      meta1.setAttribute('content', 'website');
      headDom.appendChild(meta1);
      let meta2 = document.createElement('meta');
      meta2.setAttribute('property', 'og:title');
      meta2.setAttribute('content', '哇啊哈哈哈');
      headDom.appendChild(meta2);
      let meta3 = document.createElement('meta');
      meta3.setAttribute('property', 'og:description');
      meta3.setAttribute('content', '页面描述');
      headDom.appendChild(meta3);
      let meta4 = document.createElement('meta');
      meta4.setAttribute('property', 'og:image');
      meta4.setAttribute('content', 'https://static.htouhui.com/official-website-h5/production/1.0.0/static/img/lottery.png');
      headDom.appendChild(meta4);
      let meta5 = document.createElement('meta');
      meta5.setAttribute('property', 'og:url');
      meta5.setAttribute('content', 'http://www.baidu.com/');
      headDom.appendChild(meta5);

      let body = document.body;
      let img = document.createElement('img');
      img.setAttribute('src', 'https://static.htouhui.com/official-website-h5/production/1.0.0/static/img/lottery.png');
      img.setAttribute('style', 'width: 300px; height: 300px');
      let first=document.body.firstChild;//得到页面的第一个元素 
      body.insertBefore(img,first);
    },
    removeShareMeta() {

    },
  }
}
</script>

<style>

</style>

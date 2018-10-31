<template>
  <div>
    <div class="pic-vrfc">
      <i class="reg-icon iconspicyz "></i>
      <input type="text" placeholder="请输入图形验证码" >
      <img :src="src" alt="验证码"  v-if="">
      <img src="data:image/jpg;base64,iVBOR...QmCC" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: require("../../assets/logo.png")
    };
  }
};
</script>

<style lang="scss">
@mixin input-pub {
  height: 66px;
  padding: 20px 0px 20px 74px;
  box-sizing: border-box;
  border: solid 1px #eaeaea;
  background-color: #fff;
  font-family: SourceHanSansCN;
  font-size: 24px;
  letter-spacing: -1.8px;
}

.pic-vrfc {
  display: -webkit-flex; /* Safari */
  display: flex;
  align-items: flex-end;
  position: relative;

  img {
    width: 148px;
    height: 61px;
    margin-left: 15px;
    cursor: pointer;
  }

  input {
    width: 340px;
    @include input-pub;
  }
}

.reg-icon {
  position: absolute;
  top: 9px;
  left: 15px;
  font-size: 50px;
  color: #9b9b9b;
}

.iconspicyz {
  width: 41px;
  height: 34px;
  top: 20px;
  background: url("../../assets/logo.png") center no-repeat;
  background-size: 100% 100%;
  margin-left: 10px;
}
</style>

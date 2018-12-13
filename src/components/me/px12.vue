<template>
  <div>
    <div class="f16">我是一段文字</div>
    <div class="f14">我是一段文字</div>
    <div class="f12">我是一段文字</div>
    <div class="f10"><span>我是一段文字</span></div>
    <div class="f8"><span>我是一段文字</span></div>
    <div class="f6"><span>我是一段文字</span></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  @mixin chrome-px ($px: 12){
    transform-origin-x: 0;
    transform: sacle($px /12);
    -webkit-transform-origin-x: 0;
    -webkit-transform: scale($px / 12);
  }
  .f16{
    font-size: 16px;
  }
  .f14{
    font-size: 14px;
  }
  .f12{
    font-size: 12px;
  }
  .f10{
    > span{
      font-size: 10px;
      display: inline-block;
      @include chrome-px(10);
    }
  }
  .f8{
    > span{
      display: inline-block;
      @include chrome-px(8);
      font-size: 8px;
    }
  }
  .f6{
    > span{
      display: inline-block;
      @include chrome-px(6);
      font-size: 6px;
    }
  }
</style>

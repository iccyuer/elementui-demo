<template>
  <div class="oo">
    <div class="invested">
      <div class="point">
        <div class="point-out">
          <div class="point-in">
          </div>
        </div>
      </div>
      <div class="box-out">
        <div class="box-in"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .oo{
    background-color: #2e2e50;
    width: 100%;
    height: 100%;
    .invested{
      position: relative;
      margin: auto;
      width: 500px;
      .point{
        .point-out{
          background-color: #ffffff;
          width: 65px;
          height: 65px;
          border-radius: 50%;
          position: relative;
          z-index: 11;
          .point-in{
            background-color: #2e2e50;
            width: 59px;
            height: 59px;
            border-radius: 50%;
            position: absolute;
            left: 50%;
            top: 50%;
            margin-left: -29.5px;
            margin-top: -29.5px;
            z-index: 12;
            color: #ffd96f;
          }
        }
      }
      .point:after{
        content: '';
        display: inline-block;
        width: 65px;
        height: 65px;
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 5px;
        z-index: 8;
        background-color: #f48400;
      }
      .box-out{
        z-index: 9;
        position: absolute;
        left: 30px;
        top: 30px;
        width: 300px;
        height: 150px;
        background-color: #f48400;
        border-radius: 10px;
        .box-in{
          width: 290px;
          height: 150px;
          background-color: #ffffff;
          border-radius: 10px;
        }
      }
    }
  }
</style>

<template>
  <div class="wheel">
    <div class="wheel-main">
      <div class="wheel-pointer-box">
        <div class="wheel-pointer" :style="">
          <div class="pointer-real" @click="rotate_handle"></div>
        </div>
      </div>
      <div class="shadow"></div>
      <div class="wheel-bg" :style="{transform:rotate_angle,transition:rotate_transition}">
        <div class="prize-list">
          <div class="prize-item" v-for="(item,index) in orderPrizeList">
            <div class="prize-pic">
              <div :class="[{'coupon': item.type === 'coupon'},'bgt']" v-if="item.type === 'coupon'">
                <p>{{item.count*100}}<span>%</span></p>
              </div>
              <div :class="[{'integral': item.type === 'integral'},'bgt']" v-if="item.type === 'integral'">
                <p>{{item.count}}</p>
              </div>
            </div>
            <div class="prize-type">
              {{item.msg}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    prizeList: {
      type: Array,
      required: true
    },
    lotteryType:{
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      rotate_angle: 0,
      start_rotating_degree: 0,
      rotate_transition: "transform 3s ease-in-out",
      click_flag: true,
      prizeListD: [
        { id: "323", type: "integral", point: 100, order: 6 },
        { id: "324", type: "integral", point: 50, order: 4 },
        { id: "325", type: "integral", point: 25, order: 2 },
        { id: "326", type: "integral", point: 16, order: 8 },
        { id: "327", type: "integral", point: 8, order: 7 },
        { id: "328", type: "coupon", rate: "0.005", order: 1 },
        { id: "329", type: "coupon", rate: "0.004", order: 3 },
        { id: "320", type: "coupon", rate: "0.003", order: 5 }
      ]
    };
  },
  computed: {
    orderPrizeList() {
      let rawData = this.prizeList.sort(this.compareAsc("order"));
      let resultData = [];
      rawData.forEach((val, index) => {
        let prize = {};
        prize.prize_id = val.id;
        prize.type = val.type;
        prize.msg = val.type === "coupon" ? "加息券" : "积分";
        prize.count = val.rate || val.point;
        switch (index) {
          case 0:
            prize.degree = 337.5;
            break;
          case 1:
            prize.degree = 292.5;
            break;
          case 2:
            prize.degree = 247.5;
            break;
          case 3:
            prize.degree = 202.5;
            break;
          case 4:
            prize.degree = 157.5;
            break;
          case 5:
            prize.degree = 112.5;
            break;
          case 6:
            prize.degree = 67.5;
            break;
          case 7:
            prize.degree = 22.5;
            break;
        }
        resultData.push(prize);
      });
      return resultData;
    }
  },
  methods: {
    //升序排序方法
    compareAsc(propertyName) {
      return (object1, object2) => {
        let value1 = object1[propertyName];
        let value2 = object2[propertyName];
        if (value2 < value1) {
          return 1;
        } else if (value2 > value1) {
          return -1;
        } else {
          return 0;
        }
      };
    },
    rotate_handle() {
      if(!this.click_flag) return;
      this.rotating();
    },
    rotating(prizeId) {
      // this.$emit("rotateHandle");
      let during_time = 3; // 动画持续时长
      let random = Math.floor(Math.random() * 8); 
      let prize_random_id = this.orderPrizeList[random].prize_id;
      let prize_result_id = prizeId || prize_random_id;
      let result_angle = "";
      this.orderPrizeList.some(val => {
        if(val.prize_id === prize_random_id){
          result_angle = val["degree"];
          return;
        }
      })
      let rand_circle = 5; // 附加多转几圈，2-3
      this.click_flag = false; // 旋转结束前，不允许再次触发
      if (this.lotteryType === 0) {
        // 转动盘子
        let rotate_angle =
          this.start_rotating_degree +
          rand_circle * 360 +
          result_angle -
          (this.start_rotating_degree % 360);
        this.start_rotating_degree = rotate_angle;
        this.rotate_angle = "rotate(" + rotate_angle + "deg)";
        // 旋转结束后，允许再次触发
        setTimeout(() => {
          this.click_flag = true;
          console.log('ads',prize_result_id)
          this.$emit('lotteryResult',prize_result_id)
        }, during_time * 1000 + 300); // 延时，保证转盘转完
      } else {
        //转动指针
      }
    }
  }
};
</script>

<style lang="scss">
$bgWidth: 600px;
$itemWidth: $bgWidth/3.13;
$itemHeight: $bgWidth/2.04;
$imgUrl: '../../../assets/img/';
.wheel-main {
  text-align: center;
  position: relative;
  overflow: hidden;
  .wheel-pointer-box {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 10;
    transform: translate(-51%, -58%);
    width: 212px;
    height: 212px;
    .wheel-pointer {
      width: 212px;
      height: 212px;
      background: url($imgUrl+"go.png") no-repeat center top;
      background-size: 100%;
      transform-origin: center 60%;
      position: relative;
      .pointer-real {
        width: 130px;
        height: 130px;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -37%);
      }
    }
  }
  .wheel-bg {
    margin: auto;
    width: $bgWidth;
    height: $bgWidth;
    background: url($imgUrl+"zpbg.png") no-repeat center top;
    background-size: 100%;
    color: #fff;
    font-weight: 500;
    display: flex;
    align-content: center;
    div {
      text-align: center;
    }
    .prize-list {
      width: 100%;
      height: 100%;
      position: relative;
      .prize-item {
        position: absolute;
        top: 50%;
        left: 50%;
        width: $itemWidth;
        height: $itemHeight;
        .prize-pic {
          margin-top: 55px;
          .coupon {
            background: url($imgUrl+"zp-coupon.png") no-repeat center;
          }
          .integral {
            background: url($imgUrl+"zp-integral.png") no-repeat center;
          }
          .bgt {
            width: 105px;
            height: 105px;
            display: inline-block;
            background-size: 100%;
            position: relative;
            > p {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
          }
        }
        .prize-type {
          margin-top: -10px;
          font-size: 18px;
          color: #58587e;
        }
      }
      .prize-item:first-child {
        transform: translate(-50%, -50%) rotate(22.5deg) translateY(-50%);
      }
      .prize-item:nth-child(2) {
        transform: translate(-50%, -50%) rotate(67.5deg) translateY(-50%);
      }
      .prize-item:nth-child(3) {
        transform: translate(-50%, -50%) rotate(112.5deg) translateY(-50%);
      }
      .prize-item:nth-child(4) {
        transform: translate(-50%, -50%) rotate(157.5deg) translateY(-50%);
      }
      .prize-item:nth-child(5) {
        transform: translate(-50%, -50%) rotate(202.5deg) translateY(-50%);
      }
      .prize-item:nth-child(6) {
        transform: translate(-50%, -50%) rotate(247.5deg) translateY(-50%);
      }
      .prize-item:nth-child(7) {
        transform: translate(-50%, -50%) rotate(292.5deg) translateY(-50%);
      }
      .prize-item:last-child {
        transform: translate(-50%, -50%) rotate(337.5deg) translateY(-50%);
      }
    }
  }
  .shadow {
    width: 548px;
    height: 547px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 16px 17px 0 rgba(205, 80, 18, 0.5);
  }
}
</style>

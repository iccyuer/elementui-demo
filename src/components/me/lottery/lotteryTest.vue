<template>
  <div>
    <lottery
      :prizeList="list"
      :lotteryType="1"
      @lotteryResult="lotteryResult"
    ></lottery>
    <lottery-dialog 
    ref="lotteryDialog"
    :isOldUser="true"
    :prizeInfo="info"
    ></lottery-dialog>
  </div>
</template>

<script>
import lottery from './lottery'
import lotteryDialog from './lotteryDialog'
export default {
  components:{lottery, lotteryDialog},
  data(){
    return{
      list: [
        { id: "323", type: "integral", point: 110, order: 6 },
        { id: "324", type: "integral", point: 50, order: 4 },
        { id: "325", type: "integral", point: 27, order: 1 },
        { id: "326", type: "integral", point: 16, order: 8 },
        { id: "327", type: "integral", point: 8, order: 7 },
        { id: "328", type: "coupon", rate: "0.010", order: 2 },
        { id: "329", type: "coupon", rate: "0.008", order: 3 },
        { id: "320", type: "coupon", rate: "0.005", order: 5 }
      ],
      info:{}
    }
  },
  methods:{
    lotteryResult(prizeId){
      this.list.some(val => {
        if(val.id === prizeId){
          this.info = {
            type: val.type,
            count: val.point || val.rate
          }
          return;
        }
      });
      this.$refs['lotteryDialog'].open();
    }
  }
}
</script>

<style>

</style>

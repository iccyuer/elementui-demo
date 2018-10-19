<template>
  <div>
    <!-- <x-switch title="change" v-model="show"></x-switch> -->
    <button @click="show">show</button>
    <button @click="hide">hide</button>
  </div>
</template>

<script>
import {Alert,XSwitch} from 'vux'
export default {
    components:{
      Alert,XSwitch
    },
    // watch:{
    //   show(val){
    //     if(val){
    //       this.$vux.alert.show({
    //       title: 'Vux is Cool',
    //       content: 'Do you agree?',
    //       onShow () {
    //         console.log('Plugin: I\'m showing')
    //       },
    //       onHide () {
    //         console.log('Plugin: I\'m hiding')
    //       }
    //     })
    //     }else{
    //       this.$vux.alert.hide()
    //     }
    //   }
    // },
    data(){
      return{
        // show:false
      }
    },
    methods:{
      show(){
        this.$vux.alert.show({
          title: 'Vux is Cool',
          content: 'Do you agree?',
          buttonText:'sda',
          onShow () {
            console.log('Plugin: I\'m showing')
          },
          onHide () {
            console.log('Plugin: I\'m hiding')
          }
        })
        console.log(this)
      },
      hide(){
        this.$vux.alert.hide();
      }
    }
}
</script>

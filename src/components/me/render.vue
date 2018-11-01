

<script>
export default {
  render(createElement){
    return createElement(this.ele,{
      'class':{
        'ab':true,
        'cb':false
      },
      domProps:{
        innerHTML:'btn'
      }
    })
  },
  props:{
    ele:{
      type:String,
      required:true
    }
  },
}
</script>

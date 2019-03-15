<script>
export default {
  // functional: true, // 函数式组件，无状态(data)，无实例(this),
  props: {
    level: {
      type: Number,
      required: true,
      default :1
    }
  },
  // (createElement, context) --函数式组件提供第二个参数作为上下文
  render(h, context) {
    return h(
      `h${this.level}`, //函数式组件 -->context.props.level
      {
        class: 'red'
      },
      [
        this.$slots.default,
        h('hr'),
        '!!'
      ]
    )
  }
}
</script>

<style lang="scss">
  .red{
    color: red;
    filter: blur(0.2px) invert(100%);
  }
</style>

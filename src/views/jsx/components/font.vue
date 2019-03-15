<script>
export default {
  props: {
    font: {
      type: Object,
      default() {
        return {
          fontSize: 20,
          fontColor: 'red'
        }
      }
    }
  },
  methods: {
    clickHandler() {
      this.font.fontSize += 1;
    }
  },
  render(h) {
    return h(
      'span',
      {
        style: {
          fontSize: this.font.fontSize + 'px'
        },
        on: {
          click: this.clickHandler,
          mousemove: this.clickHandler
        }
      },
      [
        this.$slots.default
      ]
    )
  }
}
</script>

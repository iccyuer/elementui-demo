<template>
  <div>
    <div v-if="show">
      <el-button type="primary" @click="toggle">主要按钮</el-button>
      <slot></slot>
    </div>
    <div v-if="false">
      <el-dialog
        title="提示"
        :visible.sync="show"
        width="30%">
        <span>这是一段信息</span>
        <slot :todo="show"></slot>
        <span slot="footer" class="dialog-footer">
          <el-button @click="show = false">取 消</el-button>
          <el-button type="primary" @click="show = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cookie',
  data() {
    return {
      show: false
    }
  },
  props: {
    beforeClick: {
      type: Function,
      default() {
        console.log('default-beforeClick')
      }
    },
    afterClick: {
      type: Function,
      default() {
        console.log('default-afterClick')
      }
    }
  },
  methods: {
    handleOpen() {
      this.show = true
      // this.$slots.default[0].componentInstance.defaultA()
      // console.log(this.$slots.default[0])
      // console.log(this.$slots.default[0].data)
      // console.log(this.$slots.default[0].componentInstance.defaultA())
      setTimeout(() => {
        // console.log(this)
        // this.$slots.default[0].componentInstance.defaultA()
      }, 1000);
    },
    toggle() {
      let promise = () => {
        return new Promise((resolve, reject) => {
          this.beforeClick(resolve, reject);
        });
      };
      let start = async () => {
        try {
          // await promise().then((data) => {
          //   console.log('!', data);
          // });
          let result = await promise();
          console.log('~', result); 
          console.log('cookie-click');
          this.afterClick();
        } catch (e) {
            console.log(e);
        }
      };
      start();
    }
  },
  mounted() {
    console.log('mounted')
  }
}
</script>

<style lang="scss">

</style>

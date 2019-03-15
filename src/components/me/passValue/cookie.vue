<template>
  <div>
    <div v-if="false">
      <el-button type="primary" @click="toggle">主要按钮</el-button>
      <slot></slot>
    </div>
    <div v-if="true">
      <el-dialog
        title="提示"
        :visible.sync="show"
        width="30%">
        <span>{{list}}</span>
        <el-input v-model="hehe.name" placeholder="请输入内容"></el-input>
        <button @click="changeList">changeList</button>
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
    list: {
      type: Array,
      default: []
    },
    hehe: {
      type: Object,
      default: ''
    },
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
    changeList() {
      this.list = [1,3]
      // this.$emit('update:list', [1, 2, 3])
    },
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
    console.log('cookie-mounted')
  }
}
</script>

<style lang="scss">

</style>

<template>
  <div>
    <button @click="go">go</button>
    <highcharts :options="options"></highcharts>
    <div id="container"></div>
  </div>
</template>

<script>
import Highcharts from 'highcharts';
export default {
  data() {
    return {
      options: {
        chart: {
          type: 'column', // 指定图表的类型(series 中未指定 type时生效),默认是折线图（line),常见[column: 柱状图(上下), bar: 条形图(左右),...] 详见plotOptions
          inverted: false, // 图表反转(x轴和 y轴进行对调操作)
          animation: { // 图表更新动画,未实现？(使用vue-highcharts可以实现更新)
            duration: 200,
            easing: 'swing'
          },
          reflow: false // 是否开启图表自适应,需配合min-样式
        },
        title: { // 标题
          text: '我的第一个图表'
        },
        xAxis: { // x轴
          categories: ['苹果', '香蕉', '橙子'],   // x 轴分类
        },
        yAxis: { // y轴
          title: {
            text: '吃水果个数'                // y 轴标题
          }
        },
        plotOptions: {
          series: {
            animation: { // 图表初始化动画,可以false
              duration: 2000,
              easing: 'swing'
            }
          }
        },
        series: [ // 数据列
          {                              
            name: '小明', // 数据列名
            data: [1, 0, 4], // 数据
            // type: 'line', // 为单个数据指定类型
            animation: { // 设置具体数据列动画,可以false
              duration: 20000,
              easing: 'swing'
            }
          }, 
          {
            name: '小红',
            data: [5, 7, 3],
            // type: 'bar'
          }
        ],
        credits: {
          enabled: false // 是否显示版权标签
        }
      }
    }
  },
  mounted() {
    Highcharts.chart('container', this.options);
  },
  methods: {
    go() {
      this.options.series[0].data = [2, 4, 6];
    }
  }
}
</script>

<style lang="scss">
  #container{
    min-width: 800px;
  }
</style>

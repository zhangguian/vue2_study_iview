<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-11-15 19:06:51
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-11-22 10:30:44
-->
<template>
  <div ref="dom"></div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  name: 'IviewLine',

  data() {
    return {
      dom: null
    };
  },

   mounted() {
    this.$nextTick(() =>{
      // let xAxisData = Object.keys(this.value)
      // let seriesData = Object.values(this.value)
      let option = {
        title: {
          text: '',
          subtext: '需求个数燃烧图',
          left: 'left',
          textStyle: {
            fontSize: 30
          },
          subtextStyle: {
            fontSize: 13
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}'
        },
        legend: {
          left: 'right',
          top: '10',
          textStyle: {
            fontSize: 10
          }
        },
        xAxis: {
          type: 'category',
          name: 'x',
          splitLine: { show: false },
          data: ['02-01', '02-02', '02-03', '02-04', '02-05', '02-06']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        yAxis: {
          type: 'log',
        },
        series: [
          {
            name: '未关闭',
            type: 'line',
            lineStyle: {
              type: 'dashed',
            },
            itemStyle: {
              color: "#3582fb"
            },
            data: [20, 25, 23, 25, 25,30]
          },
          {
            name: '基准线',
            type: 'line',
            itemStyle: {
              color: "#cccccc"
            },
            data: [10, 9, 8, 8, 6, 7]
          },
        ]
      };
      this.dom = echarts.init(this.$refs.dom,)
      this.dom.setOption(option)
    });
    // console.log('this.dom :>> ', this.dom);
  },

  methods: {
    
  },
};
</script>

<style lang="less" scoped>

</style>
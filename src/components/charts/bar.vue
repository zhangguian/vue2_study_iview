<template>
  <div ref="dom"></div>
</template>

<script>
import * as echarts from 'echarts';
// import tdTheme from './theme.json'
// echarts.registerTheme('tdTheme', tdTheme)
export default {
  name: 'IviewBar',

  components: {  },

  props: { 
    value: Object,
    text: String,
    subtext: String,
  },

  data() {
    return {
      dome: null
    };
  },

  mounted() {
    this.$nextTick(() =>{
      let xAxisData = Object.keys(this.value)
      let seriesData = Object.values(this.value)
      let option = {
        title: {
          text: this.text,
          subtext: this.subtext
        },
        xAxis: {
          type: 'category',
          data: xAxisData
        },
        yAxis: {type: 'value'},
        series:[{
          type: 'bar',
          data: seriesData,
        }],
        label: {
          show: true,
          position: 'top'
        },
         toolbox: {
        feature: {
          saveAsImage: {}, // 导出图片
          restore: {},
          magicType: {
            type: ['bar', 'line']
          }
        }
      },
      }
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
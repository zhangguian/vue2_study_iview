<template>
  <div ref="dom">
    
  </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  name: 'IviewRadar',

  components: {  },

  props: {
    value: Array,
    text: String,
    subtext: String
  },

  data() {
    return {
      dom: null
    };
  },

   mounted () {
    this.$nextTick(() => {
      let legend = this.value.map(_ => _.name)
      let option = {
        title: {
          text: this.text,
          x: 'center'
        },
        legend: {
          data: legend,
          itemHeight: 1,
          bottom: '5'
        },
        radar: {
          // shape: 'circle',
          indicator: [
            { name: '引用', max: 10.0 },
            { name: '口碑', max: 10.0 },
            { name: '热度', max: 10.0 },
            { name: '贡献', max: 10.0 },
            { name: '产量', max: 10.0 },
          ]
        },
        series: [
          {
            type: 'radar',
            data: this.value,
            label: {
              position: "top",
              show: true,
              distance: 5
            }
          }
        ]
      }
      this.dom = echarts.init(this.$refs.dom, )
      this.dom.setOption(option)
    })
  },

  methods: {
    
  },
};
</script>

<style lang="less" scoped>

</style>
<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-11-15 15:03:50
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-11-23 17:11:44
-->
<template>
  <div>
        
        

    <Row :gutter="10">
      <Col :span="8">
        <Card dis-hover :padding="10">
          <p slot="title"  style="fontSize: 14px">需求</p>
          <pro-status />
          <div style="height: 200px" ref="echartDemand"></div>
        </Card>
      </Col>
      <Col :span="8">
        <Card dis-hover  :padding='10'>
          <p slot="title" style="fontSize: 14px">任务</p>
          <pro-status />
          <div style="height: 200px" ref="echartTask"></div>
        </Card>
      </Col>
      <Col :span="8">
        <Card dis-hover :padding='10'>
          <p slot="title"  style="fontSize: 14px;" >缺陷</p>
          <pro-status />
          <div style="width: 100%; height: 200px" ref="echartBug"></div>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
import ProStatus from './components/proStatus.vue'
import * as echarts from 'echarts';
import echartDemand from './components/js/echart-demand-config'
import echartTask from './components/js/echart-task-config'
import echartBug from './components/js/echart-bug-config'

export default {
  name: 'IviewProspeedometer',
  components: {ProStatus, },
  data() {
    return {
      
    };
  },

  mounted() {
    this.initEcharts()
  },

  methods: {
    initEcharts() {
      this.initDemandChart()
      this.initTaskChart()
      this.initBugChart()
    },

    // 初始化需求仪表盘图表
    async initDemandChart() {
      this.proDemandChart = echarts.init(this.$refs.echartDemand)
      let getEchartDemand = await this.getDemandDate(echartDemand)
      this.proDemandChart.setOption(getEchartDemand.option, true)
    },
    // 初始化任务仪表盘图表
    async initTaskChart(){
      this.proTaskChart = echarts.init(this.$refs.echartTask)
      let getEchartTask = await this.getTaskData(echartTask)
      this.proTaskChart.setOption(getEchartTask.option, true)
    },
    // 初始化缺陷仪表盘图表
    async initBugChart() {
      this.proBugChart = echarts.init(this.$refs.echartBug)
      let getEchartBug = await this.getBugData(echartBug)
      this.proBugChart.setOption(getEchartBug.option, true)
    },

    // 获取需求图表数据
    getDemandDate(echartDemand) {
      let data1 = [20, 25, 23, 25, 25,30]
      let data2 = [10, 9, 8, 8, 6, 7]
      echartDemand.option.series[0].data = data1;
      echartDemand.option.series[1].data = data2;
      return echartDemand
    },
    getTaskData(echartTask) {
      let data1 = [50, 30, 20, 40, 30,60]
      // let data2 = [10, 9, 8, 8, 6, 7]
      echartTask.option.series[0].data = data1;
      return echartTask
    },
    getBugData(echartBug) {
      let data1 = [6, 3, 7, 3, 6,5]
      let data2 = [4, 4, 8, 1, 6, 7]
      echartBug.option.series[0].data = data1;
      echartBug.option.series[1].data = data2;
      return echartBug
    }

  },
};
</script>

<style lang="less" scoped>
/deep/ .ivu-card-head {
    border-bottom: 1px solid #e8eaec;
    padding: 8px 14px;
    line-height: 1;
}
</style>
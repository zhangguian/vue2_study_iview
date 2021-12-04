<!--
 * @Descripttion: 工作台
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-09-10 20:45:50
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-12-02 22:03:45
-->
<template>
  <div>
    <Row :gutter="14" >
      <Col :span="10">
      <!-- 快捷菜单 -->
        <quitmenu />
      <!-- 项目通知 -->
        <prom-c title="项目通知" icon="icon-xiangmukuzixiangmuyusuanxiadashenqingbiao" >
          <card-item v-for="(item,index) in notifyList" 
          :key="index" :title="item.title"
          :status="item.status"
          :desc="item.desc"
          :date="item.date"
          />
        </prom-c>
        <prom-c title="我的任务" icon="icon-renwuS" >
          <card-item v-for="(item,index) in taskList" 
          :key="index" :title="item.title" 
          :status="item.status" :desc="item.desc"
          />
        </prom-c>
      </Col>

      <Col :span="14">
        <Row :gutter="14">
            <Col :span="12">
              <prom-c title="公司新闻" icon="icon-xinwen">
                <card-item v-for="(item,index) in newsList" 
                :key="index" :title="item.title" 
                :time="item.time" 
                :desc="item.desc"
                :isNot="isNot"/>
              </prom-c>
            </Col>
            <Col :span="12">
              <prom-c title="本月完成指标" icon="icon-xiaoshouzhibiao">
                <charts-pie :value="pieValue" style="height: 250px"/>
              </prom-c>
            </Col>
            <Col :span="24">
              <prom-c title="本月完成指标" icon="icon-xiaoshouzhibiao" :maxHeight="350">
                <charts-pie :value="pieValue" style="height: 350px"/>
              </prom-c>
            </Col>
        </Row>
      </Col>
    </Row>
       
    
  </div>
</template>

<script>
import Quitmenu from './components/quitmenu.vue'
import PromC from './components/promptCard.vue'
import CardItem from './components/cardList.vue'
import { ChartsPie, ChartsBar} from '_c/charts';
export default {
  name: 'IviewWorkbench',

  components: { Quitmenu, PromC, CardItem, ChartsPie },

  directives: {  },

  data() {
    return {
      messageUnreadCount: 13,
      iconColor: '#FF8C00',
      isNot: false,
      isTisk: true,
      notifyList: [
        {title: '好蛋计划', status: 0, desc: '任务需要在 2017-01-12 20:00 前启动'},
        {title: '海岛营销系统', status: 2, desc: '指派竹尔于 2017-01-09 前完成更新并发布'},
        {title: '美景东方计划', status: 0, desc: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务'},
        {title: '费劲系统', status: 3, desc: '任务需要在 2017-01-12 20:00 前启动任务前启动'},
        {title: '费劲系统', status: 1, desc: '任务需要在 2017-01-12 20:00 前启动任务前启动'},
        {title: '费劲系统', status: 1, desc: '任务需要在 2017-01-12 20:00 前启动任务前启动'},
      ],
      taskList: [
        {title: '好蛋计划', status: 0, desc: '用户名称API更改'},
        {title: '海岛营销系统', status: 2, desc: '指派竹尔于 2017-01-09 前完成更新并发布'},
        {title: '美景东方计划', status: 0, desc: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务'},
        {title: '费劲系统', status: 1, desc: '任务需要在 2017-01-12 20:00 前启动任务前启动'},
        {title: '费劲系统', status: 3, desc: '任务需要在 2017-01-12 20:00 前启动任务前启动'},
        {title: '费劲系统', status: 1, desc: '任务需要在 2017-01-12 20:00 前启动任务前启动'},
      ],
      pieValue:[
        { value: 70, name: '已完成' },
        { value: 20, name: '进行中' },
        { value: 10, name: '未完成' },
      ],
      newsList: [
        {title: '国庆放假通知', time: '2021-10-31 11:08:07', desc: '国庆放假是时间为10月1日至10月7日，祝大家假期愉快'},
        {title: '公司行政部团建日期更改', time: '2021-10-30 11:08:07', desc: '行政部团建日期原11月10日提前至11月7日'},
        {title: '祝贺东方计划圆满成功', time: '2021-10-30 09:08:07', desc: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务'},
        {title: '祝贺书店计划正式开建', time: '2021-10-30 10:08:07', desc: '任务需要在 2017-01-12 20:00 前启动任务前启动'},
      ],
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="less" scoped>
/deep/ .ivu-card {
  margin-bottom: 14px;
}
/deep/ .ivu-card-body {
  padding: 6px;
  overflow: auto;
} 
/deep/ .ivu-card-head {
    padding: 7px 14px;
}
</style>
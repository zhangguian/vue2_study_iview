
<template>
  <div>
    <Row :gutter="14">
      <Col :span="24">
        <!-- 快捷菜单 -->
        <quitmenu />
        <prom-c title="我的任务" icon="icon-renwuS">
          <card-item
            v-for="(item, index) in taskList"
            :key="index"
            :title="item.title"
            :status="item.status"
            :desc="item.desc"
            @handle-item="taskDetail(item)"
          />
        </prom-c>
        <!-- 项目通知 -->
        <prom-c title="项目通知" icon="icon-xiangmukuzixiangmuyusuanxiadashenqingbiao">
          <card-item
            v-for="(item, index) in notifyList"
            :key="index"
            :title="item.title"
            :status="item.status"
            :desc="item.desc"
            :date="item.date"
          />
        </prom-c>
      </Col>

      <Col :span="24">
        <prom-c title="本月完成指标" icon="icon-xiaoshouzhibiao" :maxHeight="350">
          <charts-pie :value="pieValue" style="height: 350px" />
        </prom-c>
      </Col>
    </Row>
  </div>
</template>

<script>
import Quitmenu from './components/quitmenu.vue'
import PromC from './components/promptCard.vue'
import CardItem from './components/cardList.vue'
import { ChartsPie, ChartsBar } from '_c/charts';
export default {
  name: 'IviewWorkbench',

  components: { Quitmenu, PromC, CardItem, ChartsPie },

  directives: {},

  data () {
    return {
      messageUnreadCount: 13,
      iconColor: '#FF8C00',
      isNot: false,
      isTisk: true,
      notifyList: [
        { id:'001', title: '好蛋计划', status: 0, desc: '任务需要在 2017-01-12 20:00 前启动' },
        { id:'002', title: '海岛营销系统', status: 2, desc: '指派竹尔于 2017-01-09 前完成更新并发布' },
        { id:'003', title: '美景东方计划', status: 0, desc: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务' },
        { id:'004', title: '费劲系统', status: 3, desc: '任务需要在 2017-01-12 20:00 前启动任务前启动' },
        { id:'005', title: '费劲系统', status: 1, desc: '任务需要在 2017-01-12 20:00 前启动任务前启动' },
        { id:'006', title: '费劲系统', status: 1, desc: '任务需要在 2017-01-12 20:00 前启动任务前启动' },
      ],
      taskList: [
        { id:'001', title: '好蛋计划', status: 0, desc: '用户名称API更改' },
        { id:'002', title: '海岛营销系统', status: 2, desc: '指派竹尔于 2017-01-09 前完成更新并发布' },
        { id:'003', title: '美景东方计划', status: 0, desc: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务' },
        { id:'004', title: '费劲系统', status: 1, desc: '任务需要在 2017-01-12 20:00 前启动任务前启动' },
        { id:'005', title: '费劲系统', status: 3, desc: '任务需要在 2017-01-12 20:00 前启动任务前启动' },
        { id:'006', title: '费劲系统', status: 1, desc: '任务需要在 2017-01-12 20:00 前启动任务前启动' },
      ],
      pieValue: [
        { value: 70, name: '已完成' },
        { value: 20, name: '进行中' },
        { value: 10, name: '未完成' },
      ],
    };
  },

  mounted () {

  },

  methods: {
    taskDetail(item) {
      console.log('item', item)
       this.$router.push({
       path: '/project_management/proDetail_page'
     })
    }
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

<template>
  <div>
    <Spin size="large" fix v-if="loading"></Spin>
    <Row :gutter="10">
      <Col :span="5">
        <Card dis-hover :padding="10" style="height: 640px">
          <div style="border-bottom:1px solid #eee;">
            <Button type="text" icon="md-add" style="padding: 0px" @click="addItera">新建迭代</Button>
          </div>
          <div class="itera-list">
            <div
              class="itera-list-item"
              v-for="(item, index) in iteraList"
              :key="index"
              :class="{ current: index === iteraCurrentIndex }"
              @click="changeItera(index)"
            >
              <div class="itera-list-item-head">
                <span style="flex:2" class="omit-inline">{{ item.iteration }}</span>
                <span style="flex:1; text-align: right;">
                  <Tag color="green">{{ item.status }}</Tag>
                </span>
              </div>
              <div class="itera-list-item-center">
                <span>{{ item.date }}</span>
                <span>{{ item.percent }}%</span>
              </div>
              <Progress :percent="item.percent" :stroke-width="5" hide-info />
            </div>
          </div>
        </Card>
      </Col>

      <Col :span="19">
        <div>
          <Tabs v-model="tab">
            <TabPane label="需求" icon="md-locate" name="ProDemand"></TabPane>
            <TabPane label="任务" icon="md-paper" name="ProTask"></TabPane>
            <TabPane label="缺陷" icon="ios-bug" name="ProBug"></TabPane>
            <div slot="extra" style="margin: 0px 10px;font-size: 16px">
              <Button type="primary" ghost>V1.0 订单系统优化</Button>
            </div>
          </Tabs>
          <component :is="tab"></component>
        </div>
      </Col>
    </Row>

    <!-- 新建迭代 -->
    <Modal v-model="addIteraShow" title="新建迭代" width="620px">
      <div class="add-alert-box" style>
        <div class="add-alert-boder" style></div>
        <div class="add-alert-info" style>
          <p style>迭代计划周期对应迭代「未开始」和「已完成」阶段的计划开始日期与计划完成日期，设置日期可以帮助您更好的规划迭代进度。</p>
        </div>
      </div>
      <div style="margin: 30px 0px">
        <form-create v-model="formObj1" :rule="rule1" :option="option"></form-create>
      </div>
    </Modal>
  </div>
</template>

<script>
import ProDemand from './components/proDemand.vue'
import ProTask from './components/proTask.vue'
import ProBug from './components/proBug.vue'
export default {
  name: 'IviewTest',
  components: { ProDemand, ProTask, ProBug },
  props: {
    proId: String
  },
  data () {
    return {
      tab: this.$route.query['tab'] || 'ProDemand',
      addIteraShow: false,
      iteraCurrentIndex: 0,
      iteraList: [
        { iteration: 'V1.0 订单系统优化', status: '开发中', date: '11月16日-11月29日', percent: 85 },
        { iteration: 'V1.1 订单系统优化', status: '未开始', date: '11月16日-11月29日', percent: 0 },
        { iteration: 'V1.2 订单系统优化', status: '未开始', date: '11月16日-11月29日', percent: 0 },
      ],
      formObj1: {},
      formObj1: {},
      rule1: mock1(),
      option: {
        form: { labelWidth: 80 },
        submitBtn: false,
        resetBtn: false,
      },
      loading: false
    };
  },

  mounted () {
    console.log('first', this.proId)

  },

  methods: {
    changeItera (index) {
      // alert('test')
      this.iteraCurrentIndex = index
    },
    addItera () {
      this.addIteraShow = true
    }
  },
};
function mock1 () {
  return [
    {
      type: "input", title: "迭代名称", field: "goods_dame", value: "", col: { span: 24 },
      props: { "type": "text", "clearable": true, "placeholder": "迭代名称", "required": false, "readonly": true },
      validate: [{ required: true, message: '请输入迭代名称', },],
    },
    {
      type: "select",
      field: "catS_id",
      title: "所属项目",
      value: ["0"],
      options: [
        { "value": "0", "label": "无需审批", "disabled": false },
        { "value": "104", "label": "周丽莎", "disabled": false },
        { "value": "105", "label": "老司机", "disabled": false },
      ],
      props: {
        multiple: false,
        filterable: true,
        placeholder: "请选择",
        notFoundText: "无匹配数据",
        placement: "bottom",
      },
      validate: [{ required: true, message: '请选择审批人', },],
    },
    {
      type: "select",
      field: "catS_sd",
      title: "负责人",
      value: ["0"],
      options: [
        { "value": "0", "label": "无需审批", "disabled": false },
        { "value": "104", "label": "周丽莎", "disabled": false },
        { "value": "105", "label": "老司机", "disabled": false },
      ],
      props: {
        multiple: true,
        filterable: true,
        placeholder: "请选择",
        notFoundText: "无匹配数据",
        placement: "bottom",
      },
      validate: [{ required: true, message: '请选择审批人', },],
    },
    {
      type: "DatePicker",
      field: "section_day2",
      title: "开始日期",
      value: '2018-02-20',
      col: { span: 12 },
      props: {
        "type": "date",
        "format": "yyyy-MM-dd HH:mm:ss",
        "placeholder": "请选择活动日期",
      },
      validate: [{ required: true, message: '请选择审批人', },],
    },
    {
      type: "DatePicker",
      field: "section_dsy2",
      title: "完成日期",
      col: { span: 12 },
      value: '2018-02-20',
      props: {
        "type": "date",
        "format": "yyyy-MM-dd HH:mm:ss",
        "placeholder": "请选择活动日期",
        "width": '264px'
      },
      validate: [{ required: true, message: '请选择审批人', },],
    },
  ]

}
</script>

<style lang="less" scoped>
/deep/ .ivu-menu-horizontal {
  height: 30px;
  line-height: 30px;
}
// /deep/ .ivu-date-picker {
//   width: 282px
// }
.itera-list {
  margin: 6px 0px;
  .itera-list-item {
    border-radius: 2px;
    height: 85px;
    width: 100%;
    padding: 10px 1px 5px 3px;
    transition: all 0.3s;
    cursor: pointer;
    .itera-list-item-head {
      height: 26px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .itera-list-item-center {
      font-size: 12px;
      padding: 5px 0px;
      display: flex;
      justify-content: space-between;
    }
  }
}
.current {
  background-color: #eaf3fc;
}
.add-alert-box {
  // padding: 20px;
  height: 66px;
  display: flex;
  .add-alert-boder {
    width: 4px;
    background-color: #338fe5;
    height: 100%;
    border-radius: 3px 0 0 3px;
  }
  .add-alert-info {
    border-bottom: 1px solid #dedede;
    border-radius: 0 3px 3px 0;
    border-right: 1px solid #dedede;
    border-top: 1px solid #dedede;
    display: flex;
    flex: auto;
    padding: 10px;
    p {
      margin: 0px 20px;
      font-size: 14px;
      line-height: 22px;
    }
  }
}
</style>
<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-11-05 12:36:07
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-11-06 22:27:13
-->
<template>
  <div>
    <a-table :data="data" :config="config" :selected.sync="selectedData">
      <template v-slot:other >
        <i-button type="primary" icon="md-add" style="margin: 10px 0px" @click="addApply">新增</i-button>
      </template>
    </a-table> 
    <Modal v-model="applyShow" title="新增出差申请单" width="900">
      <form-print :applyContent="applyContent"/>
    </Modal>
  </div>
</template>

<script>
import ATable from '_c/table/a-table.vue'
import FormPrint from '../components/Form/applyEvectionForm.vue'
const statusMap = {
    0: {
      status: 'processing',
      text: '处理中'
    },
    1: {
      status: 'success',
      text: '已审批'
    },
    2: {
      status: 'success',
      text: '已上线'
    },
    3: {
      status: 'error',
      text: '异常'
  }
}
export default {
  name: 'IviewApplyEvection',
  components: {ATable, FormPrint},
  data() {
    return {
      config: {
        form: {
          rule: [
            {type: 'input', title: '出差人', field: 'applyReason', col: {span:8},props:{placeholder:"请输入请假原因", clearable: true,}},
            {type: 'div', 
                children: [
                  {type: 'i-button', field: 'search', props: {type: 'primary', icon:'ios-search',size:'default'}, children: ['查询'], emit: ['click'],col: {
                    span:8,push: 16
                },},
                ]
            },
            {type: 'div',
                children: [
                  {type: 'i-button', field: 'clear', props: {type: 'info',ghost: 'ghost',icon:'ios-undo',size:'default'}, children: ['清空'], emit: ['click'], col:{
                    span:12,push: 24
              },}
                ]
            },
          ],
          option: {
            form: {labelWidth: 100},
            submitBtn: false,
            resetBtn: false,
          }
        },
        table: {
          columns: [
            {type: 'selection', align: 'center', width: 60, },
            {title: '出差人', key: 'name', align: 'center', minWidth: 50,},
            {title: '部门名称', key: 'department', align: 'center', minWidth: 50,tooltip:true,},
            {title: '项目名称', key: 'project', align: 'center', minWidth: 70,},
            {title: '目的地', key: 'destination', align: 'center', minWidth: 120,},
            {title: '出发时间', key: 'startTime', align: 'center', minWidth: 120,},
            {title: '出差天数', key: 'day', align: 'center', minWidth: 50,},
            {title: '出行工具', key: 'TravelTool', align: 'center', minWidth: 50,},
            {title: '流程状态', key: 'status', minWidth: 50,
              render: (h, data) =>
                <div>
                  <span><Badge status= {this.statusType(data.row.status)}></Badge>{this.statusText(data.row.status)}</span>
                </div>
            },
            {title: '操作栏', key: 'action', minWidth: 80, align: 'center',
              render: (h, data) => 
                <template style="width: 100%; display: flex;justify-content: space-evenly;">
                  <Dropdown>
                    <a href="javascript:void(0)">更多<Icon type="ios-arrow-down"></Icon></a>
                    <DropdownMenu slot="list">
                      <DropdownItem>详情</DropdownItem>
                      <DropdownItem>审批进度</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </template>
            },
          ],
           btns: [
                // {text: '新增', cb: (obj) => this.test(obj)},
            ],
        },
      },
      selectedData: [],
      data: [
        { name: '张闯', department: '研发部', project: '飞天计划', destination: '天津市/市辖区/河西区', startTime: '2021-11-13 16:21:00',day: '3', TravelTool: '飞机',status: 0,},
        { name: '张闯', department: '研发部', project: '飞天计划', destination: '天津市/市辖区/河西区', startTime: '2021-11-13 16:21:00',day: '3', TravelTool: '飞机',status: 0,},
        { name: '张闯', department: '研发部', project: '飞天计划', destination: '天津市/市辖区/河西区', startTime: '2021-11-13 16:21:00',day: '3', TravelTool: '飞机',status: 1,},
        { name: '张闯', department: '研发部', project: '飞天计划', destination: '天津市/市辖区/河西区', startTime: '2021-11-13 16:21:00',day: '3', TravelTool: '飞机',status: 0,},
        { name: '张闯', department: '研发部', project: '飞天计划', destination: '天津市/市辖区/河西区', startTime: '2021-11-13 16:21:00',day: '3', TravelTool: '飞机',status: 1,},
        { name: '张闯', department: '研发部', project: '飞天计划', destination: '天津市/市辖区/河西区', startTime: '2021-11-13 16:21:00',day: '3', TravelTool: '飞机',status: 1,},
        { name: '张闯', department: '研发部', project: '飞天计划', destination: '天津市/市辖区/河西区', startTime: '2021-11-13 16:21:00',day: '3', TravelTool: '飞机',status: 1,},
        { name: '张闯', department: '研发部', project: '飞天计划', destination: '天津市/市辖区/河西区', startTime: '2021-11-13 16:21:00',day: '3', TravelTool: '飞机',status: 1,},
        { name: '张闯', department: '研发部', project: '飞天计划', destination: '天津市/市辖区/河西区', startTime: '2021-11-13 16:21:00',day: '3', TravelTool: '飞机',status: 1,},
        { name: '张闯', department: '研发部', project: '飞天计划', destination: '天津市/市辖区/河西区', startTime: '2021-11-13 16:21:00',day: '3', TravelTool: '飞机',status: 1,},
        { name: '张闯', department: '研发部', project: '飞天计划', destination: '天津市/市辖区/河西区', startTime: '2021-11-13 16:21:00',day: '3', TravelTool: '飞机',status: 1,},
        { name: '张闯', department: '研发部', project: '飞天计划', destination: '天津市/市辖区/河西区', startTime: '2021-11-13 16:21:00',day: '3', TravelTool: '飞机',status: 1,},
        { name: '张闯', department: '研发部', project: '飞天计划', destination: '天津市/市辖区/河西区', startTime: '2021-11-13 16:21:00',day: '3', TravelTool: '飞机',status: 1,},
        { name: '张闯', department: '研发部', project: '飞天计划', destination: '天津市/市辖区/河西区', startTime: '2021-11-13 16:21:00',day: '3', TravelTool: '飞机',status: 1,},
        { name: '张闯', department: '研发部', project: '飞天计划', destination: '天津市/市辖区/河西区', startTime: '2021-11-13 16:21:00',day: '3', TravelTool: '飞机',status: 1,},
        { name: '张闯', department: '研发部', project: '飞天计划', destination: '天津市/市辖区/河西区', startTime: '2021-11-13 16:21:00',day: '3', TravelTool: '飞机',status: 1,}
      ],
      applyShow: false,
      applyContent: {
        id: '12133131',
        applicant: '这是你',
        department: '行政部',
        position: 'HR',
        origin: '',
        address: '',
        startDate: '',
        endDate: '',
        pay: '0',
        amount: '',
        route: '',
        desc: '',
      }
    };
  },

  mounted() {
    
  },

  methods: {
    addApply() {
      this.applyShow = true
    },
    statusType(type) {
      return statusMap[type].status
    },
    statusText (type) {
        return statusMap[type].text
      },
    test(obj) {
      console.log('obj :>> ', obj);
    }
  },
};
</script>

<style lang="less" scoped>
.apply-form {
  text-align: center;
  // display: flex;
  // justify-content: center;
  // flex-direction: column;
  .title {
    margin-top: 1px;
    font-weight: 700;
    text-align: center;
    display: block;
    color: #000;
    font-size: 24px;
  }
  .table {
    width: 100%;
    font-size: 12px;
    text-align: center;
    background-color: #fff;
    border-collapse: collapse;
    .firstTr {
      width: 16%;
    }
  }
}
.form-item {
  line-height: 55px;
  margin: 5px 0px;
}
 /deep/ .ivu-form-item {
    // margin-bottom: 24px;
    vertical-align: top;
    zoom: 1;
     line-height: 55px; 
    margin: 5px 0px;
}
</style>
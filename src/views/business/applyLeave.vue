<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-11-05 08:53:30
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-12-02 18:47:49
-->
<template>
  <div>
    <a-table action="business/getApplyleaveList" :config="config" size="small" :selected.sync="selectedData">
      <template v-slot:other >
        <i-button type="primary" icon="md-add" style="margin: 10px 0px" @click="addApply">新增</i-button>
      </template>
    </a-table> 
    <Modal v-model="applyShow" title="新增请假申请单" width="900">
      <form-print :applyContent="applyContent" />
    </Modal>
    <Modal v-model="detailsShow" title="请假申请单" width="900">
      <form-print :applyContent="applyDetails" :readonly="readonly"/>
    </Modal>
  </div>
</template>

<script>
import ATable from '_c/table/a-table.vue'
import FormPrint from '../components/Form/applyLeaveForm.vue'
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
  name: 'IviewApplyLeave',
  components: {ATable, FormPrint},
  data() {
    return {
      readonly: true,
      config: {
        form: {
          rule: [
            {type: 'input', title: '名称', field: 'name', col: {span:8},props:{placeholder:"请输入名称", clearable: true,}},
            {type: 'input', title: '申请日期', field: 'applyDate', col: {span:8},props:{placeholder:"请输入申请日期", clearable: true,}},
            {type: 'input', title: '职务', field: 'position', col: {span:8},props:{placeholder:"请输入职务", clearable: true,}},
            {type: 'input', title: '请假类别', field: 'applyType', col: {span:8},props:{placeholder:"请输入请假类别", clearable: true,}},
            {type: 'input', title: '请假原因', field: 'applyReason', col: {span:8},props:{placeholder:"请输入请假原因", clearable: true,}},
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
            {title: '申请编号', key: 'id', align: 'center', minWidth: 120,},
            {title: '名称', key: 'applicant', align: 'center', minWidth: 60,tooltip:true,},
            {title: '申请日期', key: 'applyDate', align: 'center', minWidth: 70,},
            {title: '请假类别', key: 'applyType', align: 'center', minWidth: 50,},
            {title: '请假开始时间', key: 'startDate', align: 'center', minWidth: 120,},
            {title: '请假结束时间', key: 'endDate', align: 'center', minWidth: 120,},
            {title: '流程状态', key: 'status', minWidth: 60,
              render: (h, data) =>
                <div>
                  <span><Badge status= {this.statusType(data.row.status)}></Badge>{this.statusText(data.row.status)}</span>
                </div>
            },
            {title: '操作栏', key: 'action', minWidth: 100, align: 'center',
              render: (h, data) => 
                <template style="width: 100%; display: flex;justify-content: space-evenly;">
                  <Dropdown onOn-click={(val) => this.action(val, data)}>
                    <a href="javascript:void(0)">更多<Icon type="ios-arrow-down"></Icon></a>
                    <DropdownMenu slot="list" >
                      <DropdownItem name="details">详情</DropdownItem>
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
        {id: '1000000817473894', applicant: '张闯', department: '行政部', position: 'HR', applyDate: '2021-10-10', applyType: '0', startDate: '2021-11-06 09:40:49', endDate: '2021-11-13 16:21:00', reason:'家里有事需要请假', phone:'13435677859', principal:'李烈', status: 0,},
        {id: '1000000004090937', applicant: '张例', department: '行政部', position: 'HR', applyDate: '2021-10-10', applyType: '0', startDate: '2021-11-06 09:40:49', endDate: '2021-11-13 16:21:00', reason:'家里有事需要请假', phone:'13435677859', principal:'李烈', status: 0,},
        {id: '1000000306200045', applicant: '张闯', department: '行政部', position: 'HR', applyDate: '2021-10-10', applyType: '0', startDate: '2021-11-06 09:40:49', endDate: '2021-11-13 16:21:00', reason:'家里有事需要请假', phone:'13435677859', principal:'李烈', status: 1,},
        {id: '1000002068180211', applicant: '张闯', department: '行政部', position: 'HR', applyDate: '2021-10-10', applyType: '0', startDate: '2021-11-06 09:40:49', endDate: '2021-11-13 16:21:00', reason:'家里有事需要请假', phone:'13435677859', principal:'李烈', status: 0,},
        {id: '1000000071351323', applicant: '张闯', department: '行政部', position: 'HR', applyDate: '2021-10-10', applyType: '0', startDate: '2021-11-06 09:40:49', endDate: '2021-11-13 16:21:00', reason:'家里有事需要请假', phone:'13435677859', principal:'李烈', status: 1,},
        {id: '1000002099899749', applicant: '张闯', department: '行政部', position: 'HR', applyDate: '2021-10-10', applyType: '0', startDate: '2021-11-06 09:40:49', endDate: '2021-11-13 16:21:00', reason:'家里有事需要请假', phone:'13435677859', principal:'李烈', status: 1,},
        {id: '1000001932239144', applicant: '张闯', department: '行政部', position: 'HR', applyDate: '2021-10-10', applyType: '0', startDate: '2021-11-06 09:40:49', endDate: '2021-11-13 16:21:00', reason:'家里有事需要请假', phone:'13435677859', principal:'李烈', status: 1,},
        {id: '1000001639785605', applicant: '张闯', department: '行政部', position: 'HR', applyDate: '2021-10-10', applyType: '0', startDate: '2021-11-06 09:40:49', endDate: '2021-11-13 16:21:00', reason:'家里有事需要请假', phone:'13435677859', principal:'李烈', status: 1,},
        {id: '1000000938054985', applicant: '张闯', department: '行政部', position: 'HR', applyDate: '2021-09-10', applyType: '0', startDate: '2021-11-06 09:40:49', endDate: '2021-11-13 16:21:00', reason:'家里有事需要请假', phone:'13435677859', principal:'李烈', status: 1,},
        {id: '1000000952010167', applicant: '张闯', department: '行政部', position: 'HR', applyDate: '2021-06-10', applyType: '0', startDate: '2021-11-06 09:40:49', endDate: '2021-11-13 16:21:00', reason:'家里有事需要请假', phone:'13435677859', principal:'李烈', status: 1,},
        {id: '1000001812678381', applicant: '张闯', department: '行政部', position: 'HR', applyDate: '2021-10-10', applyType: '0', startDate: '2021-11-06 09:40:49', endDate: '2021-11-13 16:21:00', reason:'家里有事需要请假', phone:'13435677859', principal:'李烈', status: 1,},
        {id: '1000000505501496', applicant: '张闯', department: '行政部', position: 'HR', applyDate: '2021-10-10', applyType: '0', startDate: '2021-11-06 09:40:49', endDate: '2021-11-13 16:21:00', reason:'家里有事需要请假', phone:'13435677859', principal:'李烈', status: 1,},
        {id: '1000001806357366', applicant: '张闯', department: '行政部', position: 'HR', applyDate: '2021-10-10', applyType: '0', startDate: '2021-11-06 09:40:49', endDate: '2021-11-13 16:21:00', reason:'家里有事需要请假', phone:'13435677859', principal:'李烈', status: 1,},
        {id: '1000001623789801', applicant: '张闯', department: '行政部', position: 'HR', applyDate: '2021-10-10', applyType: '0', startDate: '2021-11-06 09:40:49', endDate: '2021-11-13 16:21:00', reason:'家里有事需要请假', phone:'13435677859', principal:'李烈', status: 1,},
        {id: '1000001853649225', applicant: '张闯', department: '行政部', position: 'HR', applyDate: '2021-10-10', applyType: '0', startDate: '2021-11-06 09:40:49', endDate: '2021-11-13 16:21:00', reason:'家里有事需要请假', phone:'13435677859', principal:'李烈', status: 1,},
        {id: '1000001932567445', applicant: '张闯', department: '行政部', position: 'HR', applyDate: '2021-10-10', applyType: '0', startDate: '2021-11-06 09:40:49', endDate: '2021-11-13 16:21:00', reason:'家里有事需要请假', phone:'13435677859', principal:'李烈', status: 1,},
      ],
      applyShow: false,
      detailsShow: false,
      applyContent: {
        id: '12133131',
        applicant: '',
        department: '',
        position: '',
        applyType: '0',
        reason: '',
        startDate: '',
        endDate: '',
        phone: '',
        principal: ''
      },
      applyDetails: {},
    };
  },

  mounted() {
    this.test1()
  },

  methods: {
    async test1() {
     const {data} = await this.$store.dispatch('business/getApplyleaveList',{})
      console.log('data :>> ', data);
    },
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
    },
    action(name, {row}) {
      console.log('name :>> ', name);
      if(name === 'details') {
        // this.detailsShow = true
        // this.applyDetails = row
        console.log('row :>> ', row);
      }
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
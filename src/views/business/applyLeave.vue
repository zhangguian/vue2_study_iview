
<template>
  <div>
    <a-table ref="atable" action="business/getApplyleaveList"  :config="config" :selected.sync="selectedData">
      <template #btn >
        <i-button type="primary" icon="md-add" style="margin: 10px 0px" @click="addApply">新增</i-button>
      </template>
    </a-table> 
    <Modal v-model="applyShow" title="新增请假申请单" width="900" footer-hide @on-visible-change="addApplyMoal">
      <form-print ref="addapplyform" :applyContent="applyContent" @submit-apply="submitApply" @cancel="cancel" />
    </Modal>
    <Modal v-model="detailsShow" title="请假申请单" width="900">
      <form-print :applyContent="applyDetails" :readonly="readonly" :detailShow="false"/>
    </Modal>
  </div>
</template>

<script>
import ATable from '_c/table/a-table.vue'
import FormPrint from '_c/form/applyLeaveForm.vue'
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
            {type: 'input', title: '申请人', field: 'applicant', col: {span:8},props:{placeholder:"请输入名称", clearable: true,}},
            {type: 'input', title: '申请日期', field: 'applyDate', col: {span:8},props:{placeholder:"请输入申请日期", clearable: true,}},
            {type: 'input', title: '请假类别', field: 'applyType', col: {span:8},props:{placeholder:"请输入请假类别", clearable: true,}},
            {type: 'input', title: '审批状态', field: 'applyStatus', col: {span:8},props:{placeholder:"请输入请假原因", clearable: true,}},
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
            {title: '申请人', key: 'applicant', align: 'center', minWidth: 60,tooltip:true,},
            {title: '请假类别', key: 'applyType', align: 'center', minWidth: 50,},
            {title: '申请日期', key: 'applyDate', align: 'center', minWidth: 70,},
            {title: '请假开始时间', key: 'startDate', align: 'center', minWidth: 120,sortable: true},
            {title: '请假结束时间', key: 'endDate', align: 'center', minWidth: 120,sortable: true},
            {title: '审批状态', key: 'applyStatus', minWidth: 60,
              filters: [],
              render: (h, data) =>
                <div>
                  <span><Badge status= {this.statusType(data.row.applyStatus)}></Badge>{this.statusText(data.row.applyStatus)}</span>
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
                      <DropdownItem name="deleOne">删除</DropdownItem>
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
      data: [],
      applyShow: false,
      detailsShow: false,
      applyContent: {
        id: '',
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

    async action(name, {row}) {
      if(name === 'details') {
        this.detailsShow = true
        this.applyDetails = row
      } else if (name === 'deleOne') {
        let {data, err} = await this.$store.dispatch('business/deleOneApply', {id: row.id})
        console.log('data', data);
        this.$refs.atable.getData()
      }
    },
    async submitApply(obj) {
      let {data, err} = await this.$store.dispatch('business/addApply', {...obj})
      // debugger
      this.applyShow = false
      this.$Message.success(data.message)

    },
    cancel(bool) {
      this.applyShow = bool
    },
    addApplyMoal(bool) {
      !bool && this.$refs.addapplyform.$refs['applyForm'].resetFields()
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
</style>
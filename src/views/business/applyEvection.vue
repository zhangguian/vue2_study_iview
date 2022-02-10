
<template>
  <div>
    <a-table  ref="atable" action="business/getEvectionList" :config="config" :selected.sync="selectedData">
      <template #btn >
        <i-button type="primary" icon="md-add" style="margin: 10px 0px" @click="addApply">新增</i-button>
      </template>
    </a-table> 
    <Modal v-model="applyShow" title="新增出差申请单" width="900"  @on-visible-change="addApplyMoal" footer-hide>
      <form-print ref="addapplyform" :applyContent="applyContent"  @submit-apply="submitApply" @cancel="cancel"/>
    </Modal>

    <Modal v-model="detailsShow" title="出差申请单" width="900">
      <form-print :applyContent="applyDetails" :readonly="true" :detailShow="false"/>
    </Modal>
  </div>
</template>

<script>
import ATable from '_c/table/a-table.vue'
import FormPrint from '_c/form/applyEvectionForm.vue'
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
            {type: 'input', title: '出差人', field: 'applicant', col: {span:8},props:{placeholder:"请输入请假原因", clearable: true,}},
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
            {title: '出差人', key: 'applicant', align: 'center', minWidth: 50,},
            {title: '出差事由', key: 'reason', align: 'center', minWidth: 120,tooltip:true,},
            {title: '目的地', key: 'address', align: 'center', minWidth: 120,},
            {title: '出发时间', key: 'startDate', align: 'center', minWidth: 120,},
            {title: '出差天数', key: 'day', align: 'center', minWidth: 50,},
            {title: '出行工具', key: 'TravelTool', align: 'center', minWidth: 50,},
            {title: '流程状态', key: 'applyStatus', minWidth: 50,
              render: (h, data) =>
                <div>
                  <span><Badge status= {this.statusType(data.row.applyStatus)}></Badge>{this.statusText(data.row.applyStatus)}</span>
                </div>
            },
            {title: '操作栏', key: 'action', minWidth: 80, align: 'center',
              render: (h, data) => 
                <template style="width: 100%; display: flex;justify-content: space-evenly;">
                  <Dropdown onOn-click={(val) => this.action(val, data)}>
                    <a href="javascript:void(0)">更多<Icon type="ios-arrow-down"></Icon></a>
                    <DropdownMenu slot="list">
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
        origin: '',
        address: '',
        startDate: '',
        endDate: '',
        pay: '0',
        amount: '',
        route: '',
        desc: '',
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
        this.$Modal.confirm({
          title: '确认操作',
          content: '你确认要删除吗？',
          onOk: async () => {
            let {data, err} = await this.$store.dispatch('business/deleOneEvectionApply', {id: row.id})
            this.$refs.atable.getData()
          }
        })
      }
    },
    async submitApply(obj) {
      let {data, err} = await this.$store.dispatch('business/addEvectionApply', {...obj})
       console.log('data', data);
      this.applyShow = false
      this.$Message.success(data.message)
      this.$refs.atable.getData()
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
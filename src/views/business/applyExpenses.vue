
<template>
  <div>
    <a-table action="business/getApplyleaveList" :config="config" size="small" :selected.sync="selectedData">
      <template #btn >
        <i-button type="primary" icon="md-add" style="margin: 10px 0px" @click="addApply">新增</i-button>
      </template>
    </a-table> 
    <Modal v-model="applyShow" title="新增报销申请单" width="900">
      <form-print :applyContent="applyContent"/>
      <Tabs value="name1">
        <TabPane label="上传附件" name="name1">
          <img-upload />
        </TabPane>
      </Tabs>
    </Modal>
  </div>
</template>

<script>
import ATable from '_c/table/a-table.vue'
import FormPrint from '_c/form/applyExpensesForm.vue'
import ImgUpload from './components/imgUpload.vue'
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
  name: 'IviewApplyExpense',
  components: {ATable, FormPrint, ImgUpload},
  data() {
    return {
      config: {
        form: {
          rule: [
            {type: 'input', title: '费用项目', field: 'project', col: {span:8},props:{placeholder:"请输入费用项目", clearable: true,}},
            {type: 'input', title: '费用类别', field: 'type', col: {span:8},props:{placeholder:"请输入费用类别", clearable: true,}},
            {type: 'input', title: '消费日期', field: 'date', col: {span:8},props:{placeholder:"请输入消费日期", clearable: true,}},
            {type: 'input', title: '申请时间', field: 'applyTime', col: {span:8},props:{placeholder:"请输入申请时间", clearable: true,}},
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
            // {title: '序号', type: 'index', align: 'center', minWidth: 50,},
            {title: '费用项目', key: 'project', align: 'center', minWidth: 50,tooltip:true,},
            {title: '费用类别', key: 'type', align: 'center', minWidth: 50,},
            {title: '消费日期', key: 'date', align: 'center', minWidth: 120,sortable: true},
            {title: '申请时间', key: 'applyTime', align: 'center', minWidth: 120,sortable: true},
            {title: '内容', key: 'content', align: 'center', minWidth: 140,},
            {title: '金额', key: 'total', align: 'center', minWidth: 50,},
            {title: '流程状态', key: 'status', minWidth: 50,
              render: (h, data) =>
                <div>
                  {/*<span><Badge status= {this.statusType(data.row.status)}></Badge>{this.statusText(data.row.status)}</span> */}
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
        { project: '飞天计划', type: '差旅', date: '2021-11-13 16:21:00',applyTime: '2021-11-15 16:21:00', content: '2021-11-13 赴北京参与飞天计划项目架构搭建',total: 300, status: 0,},
        { project: '飞天计划', type: '差旅', date: '2021-11-13 16:21:00',applyTime: '2021-11-15 16:21:00', content: '2021-11-13 赴北京参与飞天计划项目架构搭建',total: 300, status: 0,},
        { project: '飞天计划', type: '差旅', date: '2021-11-13 16:21:00',applyTime: '2021-11-15 16:21:00', content: '2021-11-13 赴北京参与飞天计划项目架构搭建',total: 300, status: 1,},
        { project: '飞天计划', type: '差旅', date: '2021-11-13 16:21:00',applyTime: '2021-11-15 16:21:00', content: '2021-11-13 赴北京参与飞天计划项目架构搭建',total: 300, status: 0,},
        { project: '飞天计划', type: '差旅', date: '2021-11-13 16:21:00',applyTime: '2021-11-15 16:21:00', content: '2021-11-13 赴北京参与飞天计划项目架构搭建',total: 300, status: 1,},
        { project: '飞天计划', type: '差旅', date: '2021-11-13 16:21:00',applyTime: '2021-11-15 16:21:00', content: '2021-11-13 赴北京参与飞天计划项目架构搭建',total: 300, status: 1,},
        { project: '飞天计划', type: '差旅', date: '2021-11-13 16:21:00',applyTime: '2021-11-15 16:21:00', content: '2021-11-13 赴北京参与飞天计划项目架构搭建',total: 300, status: 1,},
        { project: '飞天计划', type: '差旅', date: '2021-11-13 16:21:00',applyTime: '2021-11-15 16:21:00', content: '2021-11-13 赴北京参与飞天计划项目架构搭建',total: 300, status: 1,},
        { project: '飞天计划', type: '差旅', date: '2021-11-13 16:21:00',applyTime: '2021-11-15 16:21:00', content: '2021-11-13 赴北京参与飞天计划项目架构搭建',total: 300, status: 1,},
        { project: '飞天计划', type: '差旅', date: '2021-11-13 16:21:00',applyTime: '2021-11-15 16:21:00', content: '2021-11-13 赴北京参与飞天计划项目架构搭建',total: 300, status: 1,},
        { project: '飞天计划', type: '差旅', date: '2021-11-13 16:21:00',applyTime: '2021-11-15 16:21:00', content: '2021-11-13 赴北京参与飞天计划项目架构搭建',total: 300, status: 1,},
       
      ],
      applyShow: false,
      applyContent: {
        id: '12133131',
        applicant: '这是你',
        department: '行政部',
        position: 'HR',
        applyType: '0',
        reason: '',
        startDate: '',
        endDate: '',
        phone: '',
        principal: ''
      },

    
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
    },

   
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
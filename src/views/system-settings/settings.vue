
<template>
  <div>
    <a-table
      action="business/getApplyleaveList"
      :config="config"
      size="small"
      :selected.sync="selectedData"
    >
      <template #btn>
        <i-button type="primary" icon="md-add" style="margin: 10px 0px" @click="addApply">新增</i-button>
      </template>
    </a-table>
    <Modal v-model="applyShow" title="新增请假申请单" width="900"></Modal>
    <Modal v-model="detailsShow" title="请假申请单" width="900"></Modal>
  </div>
</template>

<script>
import ATable from '_c/table/a-table.vue'

export default {
  name: 'IviewSetting',
  components: { ATable },
  data () {
    return {
      readonly: true,
      config: {
        form: {
          rule: [
            { type: 'input', title: '用户账号', field: 'userCode', col: { span: 6 }, props: { placeholder: "请输入" } },
            { type: 'input', title: '用户名称', field: 'userName', col: { span: 6 }, props: { placeholder: "请输入" } },
            {
              type: 'select',
              title: '状态',
              field: 'state',
              col: {
                span: 6,
              },
              options: [
                { "value": 0, "label": "启用", "disabled": false },
                { "value": 1, "label": "禁用", "disabled": false },
              ],
            },
            {
              type: 'div',
              children: [
                {
                  type: 'i-button', field: 'search', props: { type: 'primary', icon: 'ios-search', size: 'default' }, children: ['查询'], emit: ['click'], col: {
                    span: 8, push: 16
                  },
                },
              ]
            },
            {
              type: 'div',
              children: [
                {
                  type: 'i-button', field: 'clear', props: { type: 'info', ghost: 'ghost', icon: 'ios-undo', size: 'default' }, children: ['清空'], emit: ['click'], col: {
                    span: 12, push: 24
                  },
                }
              ]
            },
          ],
          option: {
            form: { labelWidth: 100 },
            submitBtn: false,
            resetBtn: false,
          }
        },
        table: {
          columns: [
            { type: 'selection', align: 'center', width: 60, },
            { title: '用户账号', key: 'userCode', align: 'center', minWidth: 80 },
            { title: '用户名称', key: 'userName', align: 'center', minWidth: 80 },
            { title: '邮箱地址', key: 'email', align: 'center', minWidth: 100 },
            { title: '联系方式', key: 'mobile', align: 'center', minWidth: 100 },
            { title: '员工账号', key: 'employeeCode', align: 'center', minWidth: 100 },
            { title: '员工工号', key: 'employeeSn', align: 'center', minWidth: 100 },
            { title: '员工手机号', key: 'employeePhone', align: 'center', minWidth: 100 },
            { title: '启用', key: 'state', align: 'center', minWidth: 50, 
              render: (h, params) => <div>
                <i-switch size="small"></i-switch>
              </div> },
            {
              title: '操作栏', key: 'action', minWidth: 180, align: 'center',
              render: (h, data) =>
                <div style="display: flex;justify-content: space-between;">
                  <i-button type="primary"  size="small" onClick={() => this.onUserPower(data)}>角色授权</i-button>
                  <i-button type="primary"  size="small" onClick={() => this.onDataPower(data)}>数据授权</i-button>
                </div>
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

  mounted () {
    this.test1()
  },

  methods: {
    async test1 () {
      const { data } = await this.$store.dispatch('business/getApplyleaveList', {})
    },
    addApply () {
      this.applyShow = true
    },
    action (name, { row }) {
      if (name === 'details') {
        this.detailsShow = true
        this.applyDetails = row
      }
    },
    onUserPower(data) {
      console.log(1234)
    },
    onDataPower(data) {
      console.log(234)
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
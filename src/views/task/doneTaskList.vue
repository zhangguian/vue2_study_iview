
<template>
  <div>
    <a-table :data="data" :config="config" :selected.sync="selectedData" size="small"></a-table>
    <!-- <span>{{status | statusType}}</span> -->
  </div>
</template>

<script>
  
import ATable from '_c/table/a-table.vue'
const statusMap = {
    0: {
      status: 'default',
      text: '关闭'
    },
    1: {
      status: 'processing',
      text: '运行中'
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
  name: 'IviewDdd',

  components: {ATable  },

  directives: {  },

  data() {
    return {
      config: {
        form: {
          rule: [
            {type: 'input', title: '任务ID', field: 'procInstId', col: {span:8},props:{placeholder:"请输入", clearable: true,}},
            {type: 'input', title: '任务名称', field: 'test1', col: {span:8},props:{placeholder:"请输入", clearable: true,}},
            {type: 'input', title: '发起人', field: 'test2', col: {span:8},props:{placeholder:"请输入", clearable: true,}},
            {type: 'div', 
                children: [
                  {type: 'i-button', field: 'search', props: {type: 'primary', icon:'ios-search',size:'default'}, children: ['查询'], emit: ['click'],col: {
                    span:8,
                    push: 16
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
            {title: '任务ID', key: 'procDefName', align: 'center', minWidth: 100,},
            {title: '任务名称', key: 'subject', align: 'center', minWidth: 100,tooltip:true,},
            {title: '任务描述', key: 'creator', align: 'center', minWidth: 100,},
            {title: '发起人', key: 'mainPrescription', align: 'center', minWidth: 100,},
            {title: '处理人', key: 'mainPrescription', align: 'center', minWidth: 100,},
            {title: '开始时间', key: 'mainPrescription', align: 'center', minWidth: 120,sortable: true},
            {title: '结束时间', key: 'mainPrescription', align: 'center', minWidth: 120,sortable: true},
            {title: '耗时', key: 'mainPrescription', align: 'center', minWidth: 100,},
            {title: '流程状态', key: 'statusDesc', minWidth: 100,
              render: (h, data) =>
                <div>
                  <span><Badge status= {this.statusType(data.row.status)}></Badge>{this.statusText(data.row.status)}</span>
                </div>
              
            },
            // {title: '创建时间', key: 'createTime', align: 'center', minWidth: 120,},
            {title: '操作栏', key: 'action', minWidth: 180, align: 'center',
              render: (h, data) => 
                <template style="width: 100%; display: flex;justify-content: space-evenly;">
                  <i-button type="info" size="small" ghost>详情</i-button>
                  <i-button type="error" size="small" ghost>删除</i-button>
                </template>
            },
          ],
           btns: [
                // {text: '批量删除', cb: (obj) => this.test(obj)},
            ],
        },
      },
      selectedData: [],
      data: []
    };
  },

  mounted() {
  },
  computed: {
    },
  methods: {
    statusType(type) {
      return statusMap[type].status
    },
    statusText (type) {
        return statusMap[type].text
      },
    test(obj) {
    }
  },
  // filters: {
  //   statusType () {
  //     return statusMap[3].status
  //   },
  //   statusText (type) {
  //     return statusMap[type].text
  //   }
  // },
};
</script>

<style lang="less" scoped>


</style>
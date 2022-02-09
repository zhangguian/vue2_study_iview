
<template>
  <div>
    <a-table ref="atable" :data="data" action="task/getPendingTask" :config="config" :selected.sync="selectedData"></a-table>
  </div>
</template>

<script>
  
import ATable from '_c/table/a-table.vue'
import store from '../../store';
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
            {type: 'input', title: '任务ID', field: 'id', col: {span:8},props:{placeholder:"请输入", clearable: true,}},
            {type: 'input', title: '任务名称', field: 'taskname', col: {span:8},props:{placeholder:"请输入", clearable: true,}},
            {type: 'input', title: '发起人', field: 'initiator', col: {span:8},props:{placeholder:"请输入", clearable: true,}},
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
            {title: '任务ID', key: 'id', align: 'center', minWidth: 100,},
            {title: '任务名称', key: 'taskname', align: 'center', minWidth: 100,tooltip:true,},
            {title: '任务描述', key: 'taskDesc', align: 'center', minWidth: 100,tooltip:true,},
            {title: '发起人', key: 'initiator', align: 'center', minWidth: 100,},
            {title: '处理人', key: 'handler', align: 'center', minWidth: 100,},
            {title: '开始时间', key: 'start', align: 'center', minWidth: 100,},
            {title: '流程状态', key: 'status', minWidth: 100,
              render: (h, data) =>
                <div>
                  <span><Badge status= {this.statusType(data.row.status)}></Badge>{this.statusText(data.row.status)}</span>
                </div>
            },
            // {title: '创建时间', key: 'createTime', align: 'center', minWidth: 120,},
            {title: '操作栏', key: 'action', minWidth: 180, align: 'center',
              render: (h, data) => 
                <template style="width: 100%; display: flex;justify-content: space-evenly;">
                  <i-button type="info" size="small" ghost onClick={() => this.details(data)}>详情</i-button>
                  <i-button type="warning" size="small" ghost onClick={() => this.deleOne(data)}>删除</i-button>
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

  async mounted() {
  },
  computed: {
    },
  methods: {
    //刷新数据
      refreshTable() {
        this.ModalShow = false
        this.$refs.atable.getData()
      },
    statusType(type) {
      return statusMap[type].status
    },
    statusText (type) {
        return statusMap[type].text
      },
    test(obj) {
    },
    async deleOne({row}) {
      console.log('row', row);
      let {data} = await this.$store.dispatch('task/deleOnePendingTask', {id: row.id})
      console.log(data)
      if(data) {
        this.refreshTable()
      }
    },
    details ({row}) {
      console.log('row', row);
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
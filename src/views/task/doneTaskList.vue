<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-09-08 11:45:38
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-11-23 13:43:04
-->
<template>
  <div>
    <a-table :data="data" :config="config" :selected.sync="selectedData"></a-table>
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
            {type: 'input', title: '审批号', field: 'procInstId', col: {span:8},props:{placeholder:"请输入", clearable: true,}},
            {type: 'input', title: 'test1', field: 'test1', col: {span:8},props:{placeholder:"请输入", clearable: true,}},
            {type: 'input', title: 'test2', field: 'test2', col: {span:8},props:{placeholder:"请输入", clearable: true,}},
            {type: 'input', title: 'test3', field: 'test3', col: {span:8},props:{placeholder:"请输入", clearable: true,}},
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
            // {title: '序号', type: 'index', width: 80, align: 'center',},
            // {title: '序列', key: 'id', align: 'center', minWidth: 80,},
            {title: '任务ID', key: 'procDefName', align: 'center', minWidth: 100,},
            {title: '任务名称', key: 'subject', align: 'center', minWidth: 100,tooltip:true,},
            {title: '任务描述', key: 'creator', align: 'center', minWidth: 100,},
            {title: '发起人', key: 'mainPrescription', align: 'center', minWidth: 100,},
            {title: '处理人', key: 'mainPrescription', align: 'center', minWidth: 100,},
            {title: '开始时间', key: 'mainPrescription', align: 'center', minWidth: 100,},
            {title: '结束时间', key: 'mainPrescription', align: 'center', minWidth: 100,},
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
      // status: 'error',
      data: [
        {id: 1, procDefName: '123', subject: '1321q321', creator: '24234', status: 0, statusDesc: 'sdsdfs'},
        {id: 2, procDefName: '123', subject: '1321q321', creator: '24234', status: 0,statusDesc: 'sdsdfs'},
        {id: 3, procDefName: '123', subject: '1321q321', creator: '24234', status: 2,statusDesc: 'sdsdfs'},
        {id: 4, procDefName: '123', subject: '1321q321', creator: '24234', status: 0,statusDesc: 'sdsdfs'},
        {id: 5, procDefName: '123', subject: '1321q321', creator: '24234', status: 2,statusDesc: 'sdsdfs'},
        {id: 6, procDefName: '123', subject: '1321q321', creator: '24234', status: 2,statusDesc: 'sdsdfs'},
        {id: 7, procDefName: '123', subject: '1321q321', creator: '24234', status: 2,statusDesc: 'sdsdfs'},
        {id: 8, procDefName: '123', subject: '1321q321', creator: '24234', status: 2,statusDesc: 'sdsdfs'},
        {id: 9, procDefName: '123', subject: '1321q321', creator: '24234', status: 2,statusDesc: 'sdsdfs'},
        {id: 10, procDefName: '123', subject: '1321q321', creator: '24234', status: 2,statusDesc: 'sdsdfs'},
        {id: 11, procDefName: '123', subject: '1321q321', creator: '24234', status: 2,statusDesc: 'sdsdfs'},
        {id: 12, procDefName: '123', subject: '1321q321', creator: '24234', status: 2,statusDesc: 'sdsdfs'},
        {id: 13, procDefName: '123', subject: '1321q321', creator: '24234', status: 2,statusDesc: 'sdsdfs'},
        {id: 14, procDefName: '123', subject: '1321q321', creator: '24234', status: 2,statusDesc: 'sdsdfs'},
        {id: 15, procDefName: '123', subject: '1321q321', creator: '24234', status: 2,statusDesc: 'sdsdfs'},
        {id: 16, procDefName: '123', subject: '1321q321', creator: '24234', status: 2,statusDesc: 'sdsdfs'},
        // {id: 001, procDefName: '123', subject: '1321q321', creator: '24234', statusDesc: 'sdsdfs'},
      ]
    };
  },

  mounted() {
    // console.log('this.statusType(1) :>> ', status | statusType);
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
      console.log('obj :>> ', obj);
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
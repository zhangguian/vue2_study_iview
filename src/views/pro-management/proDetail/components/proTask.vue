
<template>
  <div>
    <!-- 任务列表 -->
    <div style="text-align: right">
      <s-table :table="table" :data="data" :size="size">
        <div style="margin: 0px 10px; width: 200px">
          <Input v-model="value" size="small" placeholder="请输入任务名称"  search clearable @on-enter="search"/>
        </div>
      </s-table>
    </div>
    <!-- 新增项目任务 -->
    <Modal v-model="addShow" title="新增项目任务" width="1000" footer-hide>
      <div>
        <form-create
        v-model="formObj" 
        :rule="rule" 
        :option="option" 
        ></form-create>
      </div>
    </Modal>
    <!-- 项目任务详情 -->
    <Modal v-model="detailsShow" title="项目任务详情" width="1000" footer-hide>
      <details-form :fields="fields" :formData="data[0]"/>
    </Modal>

    <Modal v-model="tranShow" title="任务流转" footer-hide>
      <div>
        <form-create
        v-model="formObj1" 
        :rule="rule1" 
        :option="option" 
        ></form-create>
      </div>
    </Modal>
  </div>
</template>

<script>
import STable from '../table.vue'
import DetailsForm from '_c/form/details-form.vue'
export default {
  name: 'IviewProtask',
  components: {
    STable,DetailsForm
  },
  data() {
    return {
      value: '',
      formObj: {},
      rule: mock(),
      formObj1: {},
      rule1: mock1(),
      option: {
        form: {labelWidth: 100},
        submitBtn: true,
        resetBtn:false,
        onSubmit: (formObj) => {
        }
      },
      addShow: false,
      detailsShow: false,
      tranShow: false,
      size: "default",
      table: {
        columns: [
          {title: '标题', key: 'name', minWidth: 260,},
          {title: '优先级', key: 'creaor', minWidth: 30,align: 'center', },
          {title: '状态', key: 'creator', minWidth: 30,align: 'center', },
          {title: '处理人', key: 'creater', minWidth: 30,align: 'center', },
          {title: '创建时间', key: 'creatTime', minWidth: 50,align: 'center', },
          {title: '截止时间', key: 'creatTime', minWidth: 50,align: 'center', },
          {title: '操作', key: 'action', align: 'center', minWidth: 50,
            render: (h, data) => 
              <template style="width: 100%; display: flex;justify-content: space-evenly;">
                <Dropdown onOn-click={(val) => this.action(val,data)}>
                  <a href="javascript:void(0)">更多<Icon type="ios-arrow-down"></Icon></a>
                  <DropdownMenu slot="list">
                    <DropdownItem name="details">详情</DropdownItem>
                    <DropdownItem name="delete">删除</DropdownItem>
                    <DropdownItem name="update">修改</DropdownItem>
                    <DropdownItem name="transfer">流转</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </template>
          },
        ],
        btns: [
          {text: '添加任务', icon: 'md-add', cb: (obj) => this.test(obj)},
        ],
      },
      data: [
          {name: '文档搜索', desc: '这是一首简单的小情歌', creator: '已超时', approver: '李四', status: '已立项', model: '登录模块', creatTime: '2020-10-11', age: 18, },
          {name: '图片点击缩放', desc: '这是一首简单的小情歌', creator: '张三', approver: '李四', status: '已立项', model: '登录模块', creatTime: '2020-10-11', age: 24,},
          {name: '文档导出', desc: '这是一首简单的小情歌', creator: '张三', approver: '李四', status: '已立项', model: '登录模块', creatTime: '2020-10-11', age: 30, },
          {name: '第三方登录', desc: '这是一首简单的小情歌', creator: '张三', approver: '李四', status: '已立项', model: '登录模块', creatTime: '2020-10-11', age: 26,},
          {name: '第三方登录', desc: '这是一首简单的小情歌', creator: '张三', approver: '李四', status: '已立项', model: '登录模块', creatTime: '2020-10-11', age: 26,},
          {name: '第三方登录', desc: '这是一首简单的小情歌', creator: '张三', approver: '李四', status: '已立项', model: '登录模块', creatTime: '2020-10-11', age: 26,},
          {name: '第三方登录', desc: '这是一首简单的小情歌', creator: '张三', approver: '李四', status: '已立项', model: '登录模块', creatTime: '2020-10-11', age: 26,},
          {name: '第三方登录', desc: '这是一首简单的小情歌', creator: '张三', approver: '李四', status: '已立项', model: '登录模块', creatTime: '2020-10-11', age: 26,},
      ],

      fields: [
          {title: '任务名称', key: 'name', control: 'input', span: 8 },
          {title: '任务描述', key: 'desc', control: 'input', span: 8},
          {title: '指派给', key: 'approver', control: 'input', span: 8},
          {title: '创建时间', key: 'creatTime', control: 'input', span: 8},
          {title: '所处阶段', key: 'status', control: 'input', span: 8},
          {title: '所处模块', key: 'model', control: 'input', span: 8},
          {title: '预计工时', key: 'age', control: 'input', span: 8},
          {
            title: '图片',
            key: 'image',
            control: 'image',
            content: [
              {name:'专升本', url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp05%2F1910021S351A06-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639932480&t=1d3b35c681f6fbc03f98f45a1d11e24b'}
            ],
            span: 24
          }
      ],
    };
  },

  mounted() {
  },

  methods: {
    test() {
      this.addShow = true
    },
    search() {
    },
    action(name,{row}) {
      if(name == 'details') {
        this.detailsShow =true
      } else if(name == 'transfer') {
        this.tranShow = true
      }
    }
  },
};
  function mock() {
    return [
      {type: "input",title: "任务名称",field: "goods_ame",value: "",col: {span:12},
        props: {"type": "text","clearable": true,"placeholder": "请输入商品名称","required": false,},
        validate: [{required: true,message: '请输入商品名称',},],
      },
      {type: "input",title: "所属模块",field: "goods_1ame",value: "",col: {span:12},
        props: {"type": "text","clearable": true,"placeholder": "请输入商品名称","required": false,},
        validate: [{required: true,message: '请输入商品名称',},],
      },
      {type: "input",title: "预计工时",field: "goods_3ame",value: "",col: {span:12},
        props: {"type": "text","clearable": true,"placeholder": "请输入商品名称","required": false,},
        validate: [{required: true,message: '请输入商品名称',},],
      },
      {type: "radio",title: "优先级",field: "is_postage",value: "0",col: {span:12},
      options: [
          {value: "0",label: "紧急",},
          {value: "1",label: "一般",},
        ],
        props: {"type": undefined,"size": "default","vertical": false,},
      },
      {
          type: "select",
          field: "cate_id",
          title: "指派给",
          value: ["0",],
          col: {span: 12},
          options: [
              {"value": "0", "label": "无需审批", "disabled": false},
              {"value": "104", "label": "周丽莎", "disabled": false},
              {"value": "105", "label": "老司机", "disabled": false},
          ],
          props: {
              multiple: true, 
              filterable: true,
              placeholder: "请选择", 
              notFoundText: "无匹配数据",
              placement: "bottom", 
          },
          validate: [{required: true,message: '请选择审批人',},],
      },
      {type: "input",title: "任务描述",field: "goods_2ame",value: "",col: {span:24},
        //input值,
        props: {"type": "textarea","clearable": true,"placeholder": "请输入商品名称","required": false,rows: 5},
        validate: [{required: true,message: '请输入需求描述',},],
      },
      {type: "input",title: "预期结果",field: "goods_5ame",value: "",col: {span:24},
        //input值,
        props: {"type": "textarea","clearable": true,"placeholder": "请输入预计结果","required": false,rows: 5},
        validate: [{required: true,message: '请输入预期结果',},],
      },
    ]

  }
  function mock1() {
    return [
      {type: "input",title: "任务名称",field: "goods_dame",value: "",col: {span:12},
        props: {"type": "text","clearable": true,"placeholder": "请输入商品名称","required": false, "readonly": true},
      },
      {type: "input",title: "原指派给",field: "goods_Same",value: "",col: {span:12},
        props: {"type": "text","clearable": true,"placeholder": "请输入商品名称","required": false, "readonly": true},
      },
      {
          type: "select",
          field: "catS_id",
          title: "流转给",
          value: ["0"],
          col: {span: 24},
          options: [
              {"value": "0", "label": "无需审批", "disabled": false},
              {"value": "104", "label": "周丽莎", "disabled": false},
              {"value": "105", "label": "老司机", "disabled": false},
          ],
          props: {
              multiple: true, 
              filterable: true,
              placeholder: "请选择", 
              notFoundText: "无匹配数据",
              placement: "bottom", 
          },
          validate: [{required: true,message: '请选择审批人',},],
      },
    ]

  }

</script>

<style lang="less" scoped>

</style>
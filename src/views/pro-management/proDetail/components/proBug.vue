<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-11-21 00:02:22
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-11-23 16:21:51
-->
<template>
  <div>
    <!-- 任务列表 -->
    <div style="text-align: right">
      <s-table :table="table" :data="data" :size="size">
        <div style="margin: 0px 10px; width: 200px">
          <Input v-model="value" size="small" placeholder="请输入缺陷名称"  search clearable @on-enter="search"/>
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
    <Modal v-model="detailsShow" width="1000" footer-hide>
       <!-- <p slot="header" style="color:#f60;">
            <Icon type="ios-information-circle"></Icon>
            <span>Delete confirmation</span>
        </p> -->
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
import STable from './table.vue'
import DetailsForm from '_c/form/details-form.vue'
export default {
  name: 'IviewProbug',
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
          console.log('object :>> ', "12132");
        }
      },
      addShow: false,
      detailsShow: false,
      tranShow: false,
      size: "default",
      table: {
        columns: [
          // {title: 'ID', key: 'id', minWidth: 50,align: 'center', },
          {title: '缺陷名称', key: 'title', minWidth: 300,align: 'left', 
            render:(h, data) =>
            <div style="display: flex;">
              <span class="omit-inline">{data.row.title}</span>
            </div>
          },
          {title: '严重程度', key: 'severity', minWidth: 30,
            render: (h, data) =>
              <div>
                <span>{this.$tools.changeShow(data.row.severity, this.$c.severity)}</span>
              </div>
          },
          {title: '优先级', key: 'priority', minWidth: 30,
            render: (h, data) =>
            <div>
              <Tag color={this.colorType(data.row.priority)}>{this.$tools.changeShow(data.row.priority, this.$c.priStatus)}</Tag>
            </div>
          },
          {title: '状态', key: 'status', minWidth: 30,align: 'center', 
             render: (h,data) => 
              <div>
               <Dropdown onOn-click={(val) => this.action(val,data)}>
                   <i-button type="info" ghost shape="circle" size="small">实现中</i-button>
                  <DropdownMenu slot="list">
                    <DropdownItem name="details">重新打开</DropdownItem>
                    <DropdownItem name="delete">关闭</DropdownItem>
                    <DropdownItem name="update">已完成</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
               
              </div>
          },
          {title: '处理人', key: 'handler', minWidth: 80,align: 'center', },
          {title: '创建人', key: 'creator', minWidth: 30,align: 'center', },
          {title: '创建时间', key: 'creatTime', minWidth: 50,align: 'center', },
          {title: '操作', key: 'action', align: 'center', minWidth: 30,
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
          {text: '添加缺陷', icon: 'md-add', cb: (obj) => this.test(obj)},
        ],
      },
      data: [
          {id: "1154545", title: '文档搜索这', severity: '0', priority: '0', status: '0', handler: 'zhangguian',creator: '已时', creatTime: '2020-10-11',},
          {id: "1154545", title: '图片点击缩', severity: '1', priority: '1', status: '0', handler: 'zhangguian',creator: '张三', creatTime: '2020-10-11',},
          {id: "1154545", title: '文档导出书', severity: '2', priority: '2', status: '0', handler: 'zhangguian',creator: '张三', creatTime: '2020-10-11',},
          {id: "1154545", title: '第三方登录', severity: '0', priority: '0', status: '0', handler: 'zhangguian',creator: '张三', creatTime: '2020-10-11',},
          {id: "1154545", title: '第三方登录', severity: '3', priority: '3', status: '0', handler: 'zhangguian',creator: '张三', creatTime: '2020-10-11',},
          {id: "1154545", title: '第三方登录', severity: '1', priority: '1', status: '0', handler: 'zhangguian',creator: '张三', creatTime: '2020-10-11',},
          {id: "1154545", title: '第三方登录', severity: '2', priority: '2', status: '0', handler: 'zhangguian',creator: '张三', creatTime: '2020-10-11',},
          {id: "1154545", title: '第三方登录', severity: '1', priority: '1', status: '0', handler: 'zhangguian',creator: '张三', creatTime: '2020-10-11',},
      ],

      fields: [
          {title: '任务名称', key: 'name', control: 'input', span: 24,},
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
  watch: {
    data: {
      handler(val) {
        console.log('val :>> ', val);
        this.data.forEach(item => {
          let map =  {'0': 'gold','1': 'green', '2': 'red', '3': 'error'}
          item.priColor = map[item.priority]
        })
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    colorType(type) {
      let map = {'0': 'gold','1': 'green', '2': 'red', '3': 'error'}
      return map[type]
    },
    test() {
      this.addShow = true
      console.log('object :>> ', 'object');
    },
    search() {
      console.log('搜索 :>> ', '搜索');
    },
    action(name,{row}) {
      if(name == 'details') {
        // this.detailsShow =true
        this.$router.push({
          name: '/project_management/bugDetail_page'
        })
      } else if(name == 'transfer') {
        console.log('object :>> ', "object");
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
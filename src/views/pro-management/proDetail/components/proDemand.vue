<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-11-18 21:01:33
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-12-01 14:58:45
-->
<template>
  <div>
    <!-- 需求列表 -->
    <div style="text-align: right">
      <s-table :table="table" :data="data" :size="size">
        <div style="margin: 0px 10px; width: 200px">
          <Input v-model="value" size="small" placeholder="请输入需求名称"  search clearable @on-enter="search"/>
        </div>
      </s-table>
    </div>

    <!-- 新增项目需求 -->
    <Modal v-model="addShow" title="新增项目需求" width="1000" footer-hide>
      <div>
        <form-create v-model="formObj" :rule="rule" :option="option"></form-create>
      </div>
    </Modal>

    <!-- 项目需求详情 -->
    <Modal v-model="detailsShow" width="700" title="需求详情" @on-visible-change="onVisibleChange">
      <demand-details :visibleChange="visibleChange"/>
    </Modal>

    <!-- 任务流转 -->
    <Modal v-model="tranShow" title="任务流转" footer-hide>
      <div>
        <form-create v-model="formObj1" :rule="rule1" :option="option"></form-create>
      </div>
    </Modal>
  </div>
</template>

<script>

import STable from './table.vue'
import demandDetails from './demandDetails.vue'
export default {
  name: 'IviewProdemand',
  components: {
    STable,demandDetails
  },
  data() {
    return {
      visibleChange: false,
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
          {title: 'ID', key: 'id', minWidth: 30,},
          {title: '标题', key: 'title', minWidth: 300,},
          {title: '优先级', key: 'priority', minWidth: 30,
            render: (h, data) =>
            <div>
              <Tag color={this.colorType(data.row.priority)}>{this.$tools.changeShow(data.row.priority, this.$c.priStatus)}</Tag>
            </div>
          },
          {title: '状态', key: 'status', minWidth: 30,
            render: (h,data) => 
              <div>
                <Button type="info" ghost shape="circle" size="small" onClick={() => this.handleStatus(data)}>{this.$tools.changeShow(data.row.priority, this.$c.demandStatus)}</Button>
              </div>
          },
          {title: '负责人', key: 'handler', minWidth: 50, 
            render: (h, data) => 
              <template style="width: 100%; display: flex;">
                <Dropdown onOn-click={(val) => this.action(val,data)}>
                  <a href="javascript:void(0)" style="color: #515a6e;">{data.row.handler}</a>
                  <DropdownMenu slot="list">
                    <DropdownItem name="transfer">流转</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </template>
          },
          {title: '操作', key: 'action', align: 'center', minWidth: 50,
            render: (h, data) => 
              <template style="width: 100%; display: flex;justify-content: space-evenly;">
                <Dropdown onOn-click={(val) => this.action(val,data)}>
                  <a href="javascript:void(0)">更多<Icon type="ios-arrow-down"></Icon></a>
                  <DropdownMenu slot="list">
                    <DropdownItem name="details">详情</DropdownItem>
                    <DropdownItem name="delete">删除</DropdownItem>
                    <DropdownItem name="transfer">流转</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </template>
          },
        ],
        btns: [
          {text: '提需求', icon: 'md-add', cb: (obj) => this.test(obj)},
        ],
      },
      data: [
        {id: '2535648',title: '文档搜索', priority: '0', iteration: '迭代一', status: '0', handler: 'zhangguian', start: '2021-03-10', end: '2020-10-11', },
        {id: '2535648',title: '图片点击缩放', priority: '1', iteration: '迭代一', status: '0', handler: 'zhangguian', start: '2021-03-10', end: '2020-10-11',},
        {id: '2535648',title: '文档导出', priority: '1', iteration: '迭代一', status: '0', handler: 'zhangguian', start: '2021-03-10', end: '2020-10-11', },
        {id: '2535648',title: '第三方登录', priority: '1', iteration: '迭代一', status: '0', handler: 'zhangguian', start: '2021-03-10', end: '2020-10-11',},
        {id: '2535648',title: '第三方登录', priority: '3', iteration: '迭代一', status: '0', handler: 'zhangguian', start: '2021-03-10', end: '2020-10-11',},
        {id: '2535648',title: '第三方登录', priority: '3', iteration: '迭代一', status: '0', handler: 'zhangguian', start: '2021-03-10', end: '2020-10-11',},
        {id: '2535648',title: '第三方登录', priority: '2', iteration: '迭代一', status: '0', handler: 'zhangguian', start: '2021-03-10', end: '2020-10-11',},
        {id: '2535648',title: '第三方登录', priority: '2', iteration: '迭代一', status: '0', handler: 'zhangguian', start: '2021-03-10', end: '2020-10-11',},
        {id: '2535648',title: '第三方登录', priority: '2', iteration: '迭代一', status: '0', handler: 'zhangguian', start: '2021-03-10', end: '2020-10-11',},
      ],
      fields: [
          {title: '需求名称', key: 'name', control: 'input', span: 8 },
          {title: '创建人', key: 'creator', control: 'input', span: 8},
          {title: '审批人', key: 'approver', control: 'input', span: 8},
          {title: '创建时间', key: 'creatTime', control: 'input', span: 8},
          {title: '所处阶段', key: 'status', control: 'input', span: 8},
          {title: '所处模块', key: 'model', control: 'input', span: 8},
          {title: '预计工时', key: 'age', control: 'input', span: 8},
          {title: '由谁审批', key: 'desc', control: 'input', span: 8},
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
  computed: {
    
   
  },
  watch: {
     /**优先级：
       * 0 -Low -gold
       * 1 -Middle -green
       * 2 -High -red
       * 3 -emergency -error
       * */  
    // data: {
    //   handler(val) {
    //     console.log('val :>> ', val);
    //     this.data.forEach(item => {
    //       let map = {'0': 'gold','1': 'green', '2': 'red', '3': 'error'}
    //       item.priColor = map[item.priority]
    //     })
    //   },
    //   immediate: true,
    //   deep: true
    // }
  },
  mounted() {
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

    handleStatus(val) {
      this.detailsShow =true
      console.log('val :>> ', val);
    },
    action(name,{row}) {
      if(name == 'details') {
        this.detailsShow =true
        this.$router.push({
          name: '/project_management/demandDetails_page'
        })
      } else if(name == 'transfer') {
        console.log('object :>> ', "object");
        this.tranShow = true
      } else if (name == 'delete') {
        this.$Modal.warning({
          title: '您确认删除这条内容吗？',
          onOk:  () => {
            console.log('object :>> ', "object");
          },
        })
      }
    },
    onVisibleChange(val) {
      console.log('val :>> ', val);
      if(!val) {this.visibleChange = false}
    }
  },
};
  function mock() {
    return [
      {type: "input",title: "需求名称",field: "goods_ame",value: "",col: {span:12},
        props: {"type": "text","clearable": true,"placeholder": "请输入需求名称","required": false,},
        validate: [{required: true,message: '请输入需求名称',},],
      },
      {type: "input",title: "所属模块",field: "goods_1ame",value: "",col: {span:12},
        props: {"type": "text","clearable": true,"placeholder": "请输入所属模块","required": false,},
        validate: [{required: true,message: '请输入所属模块',},],
      },
      {type: "input",title: "预计工时",field: "goods_3ame",value: "",col: {span:12},
        props: {"type": "text","clearable": true,"placeholder": "请输入预计工时","required": false,},
        validate: [{required: true,message: '请输入预计工时',},],
      },
      {type: "radio",title: "优先级",field: "is_postage",value: "0",col: {span:12},
      options: [
          {value: "0",label: "宽和",},
          {value: "1",label: "一般",},
          {value: "2",label: "紧急",},
        ],
        props: {"type": undefined,"size": "default","vertical": false,},
      },
      {
        type: "DatePicker",
        field: "section_day2",
        title: "预计开始",
        value: new Date(),
        col: {span: 12},
        props: {
          "type": "datetime",
          "format": "yyyy-MM-dd HH:mm:ss",
          "placeholder": "请选择预计开始时间",
        }
      },
      {
        type: "DatePicker",
        field: "section_day4",
        title: "预计结束",
        value: '2018-02-20 23:23:23',
        col: {span: 12},
        props: {
          "type": "datetime",
          "format": "yyyy-MM-dd HH:mm:ss",
          "placeholder": "请选择预计结束时间",
        }
      },
      {
        type: "select",
        field: "catS_id",
        title: "处理人",
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
        validate: [{required: true,message: '请选择处理人',},],
      },
      {
          type: "select",
          field: "cate_id",
          title: "由谁审批",
          value: ["0",],
          col: {span: 12},
          options: [
              {"value": "0", "label": "无需审批", "disabled": false},
              {"value": "104", "label": "周丽莎", "disabled": false},
              {"value": "105", "label": "老司机", "disabled": false},
          ],
          props: {
              multiple: false, 
              placeholder: "请选择", 
              notFoundText: "无匹配数据",
              placement: "bottom", 
          },
          validate: [{required: true,message: '请选择审批人',},],
      },
      {type: "input",title: "需求描述",field: "goods_2ame",value: "",col: {span:24},
        //input值,
        props: {"type": "textarea","clearable": true,"placeholder": "请输入需求描述","required": false,rows: 5},
        validate: [{required: true,message: '请输入需求描述',},],
      },
      {
        type: "Upload",
        field: "pic",
        title: "图片",
        value: ['https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp05%2F1910021S351A06-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639932480&t=1d3b35c681f6fbc03f98f45a1d11e24b'],
        //input值
        props: {
          "type": "select",
          //上传控件的类型，可选值为 select（点击选择），drag（支持拖拽）
          "uploadType": "image",
          //上传文件类型，可选值为 image（图片上传），file（文件上传）
          "action": "",
          //上传的地址，必填
          "headers": {},
          //设置上传的请求头部
          "multiple": true,
          //是否支持多选文件
          "data": {},
          //上传时附带的额外参数
          "name": "",
          //上传的文件字段名
          "withCredentials": false,
          //支持发送 cookie 凭证信息
          "accept": "",
          //接受上传的文件类型
          "format": [],
          //支持的文件类型，与 accept 不同的是，format 是识别文件的后缀名，accept 为 input 标签原生的 accept 属性，会在选择文件时过滤，可以两者结合使用
          "maxSize": undefined,
          //文件大小限制，单位 kb
          "maxLength": 4,
          //上传文件最大数
          "beforeUpload": () => {},
          //上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传
          "onProgress": () => {},
          //文件上传时的钩子，返回字段为 event, file, fileList
          "onSuccess": function() {
            return 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp05%2F1910021S351A06-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639932480&t=1d3b35c681f6fbc03f98f45a1d11e24b';
          },
          //文件上传成功时的钩子，返回字段为 response, file, fileList, 使用$f.uploadPush(field,filePath) 将上传后的路径添加到value中
          "onError": (error, file, fileList) => {
            alert('上传失败')
          },
          //文件上传失败时的钩子，返回字段为 error, file, fileList
          "onPreview": () => {},
          //点击已上传的文件链接时的钩子，返回字段为 file， 可以通过 file.response 拿到服务端返回数据
          "onRemove": () => {},
          //文件列表移除文件时的钩子，返回字段为 file, fileList
          "onFormatError": () => {},
          //文件格式验证失败时的钩子，返回字段为 file, fileList
          "onExceededSize": () => {},
          //文件超出指定大小限制时的钩子，返回字段为 file, fileList
          //操作按钮的图标 ,设置为false将不显示
          handleIcon: 'ios-eye-outline',
          //点击操作按钮事件
          // onHandle:(src)=>{},
          //是否可删除,设置为false是不显示删除按钮
          allowRemove: true,
        },
        validate: [{
          required: false,
          type: 'array',
          min: 3,
          message: '请上传3张图片',
          trigger: 'change'
        }]
      },
    ]

  }
  function mock1() {
    return [
      {type: "input",title: "任务名称",field: "goods_dame",value: "",col: {span:12},
        props: {"type": "text","clearable": true,"placeholder": "请输入商品名称","required": false, "readonly": true},
      },
      {type: "input",title: "原处理人",field: "goods_Same",value: "",col: {span:12},
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
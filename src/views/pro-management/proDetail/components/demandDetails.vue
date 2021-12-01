<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-11-24 01:24:52
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-12-01 11:03:50
-->
<template>
<Card>
  <div class="demand-detail" style="padding: 5px 10px">
    <div style="display: flex;justify-content: space-between; padding-bottom: 4px">
      <Button size="default" icon="ios-undo" id="back" type="primary" ghost @click="back">返回</Button>
      <Button size="default" icon="md-create" id="editable" type="primary" ghost @click="editable">修改</Button>
    </div>
    <!-- 标题 -->
    <Form :model="demandForm" label-position="left" :label-width="100">
      <FormItem :label="`【${demandForm.id}】`" :prop="demandForm.title">
        <div class="demand-title">
          <!-- 详情展示 -->
          <div data-private="true" v-if="!isEditor">{{demandForm.title}}</div>
          <!-- 可编辑 -->
          <Input type="text" v-model="demandForm.title" v-else ref="focusTextarea" clear></Input>
        </div>
      </FormItem>

     
      
      <div>
       
          <Tabs>
            <TabPane label="详情" icon="md-locate" name="Iteration">
               <!-- 基础属性 -->
              <div class="demand-desc" style="padding: 0px 0px">
                <div style="font-size: 15px;color: #303030;padding: 3px 0px">基础属性</div>
                <!-- 详情展示 -->
                <div class="demand-info" v-if="!isEditor">
                  <div class="demand-info-item">
                    <Avatar size="large" src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                    <div class="demand-info-content">
                      <div class="demand-info-content-title omit-inline;">zhangguian</div>
                      <div class="demand-info-content-subtitle">负责人</div>
                    </div>
                  </div>
                  <div class="demand-info-item">
                    <Avatar icon="ios-infinite" size="large" style="color: #ffffff;background-color:#f0a100"></Avatar>
                    <div class="demand-info-content">
                      <div class="demand-info-content-title omit-inline;">实现中</div>
                      <div class="demand-info-content-subtitle">当前状态</div>
                    </div>
                  </div>
                  <div class="demand-info-item">
                    <Avatar icon="ios-person" size="large" style="background: #f56a00"/>
                    <div class="demand-info-content">
                      <div class="demand-info-content-title omit-inline;">紧急</div>
                      <div class="demand-info-content-subtitle">优先级</div>
                    </div>
                  </div>
                  <div class="demand-info-item">
                    <Avatar icon="ios-person" size="large" />
                    <div class="demand-info-content">
                      <div class="demand-info-content-title omit-inline;">
                        所属迭代
                      </div>
                      <div class="demand-info-content-subtitle">所属迭代</div>
                    </div>
                  </div>
                </div>
                <!-- 可编辑 -->
                <Row :gutter="10" v-else>
                  <Col :span="12">
                    <FormItem label="负责人:" :prop="demandForm.principal">
                      <Select v-model="demandForm.principal" filterable  transfer
                        :remote-method="remoteMethod1"
                        :default-label="demandForm.principal"
                        :loading="loading1">
                          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                      </Select>
                    </FormItem>
                  </Col>
                  <Col :span="12">
                    <FormItem label="状态:" :prop="demandForm.status">
                      <Select v-model="demandForm.status" filterable transfer
                        :remote-method="remoteMethod1"
                        :default-label="demandForm.status"
                        :loading="loading1">
                          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                      </Select>
                    </FormItem>
                  </Col>
                  <Col :span="12">
                    <FormItem label="优先级:" :prop="demandForm.priority">
                      <Select v-model="demandForm.priority" filterable transfer
                        :remote-method="remoteMethod1"
                        :default-label="demandForm.priority"
                        :loading="loading1">
                          <Option v-for="item in priorityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                      </Select>
                    </FormItem>
                  </Col>
                  <Col :span="12">
                    <FormItem label="所属迭代:" :prop="demandForm.iteration">
                      <Select v-model="demandForm.iteration" filterable transfer
                        :remote-method="remoteMethod1"
                        :default-label="demandForm.iteration"
                        :loading="loading1">
                          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                      </Select>
                    </FormItem>
                  </Col>
                </Row>
              </div>
               <!-- 需求描述 -->
              <div class="demand-desc" style="padding: 0px 0px">
                <div style="font-size: 15px;color: #303030;padding: 3px 0px">需求描述</div>
                <div>
                  <!-- 详情展示 -->
                  <div v-if="!isEditor">
                    <Input v-model="demandForm.desc" readonly type="textarea" :rows="6" placeholder="请输入描述" />
                  </div>
                  <!-- 可编辑 -->
                  <div v-else>
                    <FormItem  :prop="demandForm.desc">
                      <Input v-model="demandForm.desc" type="textarea" :rows="5" placeholder="请输入描述" />
                    </FormItem>
                  </div>
                </div>
              </div>
              <div style="margin: 10px 0px">
                <div style="font-size: 15px;color: #303030; padding: 5px 0px">基础信息</div>
                <div class="msg-item" style="display: flex">
                  <div class="msg-label">所属项目</div>
                  <div>敏捷是研发管理</div>
                </div>
                <div class="msg-item">
                  <div class="msg-label">工作项类型</div>
                  <div>需求</div>
                </div>
                <div class="msg-item">
                  <div class="msg-label">创建者</div>
                  <div>zhangguian</div>
                </div>
                <div class="msg-item">
                  <div class="msg-label">创建时间</div>
                  <div>2020-10-11 12:12:00</div>
                </div>
                <div class="msg-item">
                  <div class="msg-label">更新时间事件</div>
                  <div>2020-10-11 12:12:00</div>
                </div>
                <div class="msg-item">
                  <div class="msg-label">完成度</div>
                  <div>68%</div>
                </div>
              </div>
            </TabPane>
            <TabPane label="周期与进度" icon="md-speedometer" name="ProSpeedometer">
              <div>
                <div class="msg-item">
                  <div class="msg-label">创建者</div>
                  <div>zhangguian</div>
                </div>
                <div class="msg-item">
                  <div class="msg-label">创建时间</div>
                  <div>2020-10-11 12:12:00</div>
                </div>
                <div class="msg-item">
                  <div class="msg-label">计划开始时间</div>
                  <div>2020-10-11 12:12:00</div>
                </div>
                <div class="msg-item">
                  <div class="msg-label">计划完成时间</div>
                  <div>2020-10-11 12:12:00</div>
                </div>
                <div class="msg-item">
                  <div class="msg-label">完成度</div>
                  <div>68%</div>
                </div>
              </div>
            </TabPane>
            <TabPane label="测试情况" icon="ios-ionic" name="ProTask"></TabPane>
            <TabPane label="变更记录" icon="md-paper" name="ProBug"></TabPane>
          </Tabs>
        
        <div style="text-align: right;padding: 0px 10px" v-if="isEditor">
          <Button type="primary">提交</Button>
        </div>
        
      </div>
    </Form>
  </div>
</Card>
</template>

<script>
import E from 'wangeditor'
export default {
  name: 'IviewDemanddetails',
  props: {
    visibleChange: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      demandTitle: '支持商家主动取消订单',
      editorData: '',
      isEditor: false,
      options1: [],
      loading1: false,
      cityList: [
        {value: 'New York',label: 'New York'},
        {value: 'zhangguian', label: 'zhangguian'},
        {value: 'London',label: 'London'},
        {value: 'Sydney',label: 'Sydney'},
      ],
      priorityList: [
        {value: '0', label: '低'},
        {value: '1', label: '一般'},
        {value: '2', label: '高'},
      ],
      demandForm: {
        id: '25644564',
        title: '支持商家主动取消订单',
        principal: 'zhangguian',
        priority: '0',
      }
    };
  },
  computed: {},
  watch: {},

  mounted() {
    // this.editor()
    console.log('this.editor :>> ', this.editor.txt);
  },

  methods: {
    editable() {
      this.isEditor = true
      // alert('232323')
      this.getEditorData()
      // this.editor.enable()
    },
    editor() {
      const editor = new E("#wangEditor");
      editor.config.showFullScreen = true;
      // 设置编辑区域高度为 500px
      editor.config.height = 150
      // 配置 onchange 回调函数，将数据同步到 vue 中
      editor.config.onchange = (newHtml) => {
        this.editorData = newHtml
      }
      editor.config.uploadImgServer = "/api/upload-img";
      // 配置菜单栏，删减菜单，调整顺序
      editor.config.menus = [
        'head',
        'bold',
        'fontSize',
        'foreColor',
        'redo',
        'image',
        'justify',
        'quote',
        'table',
      ]
      // 创建编辑器
      editor.create()
      // editor.disable()
    },

    getEditorData() {
      // 通过代码获取编辑器内容
      // alert('232323')
      // let data = this.editor.txt.html()
      // console.log('data :>> ', data);
    },
    beforeDestroy() {
      // 调用销毁 API 对当前编辑器实例进行销毁
      this.editor.destroy()
      this.editor = null
    },
    remoteMethod1() {},
    back() {
      this.$router.go(-1);
    }
  },
};
</script>

<style lang="less" scoped>
.demand-detail {
  .demand-title {
    display: flex;
    font-size: 17px;
    color: #303030;
    font-weight: 500;
    border-bottom: 1px solid #e8eaec;
    textarea {
      height: 34px;
      width: 100%;
      border: none;
      resize: none;
      outline: none;
      box-shadow: none;
      min-height: 34px;
      max-height: 9.0072e+15px;
      resize: none;
      &:focus,&:hover {
        background-color: #f8f8f8;
      }
    }
  }
  .demand-info {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0px;
    min-height: 47px;
    border-bottom: 1px solid #e8eaec;
    .demand-info-item{
      flex: 1;
      width: calc(50% - 5px);
      margin-bottom: 10px;
      display: flex;
      padding: 4px;
      cursor: pointer;
      align-items: center;
      transition: background-color .2s;
      border-radius: 30px;
      &:hover {
        background-color: #e8f3ff;
      }
      .demand-info-content {
        overflow: hidden;
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        .demand-info-content-title {
          font-size: 15px;
          color: #303030;
          font-weight: 500;
        }
        .demand-info-content-subtitle {
          line-height: 1;
          margin-top: 5px;
          font-size: 12px;
          color: #909090;
          font-weight: 500;
        }
      }
    }
  }
}
.msg-item {
  display: flex;
  margin-bottom: 10px;
  .msg-label {
    width: 90px;
    margin-right: 80px;
  }
}

/deep/ .ivu-form-item {
    // margin-bottom: 10px;
    // vertical-align: top;
    // zoom: 1;
}
// /deep/ .ivu-select-selection {
//   border: 1px solid transparent;
//   &:hover {
//     border: 1px solid #5d9bfc
//   }
// }
// /deep/ .ivu-select-arrow {
//   display: none
// }
</style>
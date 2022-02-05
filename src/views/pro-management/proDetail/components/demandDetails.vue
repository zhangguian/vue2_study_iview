
<template>
<Card>
  <div class="demand-detail" style="padding: 5px 10px">
    <div style="display: flex;justify-content: space-between; padding-bottom: 4px;border-bottom: 1px solid #f8f8f8">
      <Button size="default" icon="ios-undo" id="back" type="text"  @click="back">返回</Button>
    </div>
    <!-- 标题 -->
    <div class="demand-title">
      <div><span>【{{demandForm.id}}】</span></div>
      <!-- 详情展示 -->
      <div style="flex: 1" >
        <div data-private="true"  @click="editable" v-if="!isEditor" style="padding: 0px">{{demandForm.title}}</div>
        <!-- 可编辑 -->
        <Input type="text" 
        v-else class="input-call" 
        v-model="demandForm.title" 
        @on-blur="onBlur" 
        @on-change="inputOnChange"
        :autofocus="true"
        ref="focusInputs"
        clearable></Input>
      </div>
    </div>

    <!-- 内容 -->
    <div>
      <Tabs>
        <TabPane label="详情" icon="md-locate" name="Iteration">
            <!-- 基础属性 -->
          <div class="demand-desc" style="padding: 0px 0px">
            <div style="font-size: 15px;color: #303030;padding: 3px 0px">基础属性</div>
            <div class="demand-info">
              <div class="demand-info-item">
                <Dropdown  style="margin-left: 20px" transfer>
                  <div class="demand-info-box">
                    <Avatar size="large" src="https://i.loli.net/2017/08/21/599a521472424.jpg"></Avatar>
                    <div class="demand-info-content">
                      <div class="demand-info-content-title omit-inline;">实现中</div>
                      <div class="demand-info-content-subtitle">负责人</div>
                    </div>
                  </div>
                    <DropdownMenu slot="list">
                        <div style="text-align: right;margin:10px;">
                          <Input v-model="texta" clearable prefix="ios-search" placeholder="请搜索工作负责人"/>
                        </div>
                        <DropdownItem>驴打滚</DropdownItem>
                        <DropdownItem>炸酱面</DropdownItem>
                        <DropdownItem>豆汁儿</DropdownItem>
                        <DropdownItem>冰糖葫芦</DropdownItem>
                        <DropdownItem>北京烤鸭</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
              </div>
              <div class="demand-info-item">
                <Dropdown  style="margin-left: 20px" transfer>
                  <div class="demand-info-box">
                    <Avatar icon="ios-infinite" size="large" style="color: #ffffff;background-color:#f0a100"></Avatar>
                    <div class="demand-info-content">
                      <div class="demand-info-content-title omit-inline;">实现中</div>
                      <div class="demand-info-content-subtitle">当前状态</div>
                    </div>
                  </div>
                    <DropdownMenu slot="list">
                      <div style="text-align: right;margin:10px;">
                        <p>选择步骤更改状态</p>
                      </div>
                      <DropdownItem>驴打滚</DropdownItem>
                      <DropdownItem>炸酱面</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
              </div>
              <div class="demand-info-item">
                <Dropdown  style="margin-left: 20px" transfer>
                  <div class="demand-info-box">
                    <Avatar icon="ios-infinite" size="large" style="color: #ffffff;background-color:#f0a100"></Avatar>
                    <div class="demand-info-content">
                      <div class="demand-info-content-title omit-inline;">实现中</div>
                      <div class="demand-info-content-subtitle">优先级</div>
                    </div>
                  </div>
                    <DropdownMenu slot="list">
                        <div style="text-align: right;margin:10px;">
                            <Input v-model="textc" clearable prefix="ios-search" />
                        </div>
                        <DropdownItem>驴打滚</DropdownItem>
                        <DropdownItem>炸酱面</DropdownItem>
                        <DropdownItem>豆汁儿</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
              </div>
              <div class="demand-info-item">
                  <Dropdown  style="margin-left: 20px" transfer>
                  <div class="demand-info-box">
                    <Avatar icon="ios-infinite" size="large" style="color: #ffffff;background-color:#f0a100"></Avatar>
                    <div class="demand-info-content">
                      <div class="demand-info-content-title omit-inline;">实现中</div>
                      <div class="demand-info-content-subtitle">所属迭代</div>
                    </div>
                  </div>
                    <DropdownMenu slot="list">
                        <div style="text-align: right;margin:10px;">
                          <Input v-model="textd" clearable prefix="ios-search" />
                        </div>
                        <DropdownItem>驴打滚</DropdownItem>
                        <DropdownItem>炸酱面</DropdownItem>
                        <DropdownItem>豆汁儿</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </div>
            <!-- 需求描述 -->
          <div class="demand-desc" style="padding: 0px 0px">
            <div style="font-size: 15px;color: #303030;padding: 3px 0px">需求描述</div>
            <div>
              <div id="wangEditor"></div>
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
              <div class="msg-label">更新时间</div>
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
        <TabPane label="变更记录" icon="md-paper" name="ProBug">
          <Timeline>
              <TimelineItem>
                  <p class="time">1976年</p>
                  <p class="content">Apple I 问世</p>
              </TimelineItem>
              <TimelineItem>
                  <p class="time">1984年</p>
                  <p class="content">发布 Macintosh</p>
              </TimelineItem>
              <TimelineItem>
                  <p class="time">2007年</p>
                  <p class="content">发布 iPhone</p>
              </TimelineItem>
              <TimelineItem>
                  <p class="time">2010年</p>
                  <p class="content">发布 iPad</p>
              </TimelineItem>
              <TimelineItem>
                  <p class="time">2011年10月5日</p>
                  <p class="content">史蒂夫·乔布斯去世</p>
              </TimelineItem>
          </Timeline>
        </TabPane>
      </Tabs>
    </div>
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
      editorData: '',
      texta: '',
      textb: '',
      textc: '',
      textd: '',
      isEditor: false,
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
    this.editor()
  },

  methods: {
    editable() {
      this.isEditor = true
      let that = this
      setTimeout(function () {
        that.$refs['focusInputs'].focus()
      },200);
    },
    onBlur() {
      this.isEditor = false
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
      editor.config.menus = ['head','bold','fontSize','foreColor','redo','image','justify','quote','table',]
      // 创建编辑器
      editor.create()
    },

    getEditorData() {
      // 通过代码获取编辑器内容
      // let data = this.editor.txt.html()
    },
    beforeDestroy() {
      // 调用销毁 API 对当前编辑器实例进行销毁
      this.editor.destroy()
      this.editor = null
    },
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
    align-items: center;
    padding: 0px 0px 4px 0px;
    margin: 4px 0px;
    height: 34px;
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
      padding: 4px;
      cursor: pointer;
      transition: background-color .2s;
      border-radius: 30px;
      &:hover {
        background-color: #e8f3ff;
      }
      .demand-info-box {
        display: flex;
        align-items: center;
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
}
.msg-item {
  display: flex;
  margin-bottom: 10px;
  .msg-label {
    width: 90px;
    margin-right: 80px;
  }
}

 .input-call :nth-last-child(1){       
  font-size: 17px !important;
  color: #303030;
  font-weight: 500;
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
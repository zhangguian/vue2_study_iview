
<template>
  <div>
    <div style="text-align: right;margin-right: 10px" v-if="printShow">
      <Button icon="md-print" v-print="'#printMe'"></Button>
    </div>
    <div  id="printMe">
      <Form ref="applyForm" :model="applyContent" :rules="applyValidate" >
        <Card dis-hover style="margin: 0px auto; width: 700px;border: 1px solid #ccc"  >
          <div class="apply-form">
            <span class="title">员工请假单</span>
            <div >
              <Row>
                <Col :span="10" :offset="14">
                  <FormItem label="编号:" :label-width="80">
                    <Input :border="false" v-model="applyContent.id" :readonly="readonly" placeholder="系统自动生成"></Input>
                  </FormItem>
                </Col>
              </Row>
            </div>
            <table border="1" class="table">
              <tr>
                <td class="firstTr">请假人</td>
                <td class="firstTr">
                  <Row>
                    <Col :xs="22" :offset="1">
                      <FormItem style="line-height: 55px;" prop="applicant">
                        <Input :border="false" v-model="applyContent.applicant" :readonly="readonly" ></Input>
                      </FormItem>
                    </Col>
                  </Row>
                </td>
                <td class="firstTr">部门</td>
                <td class="firstTr">
                  <Row>
                    <Col :xs="22" :offset="1">
                      <FormItem style="line-height: 55px;" prop="department">
                        <Input :border="false" v-model="applyContent.department" :readonly="readonly"></Input>
                      </FormItem>
                    </Col>
                  </Row>
                </td>
                <td class="firstTr">职务</td>
                <td class="firstTr">
                  <Row>
                    <Col :xs="22" :offset="1">
                      <FormItem prop="position">
                        <Input :border="false" v-model="applyContent.position" :readonly="readonly"></Input>
                      </FormItem>
                    </Col>
                  </Row>
                </td>
              </tr>

              <tr>
                <td colspan="6">
                  <Row>
                    <Col :span="24">
                      <FormItem label="请假类型:" :label-width="100" prop="applyType">
                        <RadioGroup v-model="applyContent.applyType" >
                            <Radio  style="margin-right: 10px;" v-for="item in aleaveType" :key="item.label" :label="item.label" :disabled="readonly">{{item.type}}</Radio>
                        </RadioGroup>
                      </FormItem>
                    </Col>
                  </Row>
                </td>
              </tr>

              <tr>
                <td colspan="6" height="134px">
                    <FormItem label="请假事由:" :label-width="100" prop="reason">
                      <Input v-model="applyContent.reason" :border="false" type="textarea" :rows="4" show-word-limit maxlength="100" :readonly="readonly"/>
                    </FormItem>
                </td>
              </tr>
              <tr>
                <td colspan="6" >
                  <Row style="height: 60px;">
                    <Col :span="12">
                      <FormItem label="请假时间:" :label-width="100" prop="startDate">
                        <DatePicker type="datetime"  v-model="applyContent.startDate" :readonly="readonly"></DatePicker>
                      </FormItem>
                    </Col>
                      <span style="line-height: 48px;;margin: 0px 20px;">至</span>
                    <Col :span="8">
                      <FormItem prop="endDate">
                        <DatePicker type="datetime"  v-model="applyContent.endDate" :readonly="readonly"></DatePicker>
                      </FormItem>
                    </Col>
                      <br />
                     
                  </Row>
                </td>
              </tr>
              
              <tr class="firstTr">
                <td colspan="3">
                  <Row style="height: 60px;">
                    <Col>
                      <FormItem label="应急联系方式:" :label-width="130" prop="phone">
                        <Input :border="false" v-model="applyContent.phone" :readonly="readonly"></Input>
                      </FormItem>
                    </Col>
                  </Row>
                </td>
                <td colspan="3">
                  <Row style="height: 60px;">
                    <Col>
                      <FormItem label="应急工作委托人:" :label-width="130" prop="principal">
                        <Input :border="false" v-model="applyContent.principal" :readonly="readonly"></Input>
                      </FormItem>
                    </Col>
                  </Row>
                </td>
              </tr>
              <tr class="firstTr">
                <td colspan="3">
                  <Row>
                    <Col :span="16">
                      <FormItem label="部门经理意见:" :label-width="130" >
                        <!-- <Input :border="false"></Input> -->
                      </FormItem>
                    </Col>
                  </Row>
                  <br>
                  <Row>
                    <Col :span="16" :offset="4">
                    <FormItem label="负责人:" :label-width="130"  style="margin: 30px">
                        <!-- <Input :border="false"></Input> -->
                      </FormItem>
                    </Col>
                  </Row>
                </td>
                <td colspan="3">
                  <Row>
                    <Col :span="16">
                      <FormItem label="行政办意见:" :label-width="130" >
                        <!-- <Input :border="false"></Input> -->
                      </FormItem>
                    </Col>
                  </Row>
                  <br>
                  <Row>
                    <Col :span="16" :offset="4">
                    <FormItem label="负责人:" :label-width="130"  style="margin: 30px">
                        <!-- <Input :border="false"></Input> -->
                      </FormItem>
                    </Col>
                  </Row>
                </td>
              </tr>
              <tr class="firstTr">
                <td colspan="3">
                  <Row>
                    <Col :span="16">
                      <FormItem label="总经理意见:" :label-width="130" ></FormItem>
                    </Col>
                  </Row>
                  <br>
                  <Row>
                    <Col :span="16" :offset="2">
                        <span>小于三天无需总经理批准</span>
                    </Col>
                  </Row>
                  <br>
                  <Row>
                    <Col :span="16" :offset="4">
                    <FormItem label="负责人:" :label-width="130"  style="margin: 30px">
                      </FormItem>
                    </Col>
                  </Row>
                </td>
                <td colspan="3">
                  <Row>
                    <Col :span="18" style="text-align: left;padding: 5px;color: rgb(255, 0, 0);">
                      <h5>说明</h5>
                        <p>1.返回公司报到时间为销假时间。</p>
                        <p>2.所有员工3天及以上请假需总经理批准。</p>
                        <p>3.本表存人力资源部(行政办)备案。</p>
                        <span class="fontiframe">4.全天假以00:00:00开始以23:59:59结束,下午请假以12:00:00开始</span>
                    </Col>
                  </Row>
                  
                </td>
              </tr>
            </table>
          </div>
        </Card>
        <Row v-if="detailShow">
          <Col :span="24" :offset="18" >
            <FormItem>
              <Button type="primary" @click="handleSubmit">提交</Button>
              <Button @click="handleReset" style="margin-left: 8px">取消</Button>
          </FormItem>
          </Col>
        </Row>
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IviewApplicationformleave',
  props: {
    applyContent: {
      type: Object,
      default() {
        return {}
      }
    },
    printShow: {
      type: Boolean,
      default: true
    },
    readonly: {
      type: Boolean,
      default: false
    },
    detailShow: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      aleaveType: [
        {label: 0, type: '病假'},
        {label: 1, type: '事假'},
        {label: 2, type: '年假'},
        {label: 3, type: '婚假'},
        {label: 4, type: '产假'},
        {label: 5, type: '丧假'},
        {label: 6, type: '探亲假'},
        {label: 7, type: '护理假'},
        {label: 8, type: '其他'},         
      ],
      applyValidate: {
        applyType: [
          { required: true, type:"number", message: '请选择请假类型', trigger: 'blur' }
        ],
        reason: [
          { required: true, message: '请说明请假原因', trigger: 'blur' }
        ],
        startDate: [
          { required: true, type:"date",  message: '请选择请假开始时间', trigger: 'blur' }
        ],
        endDate: [
          { required: true, type:"date",  message: '请选择请假结束时间', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请填写应急联系方式', trigger: 'blur' }
        ],
        principal: [
          { required: true, message: '请填写工作委托人', trigger: 'blur' }
        ],
      }
    };
  },
  computed: {
    
  },
  methods: {
     handleSubmit () {
      let applyContent = this.applyContent
      this.$refs['applyForm'].validate(  (valid) => {
          if(valid) {
            this.$emit("submit-apply",  applyContent)
          } else {
              this.$Message.error('请填写相关信息!')
          }
      })
    },
    handleReset () {
      this.$refs['applyForm'].resetFields();
      this.$emit('cancel', false)
    }
  },
};
</script>

<style lang="less" scoped>
@import './index.less';
</style>
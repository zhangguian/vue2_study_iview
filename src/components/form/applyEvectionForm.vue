
<template>
  <div>
    <div style="text-align: right;margin-right: 10px" v-if="printShow">
      <Button icon="md-print"  v-print="'#printMe'"></Button>
    </div>
    <div  id="printMe">
      <Form :model="applyContent">
          <Card dis-hover style="margin: 0px auto; border: 1px solid #ccc" >
            <div class="apply-form">
              <span class="title">出差申请单</span>
              <div >
                <Row>
                  <Col :span="10" :offset="14">
                    <FormItem label="编号:" :label-width="80" :prop="applyContent.id">
                      <Input :border="false" v-model="applyContent.id"></Input>
                    </FormItem>
                  </Col>
                </Row>
              </div>
              <table border="1" class="table">
                <tr>
                  <td class="firstTr">出差人</td>
                  <td class="firstTr">
                    <Row>
                      <Col :xs="22" :offset="1">
                        <FormItem style="line-height: 55px;"  :prop="applyContent.applicant">
                          <Input :border="false" v-model="applyContent.applicant" readonly ></Input>
                        </FormItem>
                      </Col>
                    </Row>
                  </td>
                  <td class="firstTr">部门</td>
                  <td class="firstTr">
                    <Row>
                      <Col :xs="22" :offset="1">
                        <FormItem style="line-height: 55px;" :prop="applyContent.department">
                          <Input :border="false" v-model="applyContent.department" readonly></Input>
                        </FormItem>
                      </Col>
                    </Row>
                  </td>
                  <td class="firstTr">职务</td>
                  <td class="firstTr">
                    <Row>
                      <Col :xs="22" :offset="1">
                        <FormItem  :prop="applyContent.position">
                          <Input :border="false" v-model="applyContent.position" readonly></Input>
                        </FormItem>
                      </Col>
                    </Row>
                  </td>
                </tr>

                <tr>
                  <td class="firstTr">出发地</td>
                  <td colspan="2">
                    <Row>
                      <Col >
                        <FormItem :prop="applyContent.origin">
                          <Input :border="false" v-model="applyContent.origin"></Input>
                        </FormItem>
                      </Col>
                    </Row>
                  </td>
                  <td class="firstTr">目的地</td>
                  <td colspan="2">
                    <Row>
                      <Col >
                        <FormItem :prop="applyContent.address">
                          <Input :border="false" v-model="applyContent.address"></Input>
                        </FormItem>
                      </Col>
                    </Row>
                  </td>
                </tr>
                <tr>
                  <td class="firstTr">出发时间</td>
                  <td colspan="2">
                    <Row>
                      <Col :span="24">
                        <FormItem :prop="applyContent.startDate">
                          <DatePicker type="datetime" v-model="applyContent.startDate"></DatePicker>
                        </FormItem>
                      </Col>
                    </Row>
                  </td>
                  <td class="firstTr">计划返回时间</td>
                  <td colspan="2">
                    <Row>
                      <Col :span="24">
                        <FormItem :prop="applyContent.endDate">
                          <DatePicker type="datetime" v-model="applyContent.endDate"></DatePicker>
                        </FormItem>
                      </Col>
                    </Row>
                  </td>
                </tr>
                <tr>
                  <td class="firstTr">经费支出方式</td>
                  <td colspan="2">
                    <Row>
                      <Col :span="24">
                        <FormItem :prop="applyContent.pay">
                          <RadioGroup v-model="applyContent.pay" >
                            <Radio  style="margin-right: 10px;" v-for="item in payType" :key="item.label" :label="item.label">{{item.type}}</Radio>
                          </RadioGroup>
                        </FormItem>
                      </Col>
                    </Row>
                  </td>
                  <td class="firstTr">申请金额</td>
                  <td colspan="2">
                    <Row>
                      <Col >
                        <FormItem :prop="applyContent.amount">
                          <Input v-model="applyContent.amount" :border="false" placeholder="个人垫付无需填写"/>
                        </FormItem>
                      </Col>
                    </Row>
                  </td>
                </tr>
                <tr>
                  <td colspan="6">
                    <Row>
                      <Col :xs="24" :sm="21">
                        <FormItem label="预计出行路线:" :label-width="115"  :prop="applyContent.route">
                          <Input v-model="applyContent.route" :border="false" type="textarea" :rows="3" />
                        </FormItem>
                      </Col>
                    </Row>
                  </td>
                </tr>
                <tr>
                  <td colspan="6">
                    <Row>
                      <Col :xs="24" :sm="21">
                        <FormItem label="任务及事由:" :label-width="100"  :prop="applyContent.desc">
                          <Input v-model="applyContent.desc" :border="false" type="textarea" :rows="4" show-word-limit maxlength="200"/>
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
                      <FormItem label="负责人:" :label-width="130"  style="margin: 20px">
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
                      <FormItem label="负责人:" :label-width="130"  style="margin: 20px">
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
                        <FormItem label="财务部意见:" :label-width="130" >
                          <!-- <Input :border="false"></Input> -->
                        </FormItem>
                      </Col>
                    </Row>
                    <br>
                    <Row>
                      <Col :span="16" :offset="4">
                      <FormItem label="负责人:" :label-width="130"  style="margin: 20px">
                          <!-- <Input :border="false"></Input> -->
                        </FormItem>
                      </Col>
                    </Row>
                  </td>
                  <td colspan="3">
                    <Row>
                      <Col :span="16">
                        <FormItem label="总经理意见:" :label-width="130" >
                        </FormItem>
                      </Col>
                    </Row>
                    <br>
                    <Row>
                      <Col :span="16" :offset="4">
                        <FormItem label="负责人:" :label-width="130"  style="margin: 20px">
                        </FormItem>
                      </Col>
                    </Row>
                  </td>
                </tr>
              </table>
            </div>
          </Card>
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IviewApplyevection',
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
    }
  },
  data() {
    return {
       payType: [
        {label: '0', type: '预放款'},
        {label: '1', type: '个人垫付'},        
      ],
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="less" scoped>
@import './index.less';
</style>

<template>
  <div>
    <Card :padding="8">
      <!-- <Row :gutter="10">
        <Col :span="12">
          <Card dis-hover :padding="10">
              <div>
                <span style="margin: 0px 24px 0px 10px"><a href="#">02月08日- 02月19日</a></span>
                <span >状态:&nbsp;
                  <span style="color: #3582fb">开启</span>
                  <span style="display: inline-block;width: 150px;margin: 0px 10px">
                    <Progress :percent="25" status="active"/>
                  </span>
                  
                  </span>
              </div>
              <div class="par" style="display: flex;">
                <div class="chid" style="flex: 1; padding-top: 10px;text-align: center;">
                  <div style="margin-top: 12px;">
                    <i class="i-icon icon-xinshenqing" style="margin: 0px 8px;fontSize: 16px"></i>
                    需求个数</div>
                  <div style="margin-top: 6px;font-size: 23px;color: #3582fb;     fontWeight: 600;">15</div>
                </div>
                <div class="chid" style="flex: 1; padding-top: 10px;text-align: center;">
                  <div style="margin-top: 12px;">
                    <i class="i-icon icon-renwuguanli-02" style="margin: 0px 8px;fontSize: 16px"></i>
                    任务个数</div>
                  <div style="margin-top: 6px;font-size: 23px;color: #3582fb;fontWeight: 600;">15</div>
                </div>
                <div class="chid" style="flex: 1; padding-top: 10px;text-align: center;">
                  <div style="margin-top: 12px;">
                    <i class="i-icon icon-tupianpachong-02" style="margin: 0px 8px;fontSize: 16px"></i>
                    缺陷个数</div>
                  <div style="margin-top: 6px;font-size: 23px;color: #3582fb;fontWeight: 600;">15</div>
                </div>
              </div>
          </Card>
        </Col>
        
        <Col :span="12">
          <Card dis-hover :padding="10">
            <div style="minHeight: 104px;maxHeight: 104px;overflow: auto;">
              <div style="margin: 0px 10px">迭代目标</div>
              <div style="fontSize: 12px;color: rgba(0, 0, 0, 0.45);">
                
                <Input v-model="textareaVal" prefix="icon-rizhoubao-02" :border="false" type="textarea" :rows="3" placeholder="请添加你的迭代目标..." />
              </div>
            </div>
          </Card>
        </Col>
      </Row> -->
      
      <Tabs v-model="tab">
        <TabPane label="迭代" icon="md-locate" name="Iteration"></TabPane>
        <TabPane label="仪表盘" icon="md-speedometer" name="ProSpeedometer"></TabPane>
        <TabPane label="文档" icon="ios-ionic" name="ProTask"></TabPane>
        <TabPane label="信息" icon="md-paper" name="ProBug"></TabPane>
        <!-- <TabPane label="我的工作项" icon="md-code-working" name="ProBug"></TabPane> -->
      </Tabs>
      <component :is="tab"></component>
    </Card>
    
  </div>
</template>
<script>
import {ATable} from '_c/table'
import Iteration from './iteration.vue'
import ProSpeedometer from './proSpeedometer.vue'
import ProDemand from './components/proDemand.vue'
import ProTask from './components/proTask.vue'
import ProBug from './components/proBug.vue'
export default {
  name: 'IviewProdetail',
  components: { ATable, ProSpeedometer,ProDemand, ProTask,ProBug, Iteration },
  data() {
    return {
      tab: this.$route.query['tab'] || 'Iteration',
      textareaVal: '',
    }
  },

  mounted() {
  },

  methods: {
    
  },


};

</script>

<style lang="less" scoped>
/deep/.ivu-select-selection {
    color: #3582fb;
    border: 1px solid #3582fb; 
    .ivu-select-arrow {
      color: #3582fb;
      // display: none;
    }
}
</style>
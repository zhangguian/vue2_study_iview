
<template>
  <div>
    <Card :padding="8">
      <Tabs v-model="tab">
        <TabPane label="迭代" icon="md-locate" name="Iteration"></TabPane>
        <TabPane label="仪表盘" icon="md-speedometer" name="ProSpeedometer"></TabPane>
        <TabPane label="文档" icon="ios-ionic" name="ProTask"></TabPane>
        <TabPane label="信息" icon="md-paper" name="ProBug"></TabPane>
        <TabPane label="我的工作项" icon="md-code-working" name="MyWork"></TabPane>
      </Tabs>
      <component :is="tab" :proId="proId"></component>
    </Card>
    
  </div>
</template>
<script>
import Iteration from './iteration.vue'
import ProSpeedometer from './proSpeedometer.vue'
import ProDemand from './components/proDemand.vue'
import ProTask from './components/proTask.vue'
import ProBug from './components/proBug.vue'
import MyWork from './components/myWork.vue'
export default {
  name: 'IviewProdetail',
  components: { ProSpeedometer,ProDemand, ProTask,ProBug, Iteration, MyWork },
  data() {
    return {
      tab: this.$route.query['tab'] || 'Iteration',
      textareaVal: '',
      proId: this.$route.query.id
    }
  },

  mounted() {
    console.log('this.$route.query', this.$route.query)
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
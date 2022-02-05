
<template>
  <Card :bordered="false" style="height: 100%">
    <Tabs value="baseInfo">
      <TabPane label="基本信息" name="baseInfo">
        <base-info />
      </TabPane>
      <TabPane label="标签二" name="name2">标签二的内容</TabPane>
    </Tabs>
  </Card>
</template>

<script>
import BaseInfo from './baseInfo.vue'
export default {
  name: 'IviewEditor',

  components: {BaseInfo},

  data() {
    return {
     
    };
  },

  mounted() {
    
  },

  methods: {
  
  },
};
</script>

<style lang="less" scoped>

</style>
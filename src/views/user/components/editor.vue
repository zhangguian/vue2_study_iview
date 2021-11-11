<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-11-05 09:05:20
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-11-05 09:16:07
-->
<template>
  <Card :bordered="false">
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
<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-11-08 21:30:07
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-11-11 13:41:13
-->
<template>
  <div>
    <pro-header />
    <Row>
      <Col :span="16">
        <pro-list />
      </Col>
    </Row>
    <Row>
      <Col :span="16">
        
      </Col>
    </Row>

  </div>
</template>

<script>
import ProHeader from './components/proHeader.vue'
import ProList from './components/proList.vue'
export default {
  name: 'IviewIndex',
  components: {ProHeader, ProList},
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
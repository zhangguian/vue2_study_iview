<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-09-10 20:50:22
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-11-08 17:49:16
-->
<template>
  <div>
    <Row :gutter="10">
      <Col :span="7">
        <info-card />
      </Col>
      <Col :span="17">
        <editor />
      </Col>
    </Row>
  </div>
</template>

<script>
import InfoCard from './components/infoCard.vue'
import Editor from './components/editor.vue'
export default {
  name: 'IviewUserInfo',

  components: { InfoCard, Editor },

  directives: {  },

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
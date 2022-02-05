
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
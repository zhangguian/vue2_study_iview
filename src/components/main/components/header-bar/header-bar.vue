
<template>
  <div class="header-bar">
     <!-- <custom-bread-crumb show-icon style="margin-left: 30px;" :list="breadCrumbList"></custom-bread-crumb> -->
    <div class="custom-content-con">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import './header-bar.less'
// import customBreadCrumb from './custom-bread-crumb'
export default {
  name: 'IviewHeaderBar',

  components: {  },

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
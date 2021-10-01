<!--
 * @Descripttion: 顶部栏
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-09-04 17:31:43
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-09-11 11:17:45
-->

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
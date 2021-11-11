<!--
 * @Descripttion:  面包屑
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-09-04 17:44:05
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-11-08 21:17:14
-->
<template>
  <div class="custom-bread-crumb">
    <Breadcrumb :style="{fontSize: `${fontSize}px`}">
      <BreadcrumbItem v-for=" item in list" :key="`custom-bread-${item.name}`" :to="item.to">
       <common-icon style="margin-right: 4px;" :type="item.icon || ''"/>
       {{ showTitle(item) }}
      </BreadcrumbItem>
    </Breadcrumb>
  </div>
</template>

<script>
import { showTitle } from '@/util/tools.js'
import CommonIcon from '_c/common-icon'
export default {
  // 面包屑
  name: 'IviewCustomBreadCrumb',

  components: { CommonIcon },

  props: {
    list: {
      type: Array,
      default: () => []
    },
    fontSize: {
      type: Number,
      default: 14
    }
  },

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
     showTitle (item) {
      return showTitle(item, this)
    },
  },
};
</script>

<style lang="less" scoped>

</style>
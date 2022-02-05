
<template>
  <div class="custom-bread-crumb">
    <Breadcrumb :style="{fontSize: `${fontSize}px`}">
      <BreadcrumbItem v-for=" item in list" :key="`custom-bread-${item.name}`" :to="item.to">
       {{ showTitle(item) }}
      </BreadcrumbItem>
    </Breadcrumb>
  </div>
</template>

<script>
import { showTitle } from '@/util/tools.js'
export default {
  // 面包屑
  name: 'IviewCustomBreadCrumb',

  components: {  },

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
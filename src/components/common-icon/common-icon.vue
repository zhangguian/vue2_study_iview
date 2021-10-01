<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-09-04 18:22:56
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-09-11 15:01:18
-->
<template>
  <div>
    <component :is="iconType" :type="iconName" :color="iconColor" :size="iconSize" />
  </div>
</template>

<script>
import Icons from '_c/icon/icons.vue'
export default {
  name: 'IviewCommonIcon',

  components: { Icons },

  props: {
    type: {
      type: String,
      require: true
    },
    color: String,
    size: Number
  },
  computed: {
    iconType () {
      return this.type.indexOf('_') === 0 ? 'Icons' : 'Icon'
    },
    iconName () {
      return this.iconType === 'Icons' ? this.getCustomIconName(this.type) : this.type
    },
    iconSize () {
      return this.size || (this.iconType === 'Icons' ? 12 : undefined)
    },
    iconColor () {
      return this.color || ''
    }
  },
  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    getCustomIconName (iconName) {
      return iconName.slice(1)
    }
  },
};
</script>

<style lang="less" scoped>

</style>

<template
>
  <Submenu :name="`${parentName}`">
    <template slot="title">
      <span>{{showTitle(parentItem)}}</span>
    </template>
    <template v-for="item in children">
      <side-menu-item v-if="showChildren(item)" :key="`menu-${item.name}`" :parent-item="item"></side-menu-item>
      <menu-item v-else :name="getNameOrHref(item)" :key="`menu-${item.name}`"><span>{{ showTitle(item) }}</span></menu-item>
    </template>
  </Submenu>
</template>

<script>
import mixin from './mixin'
export default {
  name: 'IviewSideMenuItem',
  mixins: [ mixin ],
  components: {  },
  props: { 
    parentItem: {
      type: Object,
      default: () => {}
    },
    theme: String,
    iconSize: Number
   },

  data() {
    return {
      
    };
  },
  computed: {
    parentName () {
      return this.parentItem.name
    },
    children () {
      return this.parentItem.children
    },
    textColor () {
      return this.theme === 'dark' ? '#fff' : '#495060'
    }
  },
  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="less" scoped>

</style>
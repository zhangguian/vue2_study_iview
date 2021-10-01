
<template>
  <div class="side-menu-wrapper">
    <slot></slot>
    <Menu ref="menu"
    :theme="theme" 
    :active-name="activeName" 
    :accordion="accordion" 
    :open-names="openedNames" 
    @on-select="handleSelect"  
    width="auto">
      <template v-for="item in menuList">
        <!-- 单级菜单 -->
        <template v-if="item.children && item.children.length === 1">
          <menu-item :name="item.children[0].name" :key="`menu-${item.children[0].name}`">
            <span>{{showTitle(item.children[0])}}</span>
            </menu-item>
        </template>
        <template v-else>
          <side-menu-item :key="`menu-${item.name}`" :parent-item="item">1234</side-menu-item>
        </template>
      </template>
    </Menu>
  </div>
</template>

<script>
import SideMenuItem from './side-menu-item.vue'
import mixin from './mixin'
import { getUnion } from '@/libs/tools'
import './side-menu.less'
export default {
  name: 'IviewSideMenu',
  mixins: [ mixin ],
  components: { SideMenuItem },

  props: {
    menuList: {
      type: Array,
      default () {
        return []
      }
    },
    activeName: {
      type: String,
      default: ''
    },
    accordion: {
      type: Boolean,
      default: true
    },
    theme: {
      type: String,
      default: 'dark'
    }
  },

  data() {
    return {
      openedNames: [] // 展开的 Submenu 的 name 集合
    };
  },


  methods: {
    
    handleSelect(name) {
      this.$emit('on-select', name);
    },
    getOpenedNamesByActiveName(name) {
      const res = this.$route.matched.map(item => item.name).filter(item => item !== name)
      return res
    },

  },
  watch: {
    // 当目标菜单被激活时，更新已展开的 Submenu 的 name 集合
    activeName (name) {
      if (this.accordion) this.openedNames = this.getOpenedNamesByActiveName(name)
      else this.openedNames = getUnion(this.openedNames, this.getOpenedNamesByActiveName(name))
    },
    // 手动更新展开的子目录
    openedNames () {
      this.$nextTick(() => {
        this.$refs.menu.updateOpened()
      })
    }
  },
   mounted () {
    this.openedNames = getUnion(this.openedNames, this.getOpenedNamesByActiveName(name))
  },
};
</script>

<style lang="less">
@import './side-menu.less';
</style>
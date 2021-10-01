<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-09-11 20:21:48
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-09-11 21:09:56
-->
<template>
  <div class="no-data">
    <Icon :size="size" :custom="`i-icon ${icon}`" :color="color" />
    <span>{{text}}</span>
  </div>
</template>

<script>
export default {
  name: 'IviewNoData',

  components: {  },

  props: {
    icon: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: '#caccd1'
    },
    size: {
      type: Number,
      default: 25
    },
    // style: {
    //   type: Object,
    //   default() {
    //     return {}
    //   }
    // }
  },

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
.no-data {
    // height: 60px;
    display: flex;
    // text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    span {
      position:relative;
      top: -16px
    }
    // i {
    //   height: 30px;
    //   font-size: 24px;
    //   margin-right: 16px;
    //   position: relative;
    //   top: 3px;
    // }
  }
</style>
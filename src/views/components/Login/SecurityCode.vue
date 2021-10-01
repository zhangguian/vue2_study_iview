<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-09-26 20:29:55
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-09-26 21:17:48
-->
<template>
  <div>
    <canvas id="canvas" :width="contnetWidth" :height="contentHeight"></canvas>
  </div>
</template>

<script>
export default {
  name: 'IviewSecuritycode',

  components: {  },

  props: {
    identifyCode: {
      type: String,
      default: '1234'
    },
    fontSizeMin: {
      type: Number,
      default: 16
    },
    fontSizeMax: {
      type: Number,
      default: 40
    },
    backGroundColorMin: {
      type: Number,
      default: 180
    },
    backGroundColorMax: {
      type: Number,
      default: 240
    },
    colorMin: {
      type: Number,
      default: 160
    }
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

</style>
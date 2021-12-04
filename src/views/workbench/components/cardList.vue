<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-10-27 12:53:23
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-12-02 22:04:33
-->
<template>
  <!-- <div > -->
    <div class="lits-item" :style="`maxHeight: ${maxHeight}px`">
      <div class="name_status">
        <span class="name">{{title}}</span>
        <Tag v-if="isNot" :color="tagColor">{{this.$tools.changeShow(this.status, this.$c.proStatusList)}}</Tag>
        <Time v-else :time="time1" style="fontSize: 12px;color: rgba(0, 0, 0, 0.45);"/>
      </div>
      <div  class="description omit">{{desc}}</div>
    </div>
</template>

<script>
import { color } from 'echarts';
export default {
  name: 'IviewNotifylist',
  props: {
    title: String,
    status: {
      type: Number
    },
    date: {
      type: Number
    },
    desc: String,
    isNot: {
      type: Boolean,
      default: true
    },
    isTisk: {
      type: Boolean,
      default: false
    },
    percent: {
      type: Number
    },
    maxHeight: {
      type: Number,
      default: 100
    },
    time: {
      type: String
    }
  },
  data() {
    return {
     
    };
  },
  computed: {
    time1() {
      return new Date(this.time).getTime() - 60 * 3 * 1000
    },
    // tag() {
    //    switch (Number(this.status)) {
    //     case 0:  return '未开始'
    //       break
    //     case 1: return '马上到期' 
    //       break
    //     case 2: return '已耗时3天' 
    //       break
    //     case 3: return '进行中' 
    //       break
    //     default: break
    //   }
    // },
    // proStatus() {
    //   const d = this.$c.proStatusList.map(item => {
    //     if(item.value == 3) {
    //       item.lable = `已耗时${this.date}天`
    //     } else {
    //       return item
    //     }
    //     console.log('item :>> ', item);
    //   })
    //   return d
    // },
    tagColor() {
       switch (Number(this.status)) {
        case 0:  return 'blue'
          break
        case 1: return 'green' 
          break
        case 2: return 'orange' 
          break
        case 3: return 'red' 
          break
        default: break
      }
    }
  },
  mounted() {
  },

  methods: {
    
  },
};
</script>

<style lang="less" scoped>
.lits-item {
    padding: 8px 7px;
    overflow: hidden;
    cursor: pointer;
    transition: all .3s;
    border-bottom: 1px solid #f0f0f0;
    // max-height: 100px;
  .name_status {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: rgba(0,0,0,.85);
  }
  .description {
    color: rgba(0,0,0,.45);
    font-size: 12px;
    margin-top: 6px;
    // line-height: 1.5715;

  }
}
</style>

<template>
  <!-- <div > -->
    <div class="lits-item" :style="`maxHeight: ${maxHeight}px`" @click="handleItem">
      <div class="name_status">
        <span class="name">{{title}}</span>
        <Tag v-if="isNot" :color="tagColor">{{this.$tools.changeShow(this.status, this.$c.proStatusList)}}</Tag>
        <Time v-else :time="time1" style="fontSize: 12px;color: rgba(0, 0, 0, 0.45);"/>
      </div>
      <div  class="description omit">{{desc}}</div>
    </div>
</template>

<script>
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
      default: 200
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
    handleItem() {
      this.$emit('handle-item');
    
    }
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
    &:hover {
      background-color: #eaf3fc;
    }
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
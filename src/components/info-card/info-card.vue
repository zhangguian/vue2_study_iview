<template>
  <Card class="info-card-wrapper" :shadow="shadow" :padding="0">
    <div class="content-con">
      <div class="left-area" :style="{background: color, width: leftWidth}">
        <common-icon class="icon" :type="icon" :color="iconColor" :size="iconSize"></common-icon>
      </div>
      <div class="right-area" :style="{width: rightWidth}">
        <div>
          <slot></slot>
        </div>
      </div>
    </div>
  </Card>
  <!-- <div></div> -->
</template>

<script>
import CommonIcon from '_c/common-icon/common-icon.vue'
export default {
  name: 'IviewInfoCard',

  components: { CommonIcon },

  props: {
    left: {
      type: Number,
      default: 36
    },
    color: {
      type: String,
      default: '#2d8cf0'
    },
    shadow: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    iconSize: {
      type: Number,
      default: 20
    },
    iconColor: {
      type: String,
      default: '#fff'
    }
  },

  data() {
    return {
      
    };
  },

  computed: {
    leftWidth () {
      return `${this.left}%`
    },
    rightWidth () {
      return `${100 - this.left}%`
    },
  },
  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="less" >
.common{
  float: left;
  height: 100%;
  display: table;
  text-align: center;
}
.size{
  width: 100%;
  height: 100%;
}
.middle-center{
  display: table-cell;
  vertical-align: middle;
}
.info-card-wrapper{
  .size;
  overflow: hidden;
  .ivu-card-body{
    .size;
  }
  .content-con{
    .size;
    position: relative;
    .left-area{
      .common;
      & > .icon{
        .middle-center;
      }
    }
    .right-area{
      .common;
      & > div{
        width: 100%;
        .middle-center;
      }
    }
  }
}
</style>
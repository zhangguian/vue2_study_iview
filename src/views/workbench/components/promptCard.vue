<template>
  <Card :bordered="false" >
    <div slot="title" class="card-title">
      <p :style="`fontSize: ${titleFontSize}px`">
        <svg class="icon" aria-hidden="true" :style="`fontSize: ${iconFontSize}px`">
          <use :xlink:href=" `#${icon}`" ></use>
        </svg>
        {{title}}
      </p>
      <div class="card-more pointer"><i class="i-icon icon-youhuihuodong-02"></i></div>
    </div>
    <div class="content" :style="`maxHeight: ${maxHeight}px`">
      <slot></slot>
    </div>
  </Card>
</template>

<script>
export default {
  name: 'IviewPromptcard',
  props: {
    titleFontSize: {
      type: String,
      default: '14'
    },
    iconFontSize: {
      type: String,
      default: '18'
    },
    icon: String,
    title: String,
    maxHeight: {
    type: Number,
    default: 300
    },
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
.card-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/deep/ .ivu-card-body {
  padding: 6px;
} 
/deep/ .ivu-card-head {
  padding: 7px 14px;
}
</style>
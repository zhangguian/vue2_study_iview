<template>
  <i :class="`iconfont icon-${type}`" :style="styles"></i>
</template>

<script>
export default {
  name: 'IviewIcons',

  components: {  },

  props: {
    type: {
      type: String,
      require: true
    },
    color: {
      type: String,
      default: '#5c6b77'
    },
    size: {
      type: Number,
      default: 16
    }
  },
  computed: {
    styles() {
      return {
        fontSzie: `${this.size}px`,
        color: this.color
      }
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
<template>
  <div>
    <Spin fix v-if="spinShow">
      <Icon type="load-c" size="18" class="demo-spin-icon-load"></Icon>
      <div>Loading...</div>
    </Spin>
  </div>
</template>

<script>
export default {
  name: 'Vue2IviewStudyLoading',

  data () {
    return {

    };
  },

  mounted () {

  },

  methods: {
    spinShow () {
      return this.$store.state.isGlobalSpin;
    }
  },
};
</script>

<style lang="less" scoped>
.demo-spin-icon-load {
  animation: ani-demo-spin 1s linear infinite;
}
</style>
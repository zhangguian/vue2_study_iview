<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-11-16 22:49:05
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-11-24 00:04:37
-->
<template>
  <div>
    <Table 
    :columns="table.columns" 
    :data="data" 
    :size="size" 
    highlight-row 
    @on-current-change="currentChange">
      <div slot="header" style="display: flex; justify-content: satart; align-items: center;">
        <slot style="margin: 0px 10px"></slot>
        <template v-if="table.btns">
          <i-button v-for="(btn, index) in table.btns" :key="index"  style="fontSize: 14px" :icon="btn.icon" size="small"
            @click="onBtnClick(btn)" :type="btn.type || 'info'" 
          >{{btn.text}}</i-button>
        </template>
      </div>
    </Table>
    <Page :total="40" size="small"  show-total />
  </div>
</template>

<script>
export default {
  name: 'IviewTable',
  props: {
    table: {
      type: Object,
      default() {
        return {}
      }
    },
    data: {type: Array,default: []},
    size: {
      type:String,
      default: 'default'
      },
  },
  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    onBtnClick(btn) {
      btn.cb({data: this.data})
    },
    currentChange(currentRow,oldCurrentRow) {
      this.$emit('currentChange', {currentRow,oldCurrentRow});
    }
  },
};
</script>

<style lang="less" scoped>
/deep/ .ivu-table-title, .ivu-table-footer {
    height: 28px;
    line-height: .5px;
    border-bottom: 1px solid #e8eaec;
}
/deep/ .ivu-table th {
    // height: 40px;
    white-space: nowrap;
    overflow: hidden;
    background-color: #dcdee224;
    /* color: #000; */
    //  font-weight: 500; 
}
</style>
<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-11-16 22:49:05
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-11-22 18:07:05
-->
<template>
  <div>
    <Table :columns="table.columns" :data="data" :size="size">
      <div slot="header" style="display: flex; justify-content: end; align-items: center;text-align: right; padding: 0px 10px;">
        <slot style="margin: 2px 10px"></slot>
        <template v-if="table.btns">
          <i-button v-for="(btn, index) in table.btns" :key="index"  :icon="btn.icon" :size="size"
            @click="onBtnClick(btn)" :type="btn.type || 'dashed'" 
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
  },
};
</script>

<style lang="less" scoped>
/deep/ .ivu-table-title, .ivu-table-footer {
    height: 40px;
    line-height: 1.5;
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
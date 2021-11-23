<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-11-12 15:52:17
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-11-23 17:39:40
-->
<template>
  <div>
    <div style="text-align: right">
      <slot name="other"></slot>
      <Input v-model="value" placeholder="Enter something..." style="width: 300px;" search clearable @on-enter="search"/>
    </div>
    <div class="pro-list">
      <Row>
        <Col :span="6"  v-for="(item, index) in data" :key="index">
        <div class="pro-item" @click="handlePro(item)">
          <div class="pro-title">
            <Avatar icon="ios-person" size="default" />
            <span class="pro-name">{{item.proName}}</span>
          </div>
          <div class="pro-desc">{{item.proDesc}}</div>
          <div class="pro-publish">
            <a href="#" style="color: rgba(0, 0, 0, 0.45);" ><span>飞天大盗</span></a>
            <div class="time" ><Time :time="time1(item.time)" /></div>
          </div>
        </div>
        </Col>
      </Row>
    </div>
    <div  style="text-align: right">
      <Page :total="total" :page-size="mPageSize"
          :current.sync="pageNum" :size="size"
          @on-page-size-change="onPageSizeChange"
          @on-change="onPageChange"
          :page-size-opts="pageSizeOpts" :simple="simple"
          show-sizer show-elevator show-total
          data-flex="main:right"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IviewRecttable',
  props: {
    pageSize: {type: Number, default: 10},
    simple: Boolean,
    border: {type: Boolean, default: false},
    size: String,
    data: {type: Array,default: []},
  },
  data() {
    return {
      value: '',
      total: this.data.length,
      mPageSize: this.pageSize,
      pageNum: 1,
    };
  },
  computed: {
    pageSizeOpts() {
      return [...new Set([10, 20, 30, 40, this.pageSize])].sort((a, b) => a - b)
    },
  },
  mounted() {
    
  },

  methods: {
    time1(time) {
      return new Date(time).getTime() - 60 * 3 * 1000
    },
    search() {
      console.log('搜索 :>> ', '搜索');
    },
    onPageSizeChange(pageSize) {
      this.mPageSize = pageSize
      // this.getData()
    },
    onPageChange(pageNum) {
      this.pageNum = pageNum
      // this.getData()
    },
    handlePro(item) {
      this.$emit('handlePro', item);
    }
  },
};
</script>

<style lang="less" scoped>
  .pro-list {
    display: flex;
    flex-flow:  wrap;
    margin: 10px 0px;
    .pro-item {
      border: 0;
      border-radius: 0;
      padding: 10px;
      // width: 20%;
      margin: 6px;
      box-shadow: 1px 0 0 0 #f0f0f0, 0 1px 0 0 #f0f0f0, 1px 1px 0 0 #f0f0f0, inset 1px 0 0 0 #f0f0f0, inset 0 1px 0 0 #f0f0f0;
      transition: all .3s;
      .pro-title {
        margin-bottom: 8px;
        .pro-name {
          margin-left: 12px;
          color: rgba(0,0,0,.85);
          font-size: 14px;
        }
      }
      .pro-desc {
        height: 44px;
        overflow: hidden;
        color: rgba(0,0,0,.45);
        line-height: 22px;
      }
      .pro-publish {
        font-size: 12px;
        color: rgba(0, 0, 0, 0.45);
        margin-top: 8px;
        display: flex;
        justify-content: space-between;
        .time {
        }
      }
    }
    .pro-item:hover {
      position: relative;
      z-index: 1;
      box-shadow: 0 1px 2px -2px rgba(0, 0, 0 , 16%), 0 3px 6px 0 rgba(0, 0, 0, 12%), 0 5px 12px 4px rgba(0, 0, 0, 9%);
    } 
  }
  .pro-list:before {
    display: table;
    content: "";
  }

</style>
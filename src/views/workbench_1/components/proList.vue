<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-11-11 13:29:53
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-11-15 09:59:34
-->
<template>
     <div class="pro-content">
      <Card :bordered="false" dis-hover>
        <p slot="title">进行中的项目</p>
        <a @click="toAllPro" slot="extra" ><Icon type="ios-loop-strong"></Icon>全部项目</a>
        <div class="pro-list">
          <div class="pro-item" v-for="(item, index) in proList" :key="index" @click="handlePro(item)">
            <div class="pro-title">
              <Avatar icon="ios-person" size="default" />
              <span class="pro-name">{{item.proName}}</span>
            </div>
            <div class="pro-desc">{{item.proDesc}}</div>
            <div><Progress :percent="item.proPercent" status="active"  /></div>
          </div>
        </div>
      </Card>
    </div>
</template>

<script>
export default {
  name: 'IviewProlist',
  props: {
    proList: {
      typeof: Array,
      default() {
        return []
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
    toAllPro() {
      this.$router.push({
        name: '/project_management/allPro_page',
        query: {}
      })
    },
    handlePro(item) {
      this.$router.push({
        name: '/project_management/proDetail_page',
        query: {}
      })
      console.log('item :>> ', item);
    }
  },
};
</script>

<style lang="less" scoped>
.pro-content {
  margin: 10px 0;
  // padding: 10px;
  // background-color: rgb(255, 255, 255);
  // padding: 10px;
  .pro-list {
    display: flex;
    flex-flow:  wrap;
      .pro-item {
      border: 0;
      border-radius: 0;
      padding: 10px;
      width: 33.33%;
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
  
}
</style>
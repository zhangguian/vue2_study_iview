<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-11-11 10:54:47
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-12-03 16:19:16
-->
<template>
  <div>
     <div class="header">
      <div class="user-box">
        <Avatar icon="ios-person" size="60" :src="userInfo.userAvatar" />
        <div class="user-info">
          <div class="user-text">早安，{{userInfo.user}} ，祝你开心每一天！</div>
          <div>{{userInfo.company}}－{{userInfo.department}}－{{userInfo.position}}</div>
        </div>
      </div>
      <slot></slot>
      <!-- <div class="remind">
        <div class="remind-item">
          <div class="remind-item-title">需求</div>
          <div class="remind-item-num">25</div>
        </div>
        <div class="remind-item">
          <div class="remind-item-title">缺陷</div>
          <div class="remind-item-num">25</div>
        </div>
        <div class="remind-item">
          <div class="remind-item-title">已完成</div>
          <div class="remind-item-num">25</div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'IviewProheader',
  props: {
    userInfo: {
      type: Object,
      default() {
        return {}
      }
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
.header {
  display: flex;
  height: 100px;
  background-color: rgb(255, 255, 255);
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  .user-box {
    display: flex;
    .user-info {
      margin-left: 24px;
      color: rgba(0,0,0,.45);
      line-height: 22px;
      .user-text {
        margin-bottom: 12px;
        color: rgba(0,0,0,.85);
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
      }
    }
  }
  .remind {
    min-width: 242px;
    margin-left: 88px;
    text-align: right;
    .remind-item {
      position: relative;
      display: inline-block;
      padding: 0 32px;
      .remind-item-title {
        margin-bottom: 4px;
        color: rgba(0,0,0,.45);
        font-size: 18px;
      }
      .remind-item-num {
        color: rgba(0,0,0,.85);
        font-size: 24px;
      }
    }
  }
}
</style>
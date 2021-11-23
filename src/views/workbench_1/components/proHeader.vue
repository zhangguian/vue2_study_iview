<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-11-11 10:54:47
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-11-11 11:08:33
-->
<template>
  <div>
     <div class="header" style="height: 100px; backgroundColor: #fff">
      <div style="display: flex;">
        <Avatar icon="ios-person" size="60" />
        <div style="    margin-left: 24px;
    color: rgba(0,0,0,.45);
    line-height: 22px;">
          <div style="margin-bottom: 12px;
    color: rgba(0,0,0,.85);
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;">早安，Zhang Gui An ，祝你开心每一天！</div>
          <div>大圣科技－某某技术部－前端工程师</div>
        </div>
      </div>
      <div style="    min-width: 242px;
    margin-left: 88px;
    text-align: right;">
        <div class="stat-item">
          <div style="       margin-bottom: 4px;
    color: rgba(0,0,0,.45);
    font-size: 18px;">需求</div>
          <div style="    color: rgba(0,0,0,.85);
    font-size: 24px;">25</div>
        </div>
        <div class="stat-item">
          <div style="       margin-bottom: 4px;
    color: rgba(0,0,0,.45);
    font-size: 18px;">缺陷</div>
          <div style="    color: rgba(0,0,0,.85);
    font-size: 24px;">25</div>
        </div>
        <div class="stat-item">
          <div style="       margin-bottom: 4px;
    color: rgba(0,0,0,.45);
    font-size: 18px;">已完成</div>
          <div style="    color: rgba(0,0,0,.85);
    font-size: 24px;">25</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IviewProheader',

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

}
.stat-item {
    position: relative;
    display: inline-block;
    padding: 0 32px;
}
</style>
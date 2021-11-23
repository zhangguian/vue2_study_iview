<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-11-11 23:21:26
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-11-12 13:15:07
-->
<template>
  <div style="margin: 10px 0px">
    <Card :bordered="false" div-hover>
      <p slot="title">项目动态</p>
      <ul style="list-style: none;">
        <li class="dynamic-item">
          <div class="avatar">
            <Avatar  icon="ios-person" size="default" />
          </div>
          <div class="dynamic-content">
            <div class="dynamic-info" >
              <span>
                <a href="#" style="color: rgba(0,0,0,.85);">猪猪兔兔</a>&nbsp;
                <span>在&nbsp;<a href="#">飞天疾患团</a>&nbsp;</span>更新项目
                <a href="#">飞天计划</a>
              </span>
            </div>
            <div class="time"><Time :time="time1" /></div>
          </div>
        </li>
        <li class="dynamic-item">
          <div class="avatar">
            <Avatar  icon="ios-person" size="default" />
          </div>
          <div class="dynamic-content">
            <div>
              <span >
                <a href="#" style="color: rgba(0,0,0,.85);">猪猪兔兔</a>&nbsp;
                <span>在&nbsp;<a href="#">飞天疾患团</a>&nbsp;</span>更新项目
                <a href="#">飞天计划</a>
              </span>
            </div>
            <div class="time"><Time :time="time1" /></div>
          </div>
        </li>
        <li class="dynamic-item">
          <div class="avatar">
            <Avatar  icon="ios-person" size="default" />
          </div>
          <div class="dynamic-content">
            <div>
              <span >
                <a href="#" style="color: rgba(0,0,0,.85);">猪猪兔兔</a>&nbsp;
                <span>在&nbsp;<a href="#">飞天疾患团</a>&nbsp;</span>更新项目
                <a href="#">飞天计划</a>
              </span>
            </div>
            <div class="time"><Time :time="time1" /></div>
          </div>
        </li>
        <li class="dynamic-item">
          <div class="avatar">
            <Avatar  icon="ios-person" size="default" />
          </div>
          <div class="dynamic-content">
            <div>
              <span >
                <a href="#" style="color: rgba(0,0,0,.85);">猪猪兔兔</a>&nbsp;
                <span>在&nbsp;<a href="#">飞天疾患团</a>&nbsp;</span>更新项目
                <a href="#">飞天计划</a>
              </span>
            </div>
            <div class="time" ><Time :time="time1" /></div>
          </div>
        </li>

      </ul>
     
    </Card>
  </div>
</template>

<script>
export default {
  name: 'IviewProdynamic',

  data() {
    return {
      time: '2021-11-12 11:08:07'
    };
  },
  computed: {
    time1() {
      return new Date(this.time).getTime() - 60 * 3 * 1000
    },
  },
  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="less" scoped>
.dynamic-item {
  display: flex;
  margin-bottom: 13px;
  padding: 10px 0px;
  border-bottom: 1px solid #f0f0f0;
  .dynamic-content {
    margin-left: 16px;
    .time {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.45);
      margin-top: 8px;
    }
  }
}
</style>
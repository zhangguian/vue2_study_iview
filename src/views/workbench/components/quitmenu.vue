
<template>
  <Card :bordered="false">
    <div class="quitmenu-box">
      <div class="quitmenu-item pointer" @click="waitDone">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-daiban" ></use>
        </svg>
        <Badge :count="messageUnreadCount" type="primary">
            <div style="margin: 10px">项目待办</div>
        </Badge>
      </div>
      <div class="quitmenu-item pointer" @click="approval">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shenpi" ></use>
        </svg>
        <Badge :count="messageUnreadCount" type="primary">
            <div style="margin: 10px">待我审批</div>
        </Badge>
      </div>
      <div class="quitmenu-item pointer" @click="myApplication">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gongzuobaogao" ></use>
        </svg>
        <Badge :count="messageUnreadCount" type="primary">
            <div style="margin: 10px">我的申请</div>
        </Badge>
      </div>
           
    </div>
  </Card>
</template>

<script>
export default {
  name: 'IviewQuitmenu',
  props: {
  },
  data() {
    return {
      messageUnreadCount: 13,
      iconColor: '#3582fb'
    };
  },

  mounted() {
    
  },

  methods: {
    waitDone() {
    },
    approval() {
    },
    myApplication() {
    }
  },
};
</script>

<style lang="less" scoped>
.font {
  font-size: 30px;
}
.icon {
  &:extend(.font);
}
.quitmenu-box { 
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  .quitmenu-item {
    line-height: initial;
    padding: 20px;
    margin: 3px;
  }
}
</style>
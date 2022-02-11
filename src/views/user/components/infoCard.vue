
<template>
  <Card :bordered="false" class="info-box">
    <div class="avater">
      <Avatar icon="ios-person" size="80" :src="userInfo.avatar"/>
      <span class="name" style="padding: 7px;fontSize: 25px">{{userInfo.username}}</span>
      <span class="introduce" style="padding: 7px;fontSize: 12px;color: #626b7d;">{{userInfo.introduce}}</span>
    </div>
    <ul class="user-info">
      <li><i class="i-icon icon-meiyuemubiaofenxi-02"></i>{{userInfo.born}}</li>
      <li><i class="i-icon icon-meiyuemubiaofenxi-02"></i>{{userInfo.sex == '0' ? '男' : '女'}}</li>
      <li><i class="i-icon icon-qiyebanguanli-02"></i>集团 - 事业群 - 技术部</li>
      <li><i class="i-icon icon-qiyebanliebiao-02"></i>{{userInfo.address}}</li>
      <li><i class="i-icon icon-tupianpachong-02"></i>{{userInfo.skills}}</li>
      <li>
        <div class="hor"></div>
        <div style="color: #626b7d; fontSize: 14px">个性标签</div>
        <Tag color="blue" style="margin: 0px 5px" v-for="(item, index) in  this.$tools.splitStr(userInfo.tag, '、')" :key="index">{{item}}</Tag>
      </li>
    </ul>
    <div></div>
  </Card>
</template>

<script>
export default {
  name: 'IviewInfocard',
  data() {
    return {
      userInfo: JSON.parse(sessionStorage.getItem('userInfo')),
    };
  },

  mounted() {
  },

  methods: {
  },
};
</script>

<style lang="less" scoped>
.info-box {
  padding: 20px;
  text-align: center;
  height: 100%;
  .avater {
    display: flex;
    /* justify-content: space-around; */
    align-items: center;
    flex-direction: column;
    /* height: 200px; */
  }
  .user-info {
    margin-top: 18px;
    line-height: 30px;
    text-align: left;
    list-style: none;
    padding-left: 38px;
  }
  .i-icon {
    margin-right: 8px;
  }
  .hor {
    margin: 8px 0px 28px 0px;
    background-color: #dcdfe6;
    height: 1px;
  }
}
</style>
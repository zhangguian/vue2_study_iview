<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-11-05 08:53:30
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-11-05 11:04:10
-->
<template>
  <Card :bordered="false" class="info-box">
    <div class="avater">
      <Avatar icon="ios-person" size="80" :src="userAvatar"/>
      <span class="name" style="padding: 7px;fontSize: 25px">zhangguian</span>
      <span class="introduce" style="padding: 7px;fontSize: 12px;color: #626b7d;">富在术数，不在劳身；利在势居，不在力耕。</span>
    </div>
    <ul class="user-info">
      <li><i class="i-icon icon-meiyuemubiaofenxi-02"></i>1998-01-06</li>
      <li><i class="i-icon icon-meiyuemubiaofenxi-02"></i>男</li>
      <li><i class="i-icon icon-qiyebanguanli-02"></i>集团 - 事业群 - 技术部</li>
      <li><i class="i-icon icon-qiyebanliebiao-02"></i>中国 • 广东省 • 深圳市</li>
      <li><i class="i-icon icon-tupianpachong-02"></i>JavaScript、HTML、CSS、Vue、Node、HTML、CSS、Vue、Node</li>
      <li>
        <div class="hor"></div>
        <div style="color: #626b7d; fontSize: 14px">个性标签</div>
        <Tag color="blue" style="margin: 0px 5px">帅气的秃头男孩</Tag>
        <Tag color="blue" style="margin: 0px 5px">没爱心</Tag>
        <Tag color="blue" style="margin: 0px 5px">没耐心</Tag>
        <Tag color="blue" style="margin: 0px 5px">帅</Tag>
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
      userAvatar: require('@/assets/avatar.jpg'),
      obj: "JavaScript、HTML、CSS、Vue、Node、HTML、CSS、Vue、Node"
    };
  },

  mounted() {
   this.chage()
  },

  methods: {
     chage() {
      let a = this.$tools.splitStr(this.obj, '、')
      console.log('a :>> ', a);
    }
  },
};
</script>

<style lang="less" scoped>
.info-box {
  padding: 20px;
  text-align: center;
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
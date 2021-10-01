<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-09-26 15:10:48
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-09-26 20:13:00
-->
<template>
  <div class="login">
    <div class="login-box">登录</div>
    <div class="login-content">
      <Form>
        <Tabs>
          <TabPane label="账号密码登录">
            <login-account></login-account>
          </TabPane>
          <TabPane label="验证码登录" >标签二的内容</TabPane>
          <TabPane label="滑块登录">标签三的内容</TabPane>
        </Tabs>
        <FormItem>
          <Checkbox v-model="single">自动登录</Checkbox>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
import LoginAccount from './LoginAccount.vue'
export default {
  name: 'IviewLogin',

  components: { LoginAccount },

  directives: {  },

  data() {
    return {
      single: true
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .login-box {
    width: 100%;
    margin: auto;
    text-align: center;
    color: rgba(0, 162, 255, 0.8);
    font-size: 25px
  }
  .login-content {
    padding: 20px;
  }
}
</style>
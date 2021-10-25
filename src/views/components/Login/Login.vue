<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-09-26 15:10:48
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-10-24 06:57:13
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
          <TabPane label="手机号登录" >
            <login-phone></login-phone>
          </TabPane>
          <TabPane label="滑块登录">
            <login-slider />
          </TabPane>
        </Tabs>
        <FormItem>
          <Checkbox v-model="single">自动登录</Checkbox>
          
        </FormItem>
        <FormItem class="login-item">
          <Button type="primary" class="login-btn" @click="loginSubmit">登 录</Button>
        </FormItem>
      </Form>
      
    </div>
  </div>
</template>

<script>
  import LoginAccount from './LoginAccount.vue'
  import LoginPhone from './LoginPhone.vue'
  import LoginSlider from './LoginSlider.vue'
export default {
  name: 'IviewLogin',

  components: { LoginAccount,LoginPhone, LoginSlider },

  directives: {  },

  data() {
    return {
      single: true
    };
  },

  mounted() {
    
  },

  methods: {
    loginSubmit() {
      this.$Notice.success({
        title: '欢迎登录',
      })
    }
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
    color: #FF8C00;
    font-size: 25px
  }
  .login-content {
    padding: 20px;
    width: 400px;
    .login-item {
      text-align: center;
      .login-btn {
        // width: 140px;
        font-size: 16px;
        padding: 0px 80px;
        margin: auto;
      }
    }
    
  }
}
</style>
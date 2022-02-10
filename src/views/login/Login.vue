
<template>
  <div class="login">
    <!-- <img src="'/src/assets/login_bg.jpg" alt=""> -->
    <div class="login-box">
      <div class="login-title">
        <router-link to="/">
          <!-- <img src="@/assest/images/common/logo.png" alt="logo" class="logo" /> -->
          <span class="title">ANJING学习管理系统</span>
        </router-link>
      </div>
      <div class="login-content">
        <Form>
          <Tabs @on-click="getLoginType">
            <TabPane label="账号密码登录" name="account">
              <login-account ref="account"></login-account>
            </TabPane>
            <TabPane label="手机号登录" name="phone">
              <login-phone ref="phone"></login-phone>
            </TabPane>
            <TabPane label="滑块登录" name="slider">
              <login-slider ref="slider"></login-slider>
            </TabPane>
          </Tabs>

          <FormItem>
            <div style="color: #515a6e; text-align: left">
              <Checkbox v-model="single">自动登录</Checkbox>
            </div>
          </FormItem>
          <FormItem class="login-item">
            <Button type="primary" class="login-btn" @click="loginSubmit">登 录</Button>
          </FormItem>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import LoginAccount from './LoginAccount.vue'
import LoginPhone from './LoginPhone.vue'
import LoginSlider from './LoginSlider.vue'
import { mapState } from 'vuex'
export default {
  name: 'IviewLogin',

  components: { LoginAccount, LoginPhone, LoginSlider },

  data () {
    return {
      tabName: 'account' || '',
      single: true
    };
  },

  mounted () {
  },
  created () {
  },
  methods: {
    getLoginType (name) {
      this.tabName = name
    },
    async loginSubmit () {
      let ACCOUNT = 'account'
      let PHONE = 'phone'
      let SLIDER = 'slider'
      if (this.tabName == ACCOUNT) {
        let { username, password, inputCode } = this.$refs.account.model
        if (!username || !password) return this.$Message.error('请输入用户名或密码')
        let codeText = this.$refs.account.codeText
        if (inputCode != codeText) {
          this.$Message.error('验证码错误！')
          this.$refs.account.drawCanvas()
        } else {
          const { data, err } = await this.$store.dispatch('login/logintest', { username, password })
          console.log('data', data);
          const {tokenList, member} = data.result
          console.log('data.code', member);
          if (data.code) {
            this.$Notice.success({ title: '欢迎登录' })
            window.localStorage.setItem('token', tokenList.accessToken)
            window.localStorage.setItem('userInfo', JSON.stringify(member))
            this.$store.commit('login/SET_LOGGED', {tokenList, userInfo: member});
            this.$router.push({
              name: 'workbench_page',
              query: {}
            })
          } else {
            this.$Message.error(data.code)
          }
        }

      } else if (this.tabName == PHONE) {

      } else if (this.tabName == SLIDER) {

      }

    }
  },
};
</script>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
  height: 100%;
  width: 100%;
  color: #fff;
  align-items: center;
  background: #f5f5f5 url("../../assets/background.svg") no-repeat 0 0;
  background-size: 100% 100%;
  .login-box {
    margin: auto;
    border-radius: 4px;
    .login-title {
      text-align: center;
      margin: 8px 0px;
      font-size: 25px;
      color: #000;
    }
    .login-content {
      padding: 20px;
      background: #fff;
      width: 400px;
      border-radius: 0px 8px 8px 0px;
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
}
/deep/ .ivu-tabs-nav {
  // color: #fff;
}
</style>
<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-09-26 15:11:37
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-12-16 10:48:51
-->
<template>
  <Form ref="model" :model="model" :rules="rules">
    <FormItem  prop="username">
      <Input v-model="model.username" size="large" placeholder="请输入帐户名" clearable>
        <Icon slot="prefix" type="md-person" :style="{ color: 'rgba(0,0,0,.25)' }"/>
      </Input>
    </FormItem>
    <FormItem  prop="password">
      <Input v-model="model.password" size="large" type="password"  placeholder="请输入密码" clearable >
        <Icon slot="prefix" type="md-lock" :style="{ color: 'rgba(0,0,0,.25)' }"/>
      </Input>
    </FormItem>

    <Row :gutter="0">
      <Col :span="16">
        <FormItem>
          <Input v-model="model.inputCode" size="large" type="text" placeholder="请输入验证码" clearable>
            <Icon slot="prefix" type="ios-outlet" :style="{ color: 'rgba(0,0,0,.25)' }"/>
          </Input>
        </FormItem>
      </Col>
      <Col :span="8" style="text-align: right">
        <!-- <NumVerify /> -->
      </Col>
    </Row>
  </Form>
</template>

<script>
// import NumVerify from '_c/identify/numVerify'
export default {
  
  name: 'IviewLoginaccount',

  components: {  },

  directives: {  },

  data() {
    return {
      model:{
        username: '',
        password: '',
        inputCode: ''
      },
      rules:{
        username: [
          { required: true, message: '请输入用户名!',trigger: 'blur' },
          // { validator: this.handleUsernameOrEmail }
        ],
        password: [{
          required: true, message: '请输入密码!', validator: 'click'
        }],
        inputCode: [{
          required: true, message: '请输入验证码!'
        }]
      }
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="less" scoped>

</style>
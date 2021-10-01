<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-09-26 15:11:37
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-09-26 20:23:51
-->
<template>
  <Form ref="from" :model="model" :rules="rules">
    <FormItem required prop="username">
      <Input v-model="model.username" placeholder="请输入帐户名">
        <Icon slot="prefix" type="md-person" :style="{ color: 'rgba(0,0,0,.25)' }"/>
      </Input>
    </FormItem>
    <FormItem required prop="password">
      <Input v-model="model.password" placeholder="请输入密码">
        <Icon slot="prefix" type="md-lock" :style="{ color: 'rgba(0,0,0,.25)' }"/>
      </Input>
    </FormItem>

    <Row :gutter="0">
      <Col :span="16">
        <FormItem>
          <Input v-model="model.inputCode" size="large" type="text" placeholder="请输入验证码">
            <Icon slot="prefix" type="ios-outlet" :style="{ color: 'rgba(0,0,0,.25)' }"/>
          </Input>
        </FormItem>
      </Col>
    </Row>
  </Form>
</template>

<script>
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
          { required: true, message: '请输入用户名!' },
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
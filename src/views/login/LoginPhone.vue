<template>
  <div>
    <Form ref="model" :model="model" :rules="rules">
      <FormItem prop="phone">
        <Input
          v-model="model.phone"
          size="default"
          placeholder="请输入手机号"
          clearable
        >
          <Icon
            slot="prefix"
            type="ios-phone-portrait"
            :style="{ color: 'rgba(0,0,0,.25)' }"
          />
        </Input>
      </FormItem>
      <Row :gutter="0">
        <Col :span="16">
          <FormItem>
            <Input
              v-model="model.inputCode"
              size="default"
              type="text"
              placeholder="请输入验证码"
              clearable
            >
              <Icon
                slot="prefix"
                type="ios-outlet"
                :style="{ color: 'rgba(0,0,0,.25)' }"
              />
            </Input>
          </FormItem>
        </Col>
        <Col :span="8" style="text-align: right">
          <div>
            <Button
              :disabled="state.smsSendBtn"
              class="getCaptcha"
              size="default"
              @click.stop.prevent="getCaptcha"
              v-text="(!state.smsSendBtn && '获取验证码') || state.time + ' s'"
            ></Button>
          </div>
        </Col>
      </Row>
    </Form>
  </div>
</template>

<script>
export default {
  name: "IviewLoginphone",

  components: {},

  directives: {},

  data() {
    return {
      model: {
        phone: "",
        inputCode: "",
      },
      //手机号登录用
      state: {
        time: 60,
        smsSendBtn: false,
      },
      rules: {
        phone: [
          { required: true, message: "请输入手机号!", trigger: "blur" },
          {
            validator: (rule, value, callback) => {
              if (this.$tools.phoneReg(value)) {
                callback();
              } else {
                callback("手机号码不正确");
              }
            },
            trigger: "blur",
          },
        ],
      },
    };
  },

  mounted() {},

  methods: {
    // 获取验证码
    getCaptcha(e) {
      e.preventDefault(); //阻止默认事件的发生
      let that = this;
      that.state.smsSendBtn = true;
      let interval = window.setInterval(() => {
        if (that.state.time-- <= 0) {
          that.state.time = 60;
          that.state.smsSendBtn = false;
          window.clearInterval(interval);
        }
      }, 1000);

      that.$Message.loading("验证码发送中..", 0);
    },
  },
};
</script>

<style lang="less" scoped>
.getCaptcha {
  // width: 90%;
}
</style>

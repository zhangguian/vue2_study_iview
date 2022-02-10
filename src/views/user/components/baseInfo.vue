
<template>
  <div>
    <Row :gutter="10">
      <Col :span="10">
        <Form ref="userform" v-model="userInfo" :label-width="80" >
          <FormItem label="姓名" prop="usrename">
            <Input v-model="userInfo.username" placeholder="Enter something..." clearable></Input>
          </FormItem>
          <FormItem label="性别" prop="sex">
            <Select v-model="userInfo.sex">
              <Option value="0">男</Option>
              <Option value="1">女</Option>
            </Select>
          </FormItem>
          <FormItem label="出生" prop="born">
            <!-- <Input v-model="userInfo.born" placeholder="Enter something..." > -->
              <DatePicker  type="date" v-model="userInfo.born" placeholder="Select date" style="width: 250px"></DatePicker>
            <!-- </Input> -->
          </FormItem>
          <FormItem label="部门" prop="department">
            <Input v-model="userInfo.department"  readonly >
            </Input>
          </FormItem>
          <FormItem label="地址" prop="address">
            <Input v-model="userInfo.address" placeholder="Enter something..." clearable>
            </Input>
          </FormItem>
          <FormItem label="个人技能" prop="skills">
            <Input v-model="userInfo.skills" type="textarea" :rows="3" placeholder="Enter something..." clearable>
            </Input>
          </FormItem>
          <FormItem label="个性标签" prop="tag">
            <Input v-model="userInfo.tag" type="textarea" :rows="2" placeholder="Enter something..." clearable @click.native="tagChange">
            </Input>
          </FormItem>

          <FormItem >
            <Button type="primary" @click="submit">保存</Button>
          </FormItem>
        </Form>
      </Col>
      <Col :span="14" style="text-align: right">
        <div class="avatar-box">
          <Avatar icon="ios-person" size="100" :src="userInfo.avatar"/>
          <Upload action="//jsonplaceholder.typicode.com/posts/" style="margin: 10px 0;">
            <Button icon="ios-cloud-upload-outline">更换头像</Button>
          </Upload>
          <!-- <Button  icon="ios-cloud-upload-outline"></Button> -->
        </div>
      </Col>
    </Row>
    <!-- <Modal :title=""></Modal> -->
  </div>
</template>

<script>
export default {
  name: 'IviewBaseinfo',
  props: {
    userInfo: Object
  },
  data() {
    return {
    };
  },

  mounted() {
    
  },

  methods: {
    submit() {
    },
    tagChange() {
      this.$Message.info({
        top: 600,
        content: '请以"、"区分标签',
        duration: 3
      })
    }
  },
};
</script>

<style lang="less" scoped>
.avatar-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
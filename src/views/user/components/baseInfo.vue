<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-11-05 09:11:29
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-11-05 10:29:08
-->
<template>
  <div>
    <Row :gutter="10">
      <Col :span="10">
        <Form v-model="info" :label-width="80" >
          <FormItem label="姓名">
            <Input v-model="info.name" placeholder="Enter something..." clearable></Input>
          </FormItem>
          <FormItem label="性别">
            <Select v-model="info.sex">
              <Option value="male">男</Option>
              <Option value="female">女</Option>
              <!-- <Option value="shenzhen">Sydney</Option> -->
            </Select>
          </FormItem>
          <FormItem label="出生">
            <!-- <Input v-model="info.born" placeholder="Enter something..." > -->
              <DatePicker  type="date" v-model="info.born" placeholder="Select date" style="width: 250px"></DatePicker>
            <!-- </Input> -->
          </FormItem>
          <FormItem label="部门">
            <Input v-model="info.department"  readonly >
            </Input>
          </FormItem>
          <FormItem label="地址">
            <Input v-model="info.address" placeholder="Enter something..." clearable>
            </Input>
          </FormItem>
          <FormItem label="个人技能">
            <Input v-model="info.skills" type="textarea" :rows="3" placeholder="Enter something..." clearable>
            </Input>
          </FormItem>
          <FormItem label="个性标签">
            <Input v-model="info.tag" type="textarea" :rows="2" placeholder="Enter something..." clearable @click.native="tagChange">
            </Input>
          </FormItem>

          <FormItem >
            <Button type="primary" @click="submit">保存</Button>
          </FormItem>

        </Form>
      </Col>
      <Col :span="14" style="text-align: right">
        <div class="avatar-box">
          <Avatar icon="ios-person" size="100" :src="userAvatar"/>
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

  data() {
    return {
      userAvatar: require('@/assets/avatar.jpg'),
      info: {
        name: '',
        sex: '',
        born: '',
        department: '',
        address: '',
        skills: '',
        tag: ''
      }
    };
  },

  mounted() {
    
  },

  methods: {
    submit() {
      console.log('this.info :>> ', this.info);
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

<template>
  <div>
    <slot name="title"></slot>
  <!-- 详情表单 -->
    <Form label-colon>
      <Row>
        <template v-for="item in fields" >
          <Col :span="item.span" :key="item.key">
            <FormItem
            :label="item.title" 
            :label-width="70" >
              <!-- 文字 -->
              <span style="fontSize: 13px" v-if="item.control == 'input' || item.control == 'textarea' ">{{getLabel(item, formData)}}</span>                
              <!-- 图片 -->
              <div class="img-list" 
                v-else-if="item.control == 'image'" 
                v-for="(v,index) in item.content" 
                :key="index">
                <img :src="v.url">
                <div class="img-list-cover">
                  <Icon type="ios-eye-outline" @click.native="handleView(v.name)"></Icon>
                </div>
              </div>
            </FormItem>
          </Col>
        </template>
      </Row>
    </Form>
    <Modal title="View Image" v-model="visible" footer-hide>
      <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp05%2F1910021S351A06-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639932480&t=1d3b35c681f6fbc03f98f45a1d11e24b" v-if="visible" style="width: 100%">
    </Modal>
  </div>
</template>

<script>
export default {
  name: 'IviewDetailsForm',
  props: {
    fields: {
      type: Array,
      required: true
    },
    formData: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      visible: false,
    };
  },

  mounted() {
    
  },

  methods: {
    // 获取详情展示值
    getLabel(item, data) {
      let value = data[item.key]
      if (value === null || value === undefined) {
        return ''
      }
      return data[item.key] || value
    },
    // 放大图片
    handleView (name) {
      this.imgName = name;
      this.visible = true;
    },
  },
};
</script>

<style lang="less" scoped>
 /deep/ .ivu-form .ivu-form-item-label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 13px;
    color: #343333;
    line-height: 1;
    padding: 10px 12px 10px 0;
    box-sizing: border-box;
}
/deep/ .ivu-form-item {
    margin-bottom: 3px;
}
  .img-list{
    display: inline-block;
    width: 200px;
    height: 140px;
    text-align: center;
    line-height: 140px;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    position: relative;
    box-shadow: 0 1px 1px rgba(0,0,0,.2);
    margin-right: 4px;
    img{
      width: 100%;
      height: 100%;
    }

    .img-list-cover{
      display: none;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(0,0,0,.6);
      i{
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
     }
    }
  }
    .img-list:hover .img-list-cover{
        display: block;
    }
</style>
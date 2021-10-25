<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-10-24 06:25:45
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-10-25 10:55:00
-->
<template>
    <Form ref="model" :model="model" :rules="rules">
      <FormItem  prop="phone">
        <Input v-model="model.phone" size="large" placeholder="请输入手机号" clearable>
          <!-- <Icon slot="prefix" type="ios-phone-portrait" :style="{ color: 'rgba(0,0,0,.25)' }"/> -->
          <Select v-model="phoneArea" slot="prepend" @on-change="areaChange" style="width: 80px">
            <Option  v-for="(item, index) in phoneAreaList" :value="item.areaCode" :key="index" class="options-box area-box">
              <!-- <div class="area-box"> -->
                {{item.areaCode}}
                <!-- <span>{{item.areaCode}}</span> -->
                <span>{{item.area}}</span>
              <!-- </div> -->
              
              </Option>

        </Select>
        </Input>
      </FormItem>
      <slider></slider>
    </Form>
  
</template>

<script>
import Slider from '_c/identify/slider'
export default {
  name: 'IviewLoginslider',
  
  components: {Slider},
  data() {
    return {
      model:{
        phone: '',
      },
      phoneArea: '+ 86' ,
      phoneAreaList: [
        {areaCode: '+ 86', area: '中国'},
        {areaCode: '+ 852', area: '中国香港'},
        {areaCode: '+ 853', area: '中国澳门'},
        {areaCode: '+ 886', area: '中国台湾'},
        {areaCode: '+ 1', area: '美国'},
        {areaCode: '+ 81', area: '日本'},
        {areaCode: '+ 82', area: '韩国'},
        {areaCode: '+ 60', area: '马来西亚'},
        {areaCode: '+ 65', area: '新加坡'},
        {areaCode: '+ 84', area: '越南'},
        {areaCode: '+ 61', area: '澳大利亚'},
        {areaCode: '+ 1', area: '加拿大'},
        {areaCode: '+ 44', area: '英国'},
        {areaCode: '+ 33', area: '法国'},
        {areaCode: '+ 49', area: '德国'},
        {areaCode: '+ 7', area: '俄罗斯'},
        {areaCode: '+ 66', area: '泰国'},
        {areaCode: '+ 91', area: '印度'},
        {areaCode: '+ 63', area: '菲律宾'},
        {areaCode: '+ 55', area: '巴西'},
        {areaCode: '+ 62', area: '印度尼西亚'},
        {areaCode: '+ 39', area: '意大利'},
        {areaCode: '+ 90', area: '土耳其'},
        {areaCode: '+ 64', area: '新西兰'},
        {areaCode: '+ 20', area: '埃及'},
      ],
      rules:{
        phone: [
          { required: true, message: '请输入手机号!',trigger: 'blur' },
          { validator: (rule, value, callback) => {
            console.log('value :>> ', this.$tools);
            if(this.$tools.phoneReg(value)) {callback()}
            else {callback('手机号码不正确')}
          }
          , trigger: 'blur' 
          }
        ],
      }
    };
  },
  computed: {
    // phoneArea() {
    //   return this.areaCode || this.phoneAreaList[0].areaCode
    // }
  },
  watch: {

  },
  mounted() {
    
  },

  methods: {
   areaChange(value) {
     console.log('newVal :>> ', value);
    //  this.areaCode = this.$tools.getCaption(val.label, '+')
    //  this.phoneArea = value
    //  console.log('val :>> ', this.areaCode);
   }
  },
};
</script>

<style lang="less" scoped>
  // .options-box {
    .area-box {
      display: flex;
      border-bottom: 1px solid rgb(240, 237, 237);
      // padding: 0px 2px;
      justify-content: space-between;
      align-items: center;
      padding: 8px 12px 8px 12px;
      margin: 6px
    // }
  }
  .ivu-select {
    /deep/ .ivu-select-dropdown {
      max-height: 154px;
      width: -webkit-fill-available!important;
    }
  }

</style>
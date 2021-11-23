<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-11-08 21:30:07
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-11-23 17:26:36
-->
<template>
  <div>
    <pro-header />
    <Row :gutter="10">
      <Col :span="16">
        <pro-list :proList="proList" />
        <pro-dynamic />
      </Col>
      <Col :span="8">
        <Card style="margin: 10px 0px" :bordered="false" dis-hover>
          <p slot="title">贡献</p>
          <charts-radar :value="radarValue" style="height: 300px"/>
        </Card>
        <Card style="margin: 10px 0px" :bordered="false" dis-hover>
          <p slot="title">我的团队</p>
          <ul style="list-style: none;">
            <li>
              <div class="pro-title">
                <Avatar icon="ios-person" size="default" />
                <span class="pro-name">1313</span>
              </div>
            </li>
            <li>
              <div class="pro-title">
                <Avatar icon="ios-person" size="default" />
                <span class="pro-name">12323</span>
              </div>
            </li>
           
          </ul>
        </Card>
      </Col>
    </Row>

  </div>
</template>

<script>
import ProHeader from './components/proHeader.vue'
import ProList from './components/proList.vue'
import ProDynamic from './components/proDynamic.vue'
import {ChartsRadar} from '_c/charts'
export default {
  name: 'IviewIndex',
  components: {ProHeader, ProList,ProDynamic, ChartsRadar},
  data() {
    return {
      proList: [
        {proName: '飞天计划', proDesc: '那是一种内在的东西，他们到达不了，也无法触及的', proPercent: 45},
        {proName: '飞天计划', proDesc: '那是一种内在的东西，他们到达不了，也无法触及的', proPercent: 90},
        {proName: '飞天计划', proDesc: '那是一种内在的东西，他们到达不了，也无法触及的', proPercent: 30},
        {proName: '飞天计划', proDesc: '那是一种内在的东西，他们到达不了，也无法触及的', proPercent: 96},
        {proName: '飞天计划', proDesc: '那是一种内在的东西，他们到达不了，也无法触及的', proPercent: 80},
        {proName: '飞天计划', proDesc: '那是一种内在的东西，他们到达不了，也无法触及的', proPercent: 70},
      ],
      radarValue:[
       {
          value: [4.2, 8.0, 4.0, 6.5, 8.69, 8.8],
          name: 'fg团队'
        },
        {
          value: [5.0, 5.5, 6.6, 4.3, 3.5, 6.7],
          name: 'gos团队'
        }
      ],
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="less" scoped>
 .pro-title {
    margin-bottom: 8px;
    .pro-name {
      margin-left: 12px;
      color: rgba(0,0,0,.85);
      font-size: 14px;
    }
  }
</style>
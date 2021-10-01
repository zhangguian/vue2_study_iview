<template>
  <div>
    <Row :gutter="20">
      <i-col :xs="12" :md="8" :lg="4" v-for="(info, i) in infoCardData" :key="`info-${i}`"  style="height: 120px;padding-bottom: 10px;">
        <info-card shadow :color="info.color" :icon="info.icon" :icon-size="36">
          <count-to :end="info.count" count-class="count-style"></count-to>
          <p>{{ info.title }}</p>
        </info-card>
      </i-col>
    </Row>

    <Row :gutter="20">
      <i-col :md="24" :lg="8">
        <Card shadow>
          <charts-pie style="height: 300px" :value="pieData" text="用户访问来源"></charts-pie>
        </Card>
      </i-col>
      <i-col :md="24" :lg="16">
        <Card shadow>
            <charts-bar style="height: 300px" :value="barData" text="每周用户活跃量"></charts-bar>
        </Card>
      </i-col>
    </Row>

    <Row  :gutter="20">
      <Card shadow >
         <example style="height: 310px;" ></example>
      </Card>
    </Row>
  </div>
</template>

<script>
import InfoCard from '_c/info-card/info-card'
import CountTo from '_c/count-to/count-to'
import { ChartsPie, ChartsBar} from '_c/charts';
import Example from './example.vue'

export default {
  name: 'home',

  components: {InfoCard,CountTo,ChartsBar,ChartsPie,Example},

  directives: {},

  data() {
    return {
       infoCardData: [
        { title: '新增用户', icon: 'md-person-add', count: 8033333333, color: '#2d8cf0' },
        { title: '累计点击', icon: 'md-locate', count: 232, color: '#19be6b' },
        { title: '新增问答', icon: 'md-help-circle', count: 142, color: '#ff9900' },
        { title: '分享统计', icon: 'md-share', count: 657, color: '#ed3f14' },
        { title: '新增互动', icon: 'md-chatbubbles', count: 12, color: '#E46CBB' },
        { title: '新增页面', icon: 'md-map', count: 14, color: '#9A66E4' }
      ],
      pieData: [
        { value: 335, name: '直接访问' },
        { value: 310, name: '邮件营销' },
        { value: 234, name: '联盟广告' },
        { value: 135, name: '视频广告' },
        { value: 1548, name: '搜索引擎' }
      ],
      barData: {
        Mon: 13253,
        Tue: 34235,
        Wed: 26321,
        Thu: 12340,
        Fri: 24643,
        Sat: 1322,
        Sun: 1324
      }
    };
  },
  computed: {
      
  },
  mounted() {
  },

  methods: {
    
  },
};
</script>

<style lang="less">
.count-style{
  font-size: 50px;
}
</style>
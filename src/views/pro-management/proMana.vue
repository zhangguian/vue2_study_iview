
<template>
  <div>
    <Card :padding="10">
      <Tabs>
        <TabPane label="全部项目">
          <rect-table action="proManagement/proAllList" size="small" @handlePro="handlePro"/>
        </TabPane>
        <TabPane label="进行中">
          <rect-table :data="data" size="small" @handlePro="handlePro"/>
        </TabPane>
        <TabPane label="已完成">
          <rect-table :data="data" size="small" @handlePro="handlePro"/>
        </TabPane>
        <TabPane label="未开始">
          <rect-table :data="data" size="small" @handlePro="handlePro"/>
        </TabPane>
        <TabPane label="已归档">
          <rect-table :data="data" size="small" @handlePro="handlePro"/>
        </TabPane>
      </Tabs>
    </Card>
  </div>
</template>

<script>
import {RectTable} from '_c/table'
export default {
  name: 'IviewAllpro',
  components: {RectTable},
  data() {
    return {
       data: [
        {proName: '飞天计划', proDesc: '那是一种内在的东西，他们到达不了，也无法触及的',time: '2021-11-13 14:08:07'},
        {proName: '飞天计划', proDesc: '那是一种内在的东西，他们到达不了，也无法触及的',time: '2021-11-12 03:08:07'},
        {proName: '飞天计划', proDesc: '那是一种内在的东西，他们到达不了，也无法触及的',time: '2021-11-08 11:08:07'},
        {proName: '飞天计划', proDesc: '那是一种内在的东西，他们到达不了，也无法触及的',time: '2021-11-12 11:08:07'},
        {proName: '飞天计划', proDesc: '那是一种内在的东西，他们到达不了，也无法触及的',time: '2021-11-13 11:08:07'},
        {proName: '飞天计划', proDesc: '那是一种内在的东西，他们到达不了，也无法触及的',time: '2021-11-12 18:08:07'},
        {proName: '飞天计划', proDesc: '那是一种内在的东西，他们到达不了，也无法触及的',time: '2021-11-12 11:08:07'},
        {proName: '飞天计划', proDesc: '那是一种内在的东西，他们到达不了，也无法触及的',time: '2021-11-10 11:08:07'},
        {proName: '飞天计划', proDesc: '那是一种内在的东西，他们到达不了，也无法触及的',time: '2021-11-11 11:08:07'},
        {proName: '飞天计划', proDesc: '那是一种内在的东西，他们到达不了，也无法触及的',time: '2021-11-12 11:08:07'},
        {proName: '飞天计划', proDesc: '那是一种内在的东西，他们到达不了，也无法触及的',time: '2021-11-12 05:08:07'},
        {proName: '飞天计划', proDesc: '那是一种内在的东西，他们到达不了，也无法触及的',time: '2021-11-12 11:08:07'},
        {proName: '飞天计划', proDesc: '那是一种内在的东西，他们到达不了，也无法触及的',time: '2021-11-12 11:08:07'},
        {proName: '飞天计划', proDesc: '那是一种内在的东西，他们到达不了，也无法触及的',time: '2021-11-12 11:08:07'},
        {proName: '飞天计划', proDesc: '那是一种内在的东西，他们到达不了，也无法触及的',time: '2021-11-12 11:08:07'},
        {proName: '飞天计划', proDesc: '那是一种内在的东西，他们到达不了，也无法触及的',time: '2021-11-12 11:08:07'},
      ],
    };
  },

  mounted() {
    
  },

  methods: {
    handlePro(item) {
      this.$router.push({
        name: '/project_management/proDetail_page',
        query: {}
      })
    }
  },
};
</script>

<style lang="less" scoped>

</style>
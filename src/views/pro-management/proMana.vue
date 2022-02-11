
<template>
  <div>
    <Card :padding="10">
      <Tabs>
        <TabPane label="全部项目">
          <rect-table ref="proList" action="proManagement/proAllList"  size="small" @handlePro="handlePro" @dele="handleDele" @editor="handleEditor" />
        </TabPane>
        <TabPane label="进行中" >
          <rect-table :data="data" action="proManagement/proAllList" flag="1" size="small" @handlePro="handlePro" @dele="handleDele" @editor="handleEditor"/>
        </TabPane>
        <TabPane label="已完成">
          <rect-table :data="data"  action="proManagement/proAllList" flag="2" size="small" @handlePro="handlePro" @dele="handleDele" @editor="handleEditor" />
        </TabPane>
        <TabPane label="未开始">
          <rect-table :data="data" action="proManagement/proAllList" flag="0" size="small" @handlePro="handlePro" @dele="handleDele" @editor="handleEditor"/>
        </TabPane>
        <TabPane label="已归档">
          <rect-table :data="data" action="proManagement/proAllList" flag="3" size="small" @handlePro="handlePro" @dele="handleDele" @editor="handleEditor"/>
        </TabPane>
      </Tabs>
    </Card>
  </div>
</template>

<script>
import {RectTable} from '_c/table'
import store from '../../store';
export default {
  name: 'IviewAllpro',
  components: {RectTable},
  data() {
    return {
       data: [],
    };
  },

  mounted() {
    
  },

  methods: {
    handlePro({id}) {
      this.$router.push({
        name: '/project_management/proDetail_page',
        query: {id}
      })
    },
    async delePro(id) {
      let {data, err} = await this.$store.dispatch('proManagement/deleOnePro',{id: id})
      if(data.status === 200) {
        console.log('data', data);
        this.$Message.success(data.message)
        this.$refs.proList.getData()
      } else {
        this.$Message.error('删除失败')
      }
    },
    handleDele({id}) {
      this.$Modal.confirm({
        title: '确认操作',
        content: '你确认要删除吗？',
        onOk: () => {
          this.delePro(id)
        }
      })
    },
    handleEditor(data) {

    }
  },
};
</script>

<style lang="less" scoped>

</style>

<template>
  <!-- <div> -->
        <Dropdown class="msg-dropdown">
          <div class="msg-badge">
            <Badge dot :count="messageUnreadCount">
              <Icon :size="22" :custom="`i-icon ${icon}`"></Icon>
            </Badge>
          </div>
          <DropdownMenu slot="list" class="msg-dropdownMenu">
            <Tabs :value="msgdata[0].label" size="small">
                <TabPane v-for="item in msgdata" :key="item.label" :label="getmsgLabel(item)" :name="item.label">
                  <div class="msg-content">
                    <no-data v-if="item.count" :icon="'icon-zu1575'" :size="75" :text="'暂无数据'"></no-data>
                    <div v-else>{{item.content}}</div>
                  </div>
                  <div class="msg-button">
                    <Button type="dashed" @click="emptyRecord()">清空记录</Button>
                    <Button type="dashed" @click="lookMore()">查看更多</Button>
                  </div>
                </TabPane>
            </Tabs>
          </DropdownMenu>
        </Dropdown>
  <!-- </div> -->
</template>

<script>
import { NoData } from '_c/prompt'
export default {
  name: 'IviewMessageIcon',

  components: { NoData },

  props: { 
    magLists: {
      type: Array,
      default() {
        return []
      }
    },
    messageUnreadCount: {
      type: Number,
      default: 1
    },
    size: {
      type: Number,
      default: 18
    },
    color: {
      type: String,
      default: '#caccd1'
    }
   },

  data() {
    return {
      icon: 'icon-tongzhi1',
      theme1: 'light',
      name: 0,
      msgdata: [
        {label: '我的待办', count: 0, content: '十多年书法的订单'},
        {label: '系统消息', count: 2, content: '时代峻峰男生的减肥呢的身份'},
        {label: '邮件消息', count: 3, content: '时代峻峰男生的减肥呢的身份'},
      ]
    };
  },
  computed: {
    },
  created() {
  },
  mounted() {
    
  },

  methods: {
    
    testAxios() {
      //  return request({
      //   url: '/test',
      //   method: 'get'
      // })
    },

    getmsgLabel(item) {
      return item['label'] + '(' + item.count + ')'
    },
    lookMore() {
    },
    emptyRecord() {
    }
  },
};
</script>

<style lang="less" scoped>
.msg-dropdown {
  .msg-badge {
   /deep/ .ivu-badge-dot {
      top: 16px;
    }
  }
  .msg-dropdownMenu {
    //  position: relative;
    padding: 10px;
    .msg-content {
      width: 100%;
      height: 200px;
    }
    .msg-button {
      display: grid;
      width: 100%;
      text-align: center;
      // position: relative;
      // top: 80px;
      &> button {
        margin: 5px 0px;
      }
    }
  }
  margin-right: 18px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
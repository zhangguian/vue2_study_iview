
<template>
  <div>
    <div style="text-align: right">
      <slot name="other"></slot>
      <Input
        v-model="value"
        placeholder="Enter something..."
        style="width: 300px;"
        search
        clearable
        @on-enter="handleSearch"
        @on-clear="handleClear"
      />
    </div>
    <Spin size="large" fix v-if="loading"></Spin>
    <div class="content">
      <div class="no-data" style="height: 100%;padding: 200px" v-if="isData">
        <no-data :icon="'icon-zu1575'" :size="100" :text="'暂无数据'"></no-data>
      </div>
      <div class="pro-list" v-else>
        <Row>
          <Col :span="6" v-for="(item, index) in data" :key="index">
            <div class="pro-item" @click="() => handlePro(item)">
              <div class="pro-title">
                <Tooltip :content="item.proName" placement="bottom">
                  <div style="display: flex;align-items: center;justify-content: center;">
                    <Avatar icon="ios-person" size="default" :src="item.avatar" />
                    <span class="pro-name omit-inline">{{ item.proName }}</span>
                    <Tag
                      :color="colorType(item.status)"
                    >{{ $tools.changeShow(item.status, $c.proStatus) }}</Tag>
                  </div>
                </Tooltip>
                <div @click.stop.prevent="() => { }">
                  <slot name="controle"></slot>
                  <Dropdown @on-click="operate(item, $event)" :stop-propagation="true">
                    <Icon type="md-share" />
                    <DropdownMenu slot="list" style="display: flex;justify-content: space-around;">
                      <Tooltip content="删除" placement="bottom">
                        <DropdownItem name="dele">
                          <Icon type="md-trash" :size="20" />
                        </DropdownItem>
                      </Tooltip>
                      <Tooltip content="编辑" placement="bottom">
                        <DropdownItem name="editor">
                          <Icon type="ios-create" :size="20" />
                        </DropdownItem>
                      </Tooltip>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </div>
              <div class="pro-desc omit">{{ item.proDesc }}</div>
              <div class="pro-publish">
                <a href="#" style="color: rgba(0, 0, 0, 0.45);">
                  <span>{{ item.creator }}</span>
                </a>
                <div class="time">
                  <Time :time="time1(item.time)" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
    <div style="text-align: right">
      <Page
        :total="total"
        :page-size="mPageSize"
        :current.sync="pageNum"
        :size="size"
        @on-page-size-change="onPageSizeChange"
        @on-change="onPageChange"
        :page-size-opts="pageSizeOpts"
        :simple="simple"
        show-sizer
        show-elevator
        show-total
        data-flex="main:right"
      />
    </div>
  </div>
</template>

<script>
import { NoData } from '_c/prompt'
export default {
  name: 'IviewRecttable',
  components: { NoData },
  props: {
    pageSize: { type: Number, default: 16 },
    action: { type: String },
    simple: Boolean,
    border: { type: Boolean, default: false },
    size: String,
    flag: { type: String },
  },
  data () {
    return {
      value: '',
      data: [],
      total: 0,
      loading: false,
      isData: false,
      mPageSize: this.pageSize,
      pageNum: 1,
      obj: {}
    };
  },
  computed: {
    pageSizeOpts () {
      return [...new Set([16, 32, 64, 128, this.pageSize])].sort((a, b) => a - b)
    },
  },
  mounted () {
    this.getData()
  },

  methods: {
    async getData () {
      if (!this.action) return
      this.loading = true
      const { data, error } = await this.$store.dispatch(this.action,
        { pageNum: this.pageNum, pageSize: this.mPageSize, flag: this.flag, name: this.value, })
      this.loading = false
      if (data) {
        this.data = data.records.sort((a, b) => a.status - b.status)
        this.total = data.total
        if (data.records.length) this.isData = false
        else this.isData = true
      }
      if (error) {
        this.$Message.info(error);
      }
    },
    colorType (type) {
      let map = { '0': 'default', '1': 'green', '2': 'blue', '3': 'gold' }
      return map[type]
    },
    time1 (time) {
      return new Date(time).getTime() - 60 * 3 * 1000
    },
    handleSearch () {
      console.log('first', 2);
      this.getData()
    },
    handleClear () {
      this.getData()
    },

    onPageSizeChange (pageSize) {
      this.mPageSize = pageSize
      this.getData()
    },
    onPageChange (pageNum) {
      this.pageNum = pageNum
      this.getData()
    },
    handlePro (item) {
      this.$emit('handlePro', item);
    },
    operate (item, name) {
      if (name === 'dele') {
        console.log('item', ...arguments)
        this.$emit('dele', item)
      } else if (name === 'editor') {
        this.$emit('editoe', item)
      }
      return false
    }
  },
};
</script>

<style lang="less" scoped>
.content {
  min-height: 590px;
  overflow: auto;
  .pro-list {
    display: flex;
    flex-flow: wrap;
    .pro-item {
      border: 0;
      border-radius: 0;
      padding: 10px;
      // width: 20%;
      margin: 6px;
      box-shadow: 1px 0 0 0 #f0f0f0, 0 1px 0 0 #f0f0f0, 1px 1px 0 0 #f0f0f0,
        inset 1px 0 0 0 #f0f0f0, inset 0 1px 0 0 #f0f0f0;
      transition: all 0.3s;
      .pro-title {
        margin-bottom: 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .pro-name {
          width: 70px;
          margin: 0px 4px;
          color: rgba(0, 0, 0, 0.85);
          font-size: 14px;
        }
      }
      .pro-desc {
        height: 44px;
        overflow: hidden;
        color: rgba(0, 0, 0, 0.45);
        line-height: 22px;
      }
      .pro-publish {
        font-size: 12px;
        color: rgba(0, 0, 0, 0.45);
        margin-top: 8px;
        display: flex;
        justify-content: space-between;
        .time {
        }
      }
    }
    .pro-item:hover {
      position: relative;
      z-index: 1;
      box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 16%),
        0 3px 6px 0 rgba(0, 0, 0, 12%), 0 5px 12px 4px rgba(0, 0, 0, 9%);
    }
  }
  .pro-list:before {
    display: table;
    content: "";
  }
  .ivu-tabs-bar {
    border-bottom: 1px solid #dcdee2;
    margin-bottom: 5px;
  }
}
</style>
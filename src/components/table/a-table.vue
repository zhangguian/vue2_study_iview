
<template>
  <div>
    <Card>
      <form-create
        v-model="formObj"
        :rule="rule"
        :option="option"
        @search-click="onSearch"
        @clear-click="OnClear"
        v-if="rule.length"
      ></form-create>
      <slot name="other"></slot>
      <Table
        v-bind="$attrs"
        :columns="permissionFilteredColumns"
        width
        :max-height="tableHeight"
        @on-row-click="onRowClick"
        :data="data"
        :border="border"
        :size="size"
        no-data-text
        no-filtered-data-text
        @on-current-change="onCurrentChange"
        @on-select-cancel="onSelectCancel"
        @on-select="onSelect"
        @on-row-dblclick="onRowDbClick"
        @on-select-all-cancel="onSelectAllCancel"
        @on-select-all="onSelectAll"
        @on-sort-change="onSortChange"
        @on-cell-click="onCellClick"
        :loading="loading"
        :highlight-row="!isMultiSelect"
      >
        <!-- 表格头部埋设插槽 -->
        <div
          slot="header"
          data-flex="main:right cross:center"
          style="display: flex;justify-content: space-between; right: 10px;"
        >
          <div>
            <div data-flex-box="1">
              <slot name="title"></slot>
            </div>
            <div>
              <slot name="btn"></slot>
            </div>
          </div>
          <div>
            <template v-if="table.btns">
              <i-button
                v-for="(btn, index) in table.btns"
                :key="index"
                v-permission="btn.permission"
                :icon="btn.icon"
                :size="size"
                @click="onBtnClick(btn)"
                :type="btn.type || 'primary'"
                style="margin: 0px 8px"
              >{{ btn.text }}</i-button>
            </template>
            <!-- 表头筛选 -->
            <Poptip placement="bottom-end" transfer>
              <i-button icon="ios-funnel-outline" :size="size"></i-button>
              <!-- <Icon type="ios-funnel-outline" size='24'/> -->
              <Transfer
                slot="content"
                :data="transferData"
                :target-keys="hideColumnKeys"
                @on-change="columnsChange"
                :titles="['显示的列', '隐藏的列']"
              ></Transfer>
            </Poptip>
          </div>
        </div>
      </Table>

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
    </Card>
  </div>
</template>

<script>
export default {
  name: 'IviewATable',
  components: {},
  props: {
    config: { type: Object, required: true },
    action: { type: String, required: true },
    tableHeight: { type: Number },
    size: String,
    keyField: { type: String, default: 'id' },
    selected: { type: [Object, Array], default: () => ([]) },
    pageSize: { type: Number, default: 10 },
    simple: Boolean,
    border: { type: Boolean, default: false }
  },
  data () {
    return {
      formObj: {},
      rule: [],
      data: [],
      option: {},
      hideColumnKeys: [],
      loading: false,
      total: 0,
      mPageSize: this.pageSize,
      pageNum: 1,
    };
  },
  computed: {
    // 筛选表头
    filteredCloumns () {
      return this.config.table.columns.filter(i => !this.hideColumnKeys.includes(i.key) && (i.show === undefined || i.show))
    },
    permissionFilteredColumns () {
      return this.filteredCloumns
    },

    // 判断是否支持高亮单选中的行
    isMultiSelect () {
      return this.filteredCloumns.some(item => item.type === 'selection')
    },

    // 穿梭框选项
    transferData () {
      return this.config.table.columns.filter(i => i.title).map((v) => ({
        key: v.key,
        label: v.title
      }))
    },
    table () {
      return this.config.table
    },
    pageSizeOpts () {
      return [...new Set([10, 20, 30, 40, this.pageSize])].sort((a, b) => a - b)
    },
  },
  watch: {
    'config.form' () {
      this.rule = [...this.config.form.rule]
      this.option = this.config.form.option
    },
    selected: {
      handler () {
        this.selectData()
      },
      immediate: true,
    },
  },
  created () {
    this.rule = [...this.config.form.rule]
    this.option = this.config.form.option
  },
  mounted () {
    this.getData()
  },
  methods: {
    async getData () {
      if (!this.action) return
      this.loading = true
      const { data, error } = await this.$store.dispatch(this.action,
        { pageNum: this.pageNum, pageSize: this.mPageSize, ...this.formObj.formData(), })
      this.loading = false
      if (data) {
        this.data = data.records
        this.total = data.total
      }
      if (error) {
        this.$Message.info(error);
      }
    },
    mergeList (arr1 = [], arr2 = [], key = 'id') {
      return [...arr1, ...arr2].filter((item, index, arr) => {
        return index === arr.findIndex(a => a[key] === item[key])
      })
    },
    onSearch () {
      this.pageNum = 1
      this.getData()
    },
    OnClear () {
      this.formObj.resetFields()
      this.getData()
    },
    selectData () {
      // if(!this.selected) {return}
      // if(!this.isMultiSelect) {return}
      // this.data = this.data.map(i => {
      //   i._checked = this.selected.some(v => v[this.keyField] === v[this.keyField])
      //   return i
      // })
    },
    // 单击某一行时触发
    onRowClick (row, index) {
      this.$emit('on-row-click', { row, index });
    },
    // 开启 highlight-row 后有效，当表格的当前行发生变化的时候会触发
    onCurrentChange (currentRow) {
      this.$emit('update:selected', currentRow)
    },
    // 在多选模式下有效，选中某一项时触发
    onSelect (selection, row) {
      const selected = this.mergeList(this.selected, [row], this.keyField)
      this.$emit('update:selected', selected)
    },
    // 在多选模式下有效，取消选中某一项时触发
    onSelectCancel (selection, row) {
      const index = this.selected.findIndex(item => item[this.keyField] === row[this.keyField])
      index > -1 && this.selected.splice(index, 1)
    },
    // 双击某一行时触发
    onRowDbClick (row, index) {
      this.$emit('update:dbSelected', row)
    },
    // 在多选模式下有效，点击取消全选时触发
    onSelectAllCancel () {
      // 从选中列表中删除当前页数据
      this.data.forEach(item => {
        const index = this.selected.findIndex(a => item[this.keyField] === a[this.keyField])
        this.selected.splice(index, 1)
      })
    },
    // 在多选模式下有效，点击全选时触发
    onSelectAll (selection) {
      const selected = this.mergeList(this.selected, selection, this.keyField)
      this.$emit('update:selected', selected)
    },
    // 排序时有效，当点击排序时触发
    onSortChange ({ key, order }) {
      this.sort = {
        querySortColumn: key, querySort: order
      }
      this.getData()
    },
    // 点击单元格时触发
    onCellClick (row, column, data, event) {
    },
    // 穿梭框 - 选项在两栏之间转移时的回调函数
    columnsChange (targetKeys) {
      this.hideColumnKeys = targetKeys
    },

    onBtnClick (btn) {
      btn.cb({ data: this.data })
    },
    onPageSizeChange (pageSize) {
      this.mPageSize = pageSize
      this.getData()
    },
    onPageChange (pageNum) {
      this.pageNum = pageNum
      this.getData()
    },
  },
};
</script>

<style lang="less" scoped>
</style>
<template>
  <div class="count-to-wrapper">
    <!-- <slot name="left" /> -->
    <p class="content-outer">
       <span :class="['count-to-count-text', countClass]" :id="counterId">{{ init }}</span>
      <i :class="['count-to-unit-text', unitClass]">{{ unitText }}</i>
    </p>
    <!-- <solt name="right" /> -->
  </div>
</template>

<script>
import CountUp from 'countup'
export default {
  name: 'IviewCountTo',

  components: {  },

  props: {
    /**
     * 
     */
    init: {
      type: Number,
      default: 0
    },
    /**
     * @description 起始值， 即动画开始显示的数值
     */
    startVal: {
      type: Number,
      default: 0
    },
    /**
     * @description 结束值，即动画停止的显示的数值
     */
    end: {
      type: Number,
      required: true
    },
    /**
     * @description 保留几位小数
     */
    decimals: {
      type: Number,
      default: 0
    },
    /**
     * @description 分隔整数和小数的符号，默认是小数点
     */
    duration: {
      type: Number,
      default: 2
    },
    /**
     * @description 动画延迟开始的时间，单位是秒
     */
    delay: {
      type: Number,
      default: 0
    },
    /**
     * @description 是否禁用easing动画效果
     */
    uneasing: {
      type: Boolean,
      default: false
    },
    /**
     * @description 是否使用分组，分组后每三位会用一个符号分隔
     */
    usegroup: {
      type: Boolean,
      default: false
    },
    /**
     * @description 用于分组(usegroup)的符号
     */
    separator: {
      type: String,
      default: ','
    },
    /**
     * @description 是否简化显示，设为true后会使用unit单位来做相关省略
     */
    simplify: {
      type: Boolean,
      default: true
    },
     /**
     * @description 自定义单位，如[3, 'K+'], [6, 'M+']即大于3位数小于6位数的用k+来做省略
     *              1000即显示为1K+
     */
    unit: {
      type: Array,
      default () {
        return [[3, 'K+'], [6, 'M+'], [9, 'B+']]
      }
    },
    unitClass: {
      type: String,
      default: ''
    },
    countClass: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      unitText: '',
      counter: null
    };
  },
  computed: {
    counterId () {
      return `count_to_${this._uid}`
    }
  },
  mounted() {
    this.$nextTick(() => {
      let endVal = this.getValue(this.end)
      let options ={
         useEasing: !this.uneasing,
        useGrouping: this.useGroup,
        separator: this.separator,
        decimal: this.decimal
      }
      this.counter = new CountUp(this.counterId, this.startVal, endVal, this.decimals, this.duration, options)
       setTimeout(() => {
        if (!this.counter.error) this.counter.start()
      }, this.delay)
   });
  //  this.transformValue('1')
  },

  methods: {
    // 处理数字
    getHandleVal(val, len) {
      return {
        endVal: parseInt(val/ Math.pow(10, this.unit[len - 1][0])),
        unitText: this.unit[len - 1][1]
      }
    },
    // 数字动画
    transformValue(val) {
      let len = this.unit.length
      let res = {
        endVal: 0,
        unitText: ''
      }
      // 如果数字小于第一位数组下标元素的，说明该数不超过4位数
      if(val < Math.pow(10, this.unit[0][0])) res.endVal = val
      else {
        for(let i = 1; i < len; i++) {
          if(val >= Math.pow(10, this.unit[i - 1][0]) && val < Math.pow(10, this.unit[i][0])) res = this.getHandleVal(val, i)
        }
      }
       if (val > Math.pow(10, this.unit[len - 1][0])) res = this.getHandleVal(val, len)
      return res
    },
    // 获取显示数据
    getValue(val) {
     let res = 0
      if (this.simplify) {
        let { endVal, unitText } = this.transformValue(val)
        this.unitText = unitText
        res = endVal
      } else {
        res = val
      }
      return res
    }
  },
  watch: {
    end(newVal) {
      let endVal = this.getValue(newVal)
      this.counter.update(endVal)
    }
  }
};
</script>

<style lang="less" scoped>

</style>
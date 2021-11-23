/*
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-11-23 15:39:16
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-11-23 15:40:24
 */
export const myMixins = {
  components:{},
  data() {
    return {}
  },
  mounted() {},
  methods: {
    statusColor(map, type) {
      let map = {'0': 'gold','1': 'green', '2': 'red', '3': 'error'}
      return map[type]
    },
  }
}
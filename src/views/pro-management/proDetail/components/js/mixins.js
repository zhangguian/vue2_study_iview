
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
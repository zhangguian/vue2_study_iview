
import { reverse, objToArr } from './tools'
const obj = {
  proStatusList: [
    { "value": 0, "label": "未开始" },
    { "value": 1, "label": "进行中" },
    { "value": 2, "label": "马上到期" },
    { "value": 3, "label": "已超时" },
  ],
  stateList: [
    { "value": 0, "label": "有效" },
    { "value": 1, "label": "无效" },
  ],
  priStatus: [
    { "value": 0, "label": "低" },
    { "value": 1, "label": "中等" },
    { "value": 2, "label": "高" },
    { "value": 3, "label": "紧急" },
  ],
  proStatus: [
    { "value": 0, "label": "未开始" },
    { "value": 1, "label": "进行中" },
    { "value": 2, "label": "已完成" },
    { "value": 3, "label": "已归档" },
  ],
  severity: [
    { "value": 0, "label": "低" },
    { "value": 1, "label": "一般" },
    { "value": 2, "label": "严重" },
    { "value": 3, "label": "致命" },
  ],
  demandStatus: [
    { "value": 0, "label": "实现中" },
    { "value": 1, "label": "规划中" },
    { "value": 2, "label": "已实现" },
    { "value": 3, "label": "测试通过" },
  ]
}
// 将以V开头的属性增加一个k和v反转的对象，并且转为label和value的数组放到options里面
// for (let [k] of Object.entries(obj)) {
//   if (k.endsWith('V')) {
//     const name = k.substr(0, k.length - 1)
//     obj[name + 'K'] = reverse(obj[k])
//     obj.options[name.substr(0, 1).toLowerCase() + name.substr(1)] = objToArr(obj[k])
//   }
// }
export default obj
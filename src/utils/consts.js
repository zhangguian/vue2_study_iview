/*
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-10-31 18:16:14
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-10-31 20:34:23
 */
import {reverse, objToArr} from './tools'
const obj = {
  proStatusList: [
    {"value": 0, "label": "未开始"},
    {"value": 1, "label": "进行中"},
    {"value": 2, "label": "马上到期"},
    {"value": 3, "label": "已超时"},
  ],
  stateList: [
    {"value": 0, "label": "有效"},
    {"value": 1, "label": "无效"},
  ],
}
// 将以V开头的属性增加一个k和v反转的对象，并且转为label和value的数组放到options里面
// for (let [k] of Object.entries(obj)) {
//   if (k.endsWith('V')) {
//     const name = k.substr(0, k.length - 1)
//     obj[name + 'K'] = reverse(obj[k])
//     obj.options[name.substr(0, 1).toLowerCase() + name.substr(1)] = objToArr(obj[k])
//     console.log('obj :>> ', obj);
//   }
// }
export default obj
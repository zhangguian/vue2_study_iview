/*
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-12-01 22:50:54
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-12-02 15:26:12
 */
import request from '../network/request'

export default {
  /**请假申请 */
  // 请假申请列表
  getApplyleaveList: (params,config) => request('post', '/workBench/getApplyLeaveLisr',params)
}
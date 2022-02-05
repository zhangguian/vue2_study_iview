import request from "../network/request";

export default {
  /**请假申请 */
  // 请假申请列表
  getApplyleaveList: (params, config) => request("post", "/business/getApplyLeaveList", params),
};

import request from "./request";

export default {
  /**请假申请 */
  // 请假申请列表
  getApplyleaveList: (params, config) => request("post", "/business/applyLeaveList", params),
  deleOneApply: (params, config) => request("post", "/business/deleOneApply", params),
  addApply: (params, config) => request("post", "/business/addApply", params),
  
  /**出差申请 */
  // 出差申请列表
  getEvectionList: (params, config) => request("post", "/business/applyEvectionList", params),
  deleOneEvectionApply: (params, config) => request("post", "/business/deleOneEvectionApply", params),
  addEvectionApply: (params, config) => request("post", "/business/addEvectionApply", params),

};

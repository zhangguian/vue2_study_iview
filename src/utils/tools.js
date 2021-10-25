/*
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-10-23 15:18:43
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-10-25 09:47:31
 */
/**
  * 校验手机号
  * @param phone
  */
export function phoneReg(phone) {
  const cellphoneReg = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/
  const telephoneReg = /^(0\d{2}-\d{8}(-\d{1,4})?)|(0\d{3}-\d{7,8}(-\d{1,4})?)$/
  return cellphoneReg.test(phone) || telephoneReg.test(phone)
}
/**
 * @name: 截取指定符号后面的字符串(包括这字符)
 * @test: test font
 * @msg: 
 * @param {*} obj
 * @param {*} d 
 * @return {*}
 */
export function getCaption(obj, d) {
  let index = obj.indexOf(`${d}`)
  obj = obj.substring(index, obj.length)
  return obj
}


/**
  * 验证表单字段
  * @param that
  * @param ref
  * @param arr
  * @param callback
  */
// export function validateFields(that, arr,  r, callback) {
//   let promiseArray = []
//   console.log('ref :>> ', arr);
//   for(let item of arr){
//     let p = new Promise((resolve, reject) => {
//       that.$refs[r].validateField(item, (err)=>{
//         if(!err){
//           resolve();
//         }else{
//           reject(err);
//         }
//       })
//     });
//     promiseArray.push(p)
//   }
//   Promise.all(promiseArray).then(()=>{
//     callback()
//   }).catch(err=>{
//     callback(err)
//   })
// }
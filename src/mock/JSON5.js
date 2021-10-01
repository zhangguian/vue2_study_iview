/*
 * @Descripttion: JSON5 -- 解决JSON文件格式严格问题 
 * 如：无法添加注释问题-双引号定义要求等
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-09-13 08:31:34
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-09-13 08:33:52
 */

const fs = require('fs')
const path = require('path')
const JSON = require('json5')

// let json = fs.readFileSync(path.join(__dirname,), utf-8)

// let obj = JSON5.parse(json)
export const getJsonFile = (filePath) => {
  let json = fs.readFileSync(path,join(__dirname, filePath), utf-8)
  return JSON.parse(json)
}
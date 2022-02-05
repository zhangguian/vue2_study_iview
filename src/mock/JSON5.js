

const fs = require('fs')
const path = require('path')
const JSON = require('json5')

// let json = fs.readFileSync(path.join(__dirname,), utf-8)

// let obj = JSON5.parse(json)
export const getJsonFile = (filePath) => {
  let json = fs.readFileSync(path,join(__dirname, filePath), utf-8)
  return JSON.parse(json)
}
// 对mock数据进行处理

const responseBody = {
  message: '',
  timestamp: 0,
  result: null,
  code: 200
}

export const builder = (data, message, code = 0, headers = {}) => {
  responseBody.result = data
  if(message !== undefined && message !== null) {
    responseBody.message = message
  }
  if(code !== undefined && code !== 0) {
    responseBody.code = code
    responseBody._status = code
  }
  if(headers !== null && typeof headers === 'object' && Object.keys(headers).length > 0) {
    responseBody._headers = headers
  }
  responseBody.timestamp = new Date().getTime()

  return responseBody
}

// 用于解析get请求的参数
export const getUrlParams = url => {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
}

export const getBody = (options) => {
  return options.body && JSON.parse(options.body)
}

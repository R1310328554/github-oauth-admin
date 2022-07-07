import request from './index'
const PATH = '/user'

export function loginSelf(data) {
  return request({
    // url: `${thirdType}${PATH}/login`,
    // url: `oauth2/authorization/custom-client`,
    url: `oauth2/authorization/custom-client`,
    method: 'POST',
    data: data
  // }).catch((e) => {
  //   console.log("loginSelf err ---", e)
  })
}

export function login(data) {
  return request({
    url: `${PATH}/login`,
    method: 'get'
  })
}

export function logout(thirdType) {
  return request({
    url: `${thirdType}${PATH}/logout`,
    method: 'get'
  })
}

export function getUserInfo(thirdType) {
  return request({
    url: `${thirdType}${PATH}/getUserInfo`,
    method: 'get'
  }).catch((e) => {
      console.log("getUserInfo err ---", e)
  })
}

export function getAllUser(thirdType) {
  return request({
    url: `${thirdType}${PATH}/getAllUser`,
    method: 'get'
  })
}

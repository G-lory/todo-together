import request from './request';

export function createTask(task) {
  return request({
    url: '/createTask',
    method: 'post',
    data: task
  })
}

export function queryTasks(params) {
  let pUrl;
  if (params) {
    pUrl = Object.keys(params).map(key => key + '=' + params[key]).join('&');
  }
  return request({
    url: '/queryTasks' + pUrl ? '?' + pUrl : '',
    method: 'get'
  })
}
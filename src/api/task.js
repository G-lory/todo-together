import request from './request';

export function createTask(task) {
  return request({
    url: '/createTask',
    method: 'post',
    data: task
  })
}

export function queryTask() {
  return request({
    url: '/queryTask',
    method: 'get'
  })
}
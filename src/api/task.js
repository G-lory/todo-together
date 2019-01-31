import request from './request';

export function createTask(task) {
  return request({
    url: '/createTask',
    method: 'post',
    data: task
  })
}
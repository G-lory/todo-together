import axios from 'axios';
import { message } from 'antd';

const service = axios.create({
  baseURL: '/api', // api 的 base_url
  timeout: 15000 // 请求超时时间
})

// respone 拦截器
service.interceptors.response.use(
  response => {
    let data = response.data;
    if (!data.success) {
      message.warning(data.msg || '请求出错');
    }
    console.log('>>>', data)
    return data; // 获取返回结果的 data
  },
  error => {
    console.log('err' + error)  // for debug
    message.error(error.message);
    return Promise.reject(error)
  }
)

export default service

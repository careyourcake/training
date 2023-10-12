//这个文件主要是用来对axios进行一些全局配置的，比如请求的根路径，请求前的拦截，请求后的拦截等等
//先导入axios
import axios from 'axios';//不能用require
// 全局的 axios 配置  详细参见axios的文档：http://www.axios-js.com/zh-cn/docs
axios.defaults.baseURL = '/api';
axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";
export default axios; 



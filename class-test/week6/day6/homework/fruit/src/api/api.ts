//导入axios全局配置文件   这样可以使用全局配置后的axios
import axios from './axios.config';
//导入接口类型文件：定义了哪个接口接受哪些数据类型
import { registerData } from './type';

// 注册接口
export const registerPost = (data:registerData) => axios({ method: "post", url: "/register", data: data });
// 验证码接口
export const codePost = () =>axios({ method: "post", url: "/code" });


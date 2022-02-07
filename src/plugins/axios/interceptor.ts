import axios from "axios";
import ENV from "@/assets/env";

// 全局配置项
let config: any = {
  timeout: 10000,
  responseType: "JSON",
  baseURL: ENV.suterusu.http,
};

// 创建实例
const _axios = axios.create(config);

// 请求拦截器
_axios.interceptors.request.use(
  config => {
    const POST = config.method == "POST";
    const stringData = JSON.stringify(config.data);
    POST && (config.data = stringData);
    return config;
  },

  error => {
    return Promise.reject(error);
  },
);

// 响应拦截器
_axios.interceptors.response.use(
  ({ data, status }) => {
    if (status == 200) return Promise.resolve(data);
    return Promise.reject(data);
  },

  error => {
    return Promise.reject(error);
  },
);

// 导出拦截器
export default _axios;

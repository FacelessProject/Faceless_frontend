import axios from "axios";
import ENV from "@/assets/env";
import { createDiscreteApi } from "naive-ui";

// 初始化实例
const _axios = axios.create({
  timeout: 300000,
  responseType: "json",
  baseURL: ENV.suterusu.http,
});

// 请求拦截器
_axios.interceptors.request.use(
  config => {
    config.method?.toUpperCase() === "POST" && (config.data = JSON.stringify(config.data));
    return config;
  },

  error => {
    return Promise.reject(error);
  },
);

// 响应拦截器
_axios.interceptors.response.use(
  ({ data, status }) => {
    if (status === 200) return Promise.resolve(data);
    return Promise.reject(data);
  },

  error => {
    return Promise.reject(error);
  },
);

export default _axios;

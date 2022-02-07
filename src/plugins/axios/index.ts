// 封装实例
import _axios from "./interceptor";

// GET请求
const $GET = function (path: string, params: object) {
  return _axios.get(path, { params });
};

// PUT请求
const $PUT = function (path: string, params: object) {
  return _axios.put(path, params);
};

// POST请求
const $POST = function (path: string, params: object) {
  return _axios.post(path, params);
};

// 导出方法
export { $GET, $PUT, $POST };

// 封装实例
import _axios from "./interceptor";

// GET请求
const $GET = function (path: string, params: object = {}) {
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

// DELETE请求
const $DELETE = function (path: string, data: object) {
  return _axios.delete(path, { data });
};

// 导出方法
export { $GET, $PUT, $POST, $DELETE };

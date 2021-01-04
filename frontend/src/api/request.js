import axios from 'axios';

const request = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 1000
});

axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (typeof error.response === 'undefined') {
    }
    return Promise.reject(error);
  }
);

export default request;

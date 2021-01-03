import axios from 'axios';

const request = axios.create();

const userToken = window.localStorage.getItem('user_token');
if (userToken) {
  request.defaults.headers.common['Authorization'] = `Bearer ${userToken}`;
}

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (typeof error.response === 'undefined') {
    }
    return Promise.reject(error);
  }
);

export default request;

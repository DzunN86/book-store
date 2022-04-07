import Axios from 'axios';
import {Store} from '../store';

let headers = {};

const instance = Axios.create({
  baseURL: 'http://code.aldipee.com/api/v1',
  headers,
});

instance.interceptors.request.use(
  config => {
    const store = Store.getState();
    const token = store.authReducer.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  response =>
    new Promise((resolve, reject) => {
      resolve(response);
    }),
  error => {
    if (!error.response) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }

    if (error.response.status === 403) {
      console.log('403');
    } else {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  },
);

export default instance;

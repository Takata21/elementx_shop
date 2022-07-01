import axios from 'axios';

import { API_URL_LOCAL, API_URL_ONLINE } from '../config';
const API = API_URL_ONLINE + '/payment';

const axios2 = axios.create({
  baseURL: `${API}`,
});

axios2.interceptors.request.use(
  function (config) {
    config.headers.Authorization = `${localStorage.getItem('token')}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const createOrder = async (newOrder) =>
  axios2.post(`${API}/create-order`, newOrder, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

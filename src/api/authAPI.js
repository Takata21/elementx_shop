import axios from 'axios';
import { API_URL_LOCAL, API_URL_ONLINE } from '../config';
const API = API_URL_LOCAL + '/auth';

export const register = async (user) =>
  await axios.post(`${API}/register`, user);

export const login = async (user) => await axios.post(`${API}/login`, user);

export const profile = async (token) =>
  await axios.get(`${API}/profile`, {
    headers: {
      Authorization: token,
    },
  });

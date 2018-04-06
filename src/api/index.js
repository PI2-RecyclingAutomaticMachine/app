import axios from 'axios';
import { getToken } from '../lib/user';

const api = axios.create({
  baseURL: '/api',
  headers: { Authorization: `Bearer ${getToken()}` },
});

export default api;

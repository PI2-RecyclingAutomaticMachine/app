import axios from 'axios';
import { getToken } from '../lib/user';
import { Platform } from 'quasar';

const baseURL = Platform.is.cordova
  ? 'http://35.196.52.216/api/'
  : '/api';

const api = axios.create({
  baseURL,
  headers: { Authorization: `Bearer ${getToken()}` },
});

export default api;

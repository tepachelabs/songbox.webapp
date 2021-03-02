import Promise from 'bluebird';
import { API_PATH_ROUTE } from 'routes';
import { getWithAuth } from './apiService';

export const apiFetchFiles = (token, path) =>
  new Promise((resolve, reject) => {
    getWithAuth(`${API_PATH_ROUTE}/${path}`, token, resolve, reject);
  });

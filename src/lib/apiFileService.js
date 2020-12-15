import Promise from 'bluebird';
import { getWithAuth } from './apiService';

export const apiFetchFile = (token, path) => new Promise((resolve, reject) => {
  getWithAuth(`/api/file${path}`, token, resolve, reject);
});

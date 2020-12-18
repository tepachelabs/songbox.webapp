import Promise from 'bluebird';
import { getWithAuth } from './apiService';

export const apiFetchStreamableSongs = (token, path) => new Promise((resolve, reject) => {
  getWithAuth(`/api/file${path}`, token, resolve, reject);
});

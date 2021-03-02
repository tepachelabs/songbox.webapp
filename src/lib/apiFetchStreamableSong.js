import Promise from 'bluebird';
import { API_STREAM_LINK_ROUTE } from 'routes';
import { getWithAuth } from './apiService';

export const apiFetchStreamableSong = (token, path) =>
  new Promise((resolve, reject) => {
    getWithAuth(`${API_STREAM_LINK_ROUTE}${path}`, token, resolve, reject);
  });

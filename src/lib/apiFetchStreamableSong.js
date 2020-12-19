import Promise from 'bluebird';
import { API_FILE_ROUTE } from 'routes';
import { getWithAuth } from './apiService';

export const apiFetchStreamableSongs = (token, path) => new Promise((resolve, reject) => {
  const apiFileRouteWithPath = API_FILE_ROUTE + path;
  getWithAuth(apiFileRouteWithPath, token, resolve, reject);
});

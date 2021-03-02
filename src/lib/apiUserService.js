import Promise from 'bluebird';
import { API_ME_ROUTE } from 'routes';
import { getWithAuth } from './apiService';

export const apiMeRequest = (token) =>
  new Promise((resolve, reject) => {
    getWithAuth(API_ME_ROUTE, token, resolve, reject);
  });

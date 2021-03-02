import Promise from 'bluebird';

import { postWithAuth, getWithAuth, deleteWithAuth } from 'lib/apiService';

import { API_FAVORITES_ROUTE } from 'routes';

export const apiCreateFavorite = (token, name, path) =>
  new Promise((resolve, reject) => {
    postWithAuth(API_FAVORITES_ROUTE, token, { name, path }, resolve, reject);
  });

export const apiReadFavorites = (token) =>
  new Promise((resolve, reject) => {
    getWithAuth(API_FAVORITES_ROUTE, token, resolve, reject);
  });

export const apiDeleteFavorite = (token, id) =>
  new Promise((resolve, reject) => {
    deleteWithAuth(`${API_FAVORITES_ROUTE}/${id}`, token, resolve, reject);
  });

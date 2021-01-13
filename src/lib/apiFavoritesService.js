import Promise from 'bluebird';

import {
  postWithAuth,
  getWithAuth,
} from 'lib/apiService';

import {
  API_FAVORITE_ROUTE,
  API_FAVORITES_ROUTE,
} from 'routes';

export const createFavoriteService = (token, body) => new Promise((resolve, reject) => {
  postWithAuth(API_FAVORITE_ROUTE, token, body, resolve, reject);
});

export const getFavoriteSongsService = (token) => new Promise((resolve, reject) => {
  getWithAuth(API_FAVORITES_ROUTE, token, resolve, reject);
});

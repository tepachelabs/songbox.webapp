import Promise from 'bluebird';
import { serializeFavoriteObject } from 'utils/transforms';

import { postWithAuth, getWithAuth, deleteWithAuth } from 'lib/apiService';

import { API_FAVORITE_ROUTE, API_FAVORITES_ROUTE } from 'routes';

export const apiAddFavorite = (token, body) =>
  new Promise((resolve, reject) => {
    postWithAuth(
      API_FAVORITE_ROUTE,
      token,
      serializeFavoriteObject(body),
      resolve,
      reject,
    );
  });

export const apiFetchFavorites = (token) =>
  new Promise((resolve, reject) => {
    getWithAuth(API_FAVORITES_ROUTE, token, resolve, reject);
  });

export const apiDeleteFavorite = (token, body) =>
  new Promise((resolve, reject) => {
    deleteWithAuth(
      API_FAVORITE_ROUTE,
      token,
      serializeFavoriteObject(body),
      resolve,
      reject,
    );
  });

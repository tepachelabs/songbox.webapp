import Promise from 'bluebird';

import { postWithAuth } from 'lib/apiService';
import { API_FAVORITE_ROUTE } from 'routes';

export const createFavoriteService = (token, body) => new Promise((resolve, reject) => {
  postWithAuth(API_FAVORITE_ROUTE, token, body, resolve, reject);
});

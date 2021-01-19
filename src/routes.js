import config from 'config';

/* Server Routes */
export const LOGIN_PAGE = `${config.apiGatewayUrl}/login`;
export const DROPBOX_SIGN_IN_ROUTE = `${config.apiGatewayUrl}/auth/dropbox`;

/* Webapp Routes */
export const EMPTY_PATH = '/';
export const LOGIN_PATH = '/login';
export const APP_PATH = '/app';
export const FILE_PATH = '/app/:path+';
export const FAVORITES_PATH = '/favorites';
export const SETTINGS_PATH = '/settings';
export const HELP_PATH = '/help';

/* API routes */
export const API_FILE_ROUTE = '/api/file';

/* API favorites routes */
export const API_FAVORITE_ROUTE = '/api/favorite';
export const API_FAVORITES_ROUTE = '/api/favorites';

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
export const API_ME_ROUTE = '/v1/me';
export const API_PATH_ROUTE = '/v1/path';
export const API_STREAM_LINK_ROUTE = '/v1/stream_link';
export const API_FAVORITES_ROUTE = '/v1/favorites';

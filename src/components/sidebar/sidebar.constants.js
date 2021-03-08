import {
  Favorite,
  ExitToApp,
  HelpOutline,
  Home,
  Settings,
} from '@material-ui/icons';

import {
  APP_PATH,
  FAVORITES_PATH,
  HELP_PATH,
  SETTINGS_PATH,
  SIGN_OUT_PATH,
} from 'routes';

export const MENU_ITEMS = [
  { icon: Home, title: 'home', link: APP_PATH },
  { icon: Favorite, title: 'favorites', link: FAVORITES_PATH },
  { icon: Settings, title: 'settings', link: SETTINGS_PATH },
  { icon: HelpOutline, title: 'help', link: HELP_PATH },
  { icon: ExitToApp, title: 'sign-out', link: SIGN_OUT_PATH },
];

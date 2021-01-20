import {
  APP_PATH,
  FAVORITES_PATH,
  HELP_PATH,
  LOGIN_PATH,
  SETTINGS_PATH,
} from 'routes';

import {
  HeartIcon,
  HelpCircleIcon,
  HomeIcon,
  LogOutIcon,
  SettingsIcon,
} from 'components/icon';

export const MENU_ITEMS = [
  { icon: HomeIcon, title: 'Home', link: APP_PATH },
  { icon: HeartIcon, title: 'Favorites', link: FAVORITES_PATH },
  { icon: SettingsIcon, title: 'Settings', link: SETTINGS_PATH },
  { icon: HelpCircleIcon, title: 'Help', link: HELP_PATH },
  { icon: LogOutIcon, title: 'Sign out', link: LOGIN_PATH },
];

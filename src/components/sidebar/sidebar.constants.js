import {
  APP_PATH,
  FAVORITES_PATH,
  HELP_PATH,
  SETTINGS_PATH,
  SIGN_OUT_PATH,
} from 'routes';

import {
  HeartIcon,
  HelpCircleIcon,
  HomeIcon,
  LogOutIcon,
  SettingsIcon,
} from 'components/icon';

export const MENU_ITEMS = [
  { icon: HomeIcon, title: 'home', link: APP_PATH },
  { icon: HeartIcon, title: 'favorites', link: FAVORITES_PATH },
  { icon: SettingsIcon, title: 'settings', link: SETTINGS_PATH },
  { icon: HelpCircleIcon, title: 'help', link: HELP_PATH },
  { icon: LogOutIcon, title: 'sign-out', link: SIGN_OUT_PATH },
];

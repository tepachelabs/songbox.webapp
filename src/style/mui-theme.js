import { createMuiTheme } from '@material-ui/core/styles';
import {
  black,
  gray,
  muiBlack,
  muiPaperBackgroundBlack,
  muiWhite,
  orange,
  white,
} from './colors';

export function MuiThemeFactory() {
  const create = (isDarkThemeEnabled) =>
    createMuiTheme({
      palette: {
        background: {
          default: isDarkThemeEnabled ? muiBlack : white,
          paper: isDarkThemeEnabled ? muiPaperBackgroundBlack : muiWhite,
        },
        common: { black, white },
        primary: {
          type: isDarkThemeEnabled ? 'dark' : 'light',
          main: isDarkThemeEnabled ? orange : orange,
        },
        text: {
          primary: isDarkThemeEnabled ? white : black,
          secondary: gray,
        },
        action: {
          active: isDarkThemeEnabled ? white : gray,
        },
      },
      typography: {
        fontFamily: ['Asap', 'sans-serif'],
        h1: { fontFamily: ['Quicksand', 'sans-serif'] },
        h2: { fontFamily: ['Quicksand', 'sans-serif'] },
        h3: { fontFamily: ['Quicksand', 'sans-serif'] },
        h4: { fontFamily: ['Quicksand', 'sans-serif'] },
        h5: { fontFamily: ['Quicksand', 'sans-serif'] },
        h6: { fontFamily: ['Quicksand', 'sans-serif'] },
        button: { fontFamily: ['Quicksand', 'sans-serif'] },
      },
    });

  return {
    create,
  };
}

export default MuiThemeFactory();

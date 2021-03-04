import { createMuiTheme } from '@material-ui/core/styles';
import { black, orange, white } from './colors';

export function MuiThemeFactory() {
  const create = (isDarkThemeEnabled) =>
    createMuiTheme({
      palette: {
        common: { black, white },
        primary: {
          type: isDarkThemeEnabled ? 'dark' : 'light',
          main: isDarkThemeEnabled ? orange : orange,
        },
        text: {
          primary: isDarkThemeEnabled ? white : black,
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

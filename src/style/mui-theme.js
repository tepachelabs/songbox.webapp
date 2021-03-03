import { createMuiTheme } from '@material-ui/core/styles';
import { black, orange, white } from './colors';

export function MuiThemeFactory() {
  const create = (isDarkThemeActive) =>
    createMuiTheme({
      palette: {
        common: { black, white },
        primary: {
          type: isDarkThemeActive ? 'dark' : 'light',
          main: isDarkThemeActive ? orange : orange,
        },
        text: {
          primary: isDarkThemeActive ? white : black,
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

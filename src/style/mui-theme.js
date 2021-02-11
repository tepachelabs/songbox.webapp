import { createMuiTheme } from '@material-ui/core/styles';
import { gray, black, hexToRGB, orange, white } from './colors';

const transparentOrange = `rgba(${hexToRGB(orange)},0.1)`;

export function MuiThemeFactory() {
  const create = (themeType = 'light') =>
    createMuiTheme({
      palette: {
        type: themeType,
        text: {
          primary: themeType === 'light' ? gray : white,
        },
      },
      typography: {
        h4: {
          padding: '10px',
        },
        fontFamily: ['Quicksand', 'sans-serif'],
      },
      overrides: {
        MuiPaper: {
          root: {
            height: '82vh',
          },
        },
        MuiListItem: {
          root: {
            color: themeType === 'light' ? black : white,
            fontSize: 16,
            '&.active': {
              backgroundColor: transparentOrange,
            },
          },
          button: {
            minWidth: '14em',
            '&:hover': {
              backgroundColor: transparentOrange,
            },
          },
        },
      },
    });
  return {
    create,
  };
}

export default MuiThemeFactory();

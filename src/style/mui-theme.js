import { createMuiTheme } from '@material-ui/core/styles';
import { gray, black, hexToRGB, orange } from './colors';

const transparentOrange = `rgba(${hexToRGB(orange)},0.1)`;

export const muiTheme = createMuiTheme({
  palette: {
    text: {
      primary: gray,
    },
  },
  typography: {
    fontFamily: ['Asap', 'sans-serif'],
  },
  overrides: {
    MuiListItem: {
      root: {
        color: black,
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

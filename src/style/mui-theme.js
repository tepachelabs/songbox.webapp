import { createMuiTheme } from '@material-ui/core/styles';
import { gray } from './colors';

export const muiTheme = createMuiTheme({
  palette: {
    text: {
      primary: gray,
    },
  },
});

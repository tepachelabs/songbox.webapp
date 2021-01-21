import { Button as MuiButton, withStyles } from '@material-ui/core';
import { blue, white } from './colors';

export const Button = withStyles(({ spacing }) => ({
  root: {
    fontWeight: 600,
    textTransform: 'none',
    paddingLeft: spacing(3),
    paddingRight: spacing(3),
  },
}))(MuiButton);

export const DropboxButton = withStyles(() => ({
  root: {
    color: white,
    backgroundColor: blue,
    '&:hover': {
      backgroundColor: blue,
    },
  },
}))(Button);

export const HeartButton = withStyles(() => ({
  root: {
    background: 'none',
    border: 'none',
  },
}))(Button);

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

export const TransparentButton = withStyles(() => ({
  root: {
    background: 'none',
    border: 'none',
  },
}))(Button);

export const PlayerRegularButton = withStyles(({ breakpoints, spacing }) => ({
  root: {
    [breakpoints.down('sm')]: {
      height: spacing(3),
      width: spacing(3),
    },
    height: spacing(4),
    width: spacing(4),
    padding: 0,
  },
}))(Button);

export const PlayerLargeButton = withStyles(({ breakpoints, spacing }) => ({
  root: {
    [breakpoints.down('sm')]: {
      height: spacing(6),
      width: spacing(6),
    },
    height: spacing(7),
    width: spacing(7),
  },
}))(PlayerRegularButton);

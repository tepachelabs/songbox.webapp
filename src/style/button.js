import { Button as MuiButton, withStyles } from '@material-ui/core';
import { blue, white } from './colors';
import { theme } from './theme';

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

export const PlayerButton = withStyles(({ breakpoints }) => ({
  root: {
    [breakpoints.down('sm')]: {
      height: theme.spacing.four,
      width: theme.spacing.four,
    },
    height: theme.spacing.nine,
    width: theme.spacing.nine,
    padding: 0,
  },
}))(Button);

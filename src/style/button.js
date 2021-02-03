import { Button as MuiButton, withStyles } from '@material-ui/core';
import { blue, white, orange } from './colors';

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

export const PlayerButton = withStyles(({ breakpoints, spacing }) => ({
  root: {
    [breakpoints.down('sm')]: {
      height: spacing(4),
      width: spacing(4),
    },
    height: spacing(6),
    width: spacing(6),
    padding: 0,
  },
}))(Button);

export const RoundedButton = withStyles(({ spacing }) => ({
  root: {
    backgroundColor: white,
    border: spacing(1),
    borderColor: orange,
    borderRadius: spacing(3),
    borderStyle: 'solid',
    borderWidth: spacing(0.1),
    color: orange,
    '&:hover': {
      backgroundColor: orange,
      color: white,
    },
  },
}))(Button);

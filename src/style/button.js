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

export const OrangeButton = withStyles(() => ({
  root: {
    backgroundColor: orange,
    color: white,
    '&:hover, &:active, &:visited': {
      backgroundColor: orange,
    },
  },
}))(Button);

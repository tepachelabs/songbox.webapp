import { Button as MuiButton, withStyles } from '@material-ui/core';
import { white, orange, dropboxBlue } from './colors';

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
    backgroundColor: dropboxBlue,
    color: white,
    '&:hover': {
      backgroundColor: dropboxBlue,
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

import {
  CircularProgress as MuiCircularProgress,
  withStyles,
} from '@material-ui/core';

export const CircularProgressIcon = withStyles(() => ({
  root: ({ size = 32 }) => ({
    height: `${size}px !important`,
    width: `${size}px !important`,
  }),
  circle: {
    strokeWidth: 4,
  },
}))(MuiCircularProgress);

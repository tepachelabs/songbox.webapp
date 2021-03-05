import { Card as MuiCard, withStyles } from '@material-ui/core';

export const Card = withStyles(() => ({
  root: {
    maxWidth: '32em',
    margin: '0 auto',
    textAlign: 'center',
  },
}))(MuiCard);

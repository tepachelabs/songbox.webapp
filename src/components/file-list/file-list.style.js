import { List, withStyles } from '@material-ui/core';

export const ListWrapper = withStyles(() => ({
  root: {
    paddingBottom: 0,
    paddingTop: 0,
  },
}))(List);

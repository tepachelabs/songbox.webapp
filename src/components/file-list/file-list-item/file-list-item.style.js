import {
  ListItem,
  withStyles,
} from '@material-ui/core';

export const FileListItem = withStyles(() => ({
  secondaryAction: {
    paddingRight: '6em',
  },
}))(ListItem);

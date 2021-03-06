import { ListItem, withStyles } from '@material-ui/core';
import { hexToRGB, orange } from 'style/colors';

export const FileListItem = withStyles(() => ({
  selected: {
    background: `rgba(${hexToRGB(orange)},0.3)`,
  },
  secondaryAction: {
    paddingRight: '6em',
  },
}))(ListItem);

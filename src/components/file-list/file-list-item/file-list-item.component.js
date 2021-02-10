import React from 'react';
import PropTypes from 'prop-types';
import {
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from '@material-ui/core';

import { FileListItem } from './file-list-item.style';

export const FileListItemComponent = ({
  children,
  icon,
  onClick,
  title,
  ...props
}) => (
  <FileListItem button onClick={onClick} {...props}>
    <ListItemIcon>{icon}</ListItemIcon>
    <ListItemText>
      <Typography variant="inherit" noWrap component="div">
        {title}
      </Typography>
    </ListItemText>
    {children && <ListItemSecondaryAction>{children}</ListItemSecondaryAction>}
  </FileListItem>
);

FileListItemComponent.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.node,
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
};

FileListItemComponent.defaultProps = {
  children: null,
  icon: null,
  onClick: () => {},
};

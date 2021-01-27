import React from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from '@material-ui/core';

export const FileListItemComponent = ({
  children, icon, onClick, title,
}) => (
  <ListItem button onClick={onClick}>
    <ListItemIcon>
      {icon}
    </ListItemIcon>
    <ListItemText>
      <Typography variant="inherit" noWrap component="div">
        { title }
      </Typography>
    </ListItemText>
    {children && (
      <ListItemSecondaryAction>
        {children}
      </ListItemSecondaryAction>
    )}
  </ListItem>
);

FileListItemComponent.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.node,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

FileListItemComponent.defaultProps = {
  children: null,
  icon: null,
};

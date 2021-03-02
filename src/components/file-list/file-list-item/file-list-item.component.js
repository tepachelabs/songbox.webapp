import React from 'react';
import PropTypes from 'prop-types';
import {
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core';

import { FileListItem } from './file-list-item.style';
import { FileTitle } from '../file-title';

export const FileListItemComponent = ({
  children,
  icon,
  onClick,
  name,
  ...props
}) => (
  <FileListItem button onClick={onClick} {...props}>
    <ListItemIcon>{icon}</ListItemIcon>
    <ListItemText>
      <FileTitle name={name} />
    </ListItemText>
    {children && <ListItemSecondaryAction>{children}</ListItemSecondaryAction>}
  </FileListItem>
);

FileListItemComponent.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.node,
  onClick: PropTypes.func,
  name: PropTypes.string.isRequired,
};

FileListItemComponent.defaultProps = {
  children: null,
  icon: null,
  onClick: () => {},
};

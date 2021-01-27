import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import {
  Divider,
  IconButton,
  List as MuiList,
} from '@material-ui/core';

import { FolderIcon, MusicIcon } from 'components/icon';
import { FileListItemComponent } from './file-list-item';

const getIcon = (type) => (type === 'folder' ? <FolderIcon /> : <MusicIcon />);

const renderActions = (actions) => (
  actions.map(({ alt, icon, onClick }) => (
    <IconButton
      key={alt}
      edge="end"
      onClick={onClick}
    >
      {icon}
    </IconButton>
  ))
);

export const FileListComponent = ({ dense, files }) => (
  <MuiList dense={dense}>
    {files.map(({ type, title, actions }) => (
      <Fragment key={title}>
        <Divider />
        <FileListItemComponent
          icon={getIcon(type)}
          title={title}
          onClick={() => console.log('clicked')}
        >
          { actions && renderActions(actions) }
        </FileListItemComponent>
      </Fragment>
    ))}
  </MuiList>
);

FileListComponent.propTypes = {
  dense: PropTypes.bool.isRequired,
  files: PropTypes.instanceOf(List).isRequired,
};

import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import {
  Divider,
  IconButton,
} from '@material-ui/core';

import { APP_PATH } from 'routes';
import { FolderIcon, MusicIcon } from 'components/icon';

import { ListWrapper } from './file-list.style';
import { FileListItemComponent } from './file-list-item';

const getIcon = (type) => (type === 'folder' ? <FolderIcon /> : <MusicIcon />);

const renderActions = (actions) => (
  actions.map(({ alt, icon, onClick }) => (
    <IconButton
      key={alt}
      edge="end"
      onClick={onClick}
    >
      { icon }
    </IconButton>
  ))
);

export const FileListComponent = ({ dense, files, onClick }) => {
  const getProps = ({ type, path }) => {
    if (type === 'folder') {
      return {
        component: Link,
        to: `${APP_PATH}${path}`,
      };
    }

    return { onClick };
  };

  return (
    <ListWrapper dense={dense}>
      {files.map(({
        type, title, actions, path,
      }) => (
        <Fragment key={title}>
          <Divider />
          <FileListItemComponent
            {...getProps({ type, path })}
            icon={getIcon(type)}
            title={title}
          >
            { actions && renderActions(actions) }
          </FileListItemComponent>
        </Fragment>
      ))}
    </ListWrapper>
  );
};

FileListComponent.propTypes = {
  dense: PropTypes.bool.isRequired,
  files: PropTypes.instanceOf(List).isRequired,
  onClick: PropTypes.func,
};

FileListComponent.defaultProps = {
  onClick: () => {},
};

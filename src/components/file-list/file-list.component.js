import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import {
  Divider,
  IconButton,
} from '@material-ui/core';

import { getSongStreamLink } from 'store/actions/playerActions';
import { setSongIndex } from 'store/actions/songsQueueActions';

import { APP_PATH } from 'routes';
import { FolderIcon, MusicIcon } from 'components/icon';

import { ListWrapper } from './file-list.style';
import { FileListItemComponent } from './file-list-item';

const getIcon = (type) => (type === 'folder' ? <FolderIcon /> : <MusicIcon />);

const renderActions = (actions, title, path) => (
  actions.map(({ alt, icon, onClick }) => (
    <IconButton
      key={alt}
      edge="end"
      onClick={() => onClick(title, path)}
    >
      { icon }
    </IconButton>
  ))
);

export const FileListComponent = ({ dense, files }) => {
  const dispatch = useDispatch();

  const onSongClick = (path, index) => {
    dispatch(getSongStreamLink(path));
    dispatch(setSongIndex(index));
  };

  const getProps = ({ type, path, index }) => {
    if (type === 'folder') {
      return {
        component: Link,
        to: `${APP_PATH}${path}`,
      };
    }

    return { onClick: () => onSongClick(path, index) };
  };

  return (
    <ListWrapper dense={dense}>
      {files.map(({
        type, title, actions, path,
      }, index) => (
        <Fragment key={title}>
          <Divider />
          <FileListItemComponent
            {...getProps({ type, path, index })}
            icon={getIcon(type)}
            title={title}
          >
            { actions && renderActions(actions, title, path) }
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

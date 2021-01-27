import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import {
  Divider,
  IconButton,
  List as MuiList,
} from '@material-ui/core';

import { APP_PATH } from 'routes';
import { getSongStreamLink } from 'store/actions/playerActions';
import { setSongIndex, changeSongsQueue } from 'store/actions/songsQueueActions';
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

export const FileListComponent = ({ dense, files }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const folderOnClick = (path) => {
    history.push(APP_PATH + path);
  };

  const fileOnClick = (path, songs, index) => {
    dispatch(getSongStreamLink(path));
    dispatch(changeSongsQueue(songs));
    dispatch(setSongIndex(index));
  };

  return (
    <MuiList dense={dense}>
      {files.map(({
        type, title, actions, path,
      }, index) => (
        type === 'folder'
          ? (
            <Fragment key={title}>
              <Divider />
              <FileListItemComponent
                icon={getIcon(type)}
                title={title}
                onClick={() => folderOnClick(path)}
              >
                { actions && renderActions(actions) }
              </FileListItemComponent>
            </Fragment>
          )
          : (
            <Fragment key={title}>
              <Divider />
              <FileListItemComponent
                icon={getIcon(type)}
                title={title}
                onClick={() => fileOnClick(path, files, index)}
              >
                { actions && renderActions(actions) }
              </FileListItemComponent>
            </Fragment>
          )
      ))}
    </MuiList>
  );
};

FileListComponent.propTypes = {
  dense: PropTypes.bool.isRequired,
  files: PropTypes.instanceOf(List).isRequired,
};

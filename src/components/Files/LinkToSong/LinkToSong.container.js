import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';
import { List } from 'immutable';

import { setSongIndex, changeSongsQueue } from 'store/actions/songsQueueActions';
import { getSongStreamLink } from 'store/actions/playerActions';

import { getPlayingSongPath } from 'store/selectors/songsQueue';
import LinkToSongComponent from './LinkToSong.component';

const LinkToSongContainer = ({
  index, fileName, files, path,
}) => {
  const playingSongPath = useSelector((state) => getPlayingSongPath(state));

  const dispatch = useDispatch();

  const selectSong = () => {
    dispatch(getSongStreamLink(path));
    dispatch(setSongIndex(index));
    dispatch(changeSongsQueue(files));
  };

  const isPlaying = path === playingSongPath;

  return (
    <LinkToSongComponent
      isPlaying={isPlaying}
      fileName={fileName}
      selectSong={selectSong}
      path={path}
    />
  );
};

LinkToSongContainer.propTypes = {
  index: propTypes.number.isRequired,
  fileName: propTypes.string.isRequired,
  files: propTypes.instanceOf(List).isRequired,
  path: propTypes.string.isRequired,
};

export default LinkToSongContainer;

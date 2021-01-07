import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';
import { List } from 'immutable';

import { setSongIndex, changeSongsQueue } from 'store/actions/songsQueueActions';
import { getSongStreamLink } from 'store/actions/playerActions';

import { selectSongPathAtIndex } from 'store/selectors/songsQueue';
import LinkToSongComponent from './LinkToSong.component';

const LinkToSongContainer = ({
  index,
  fileName,
  files,
  path,
}) => {
  const songIndex = useSelector((state) => state.songsQueue.get('index'));
  const playingSongPath = useSelector((state) => selectSongPathAtIndex(state, songIndex));

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

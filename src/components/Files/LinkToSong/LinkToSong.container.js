import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';

import { fetchSongLinkFromPath, changeSongIndex } from '../../../store/actions/playerActions';
import { changeSongsQueue } from '../../../store/actions/songsQueueActions';

import LinkToSongComponent from './LinkToSong.component';

const LinkToSongContainer = ({ fileName, path, songIndex }) => {
  const files = useSelector((state) => state.files.get('files'));

  const dispatch = useDispatch();

  const selectSong = () => {
    dispatch(changeSongsQueue(files));
    dispatch(changeSongIndex(songIndex));
    dispatch(fetchSongLinkFromPath(path));
  };

  return (
    <LinkToSongComponent
      selectSong={selectSong}
      fileName={fileName}
    />
  );
};

LinkToSongContainer.propTypes = {
  fileName: propTypes.string,
  path: propTypes.string,
  songIndex: propTypes.number.isRequired,
};

LinkToSongContainer.defaultProps = {
  fileName: propTypes.string,
  path: propTypes.string,
};

export default LinkToSongContainer;

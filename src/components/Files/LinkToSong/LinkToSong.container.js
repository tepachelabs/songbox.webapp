import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';
import { List } from 'immutable';

import { setSongIndex, changeSongsQueue } from 'store/actions/songsQueueActions';
import { getSongStreamLink, setIsPlaying } from 'store/actions/playerActions';

import { selectSongPathAtIndex } from 'store/selectors/songsQueue';
import { isSongInFavorites } from 'Favorites/favorites';
import { handleInteractionWithFavorite } from 'store/actions/favoritesActions';
import LinkToSongComponent from './LinkToSong.component';

const LinkToSongContainer = ({
  index,
  fileName,
  files,
  path,
}) => {
  const songIndex = useSelector((state) => state.songsQueue.get('index'));
  const playingSongPath = useSelector((state) => selectSongPathAtIndex(state, songIndex));
  const favorites = useSelector((state) => state.favorites.get('songs'));
  const isPlayingSong = useSelector((state) => state.player.get('isPlaying'));
  const dispatch = useDispatch();

  const isFavorite = isSongInFavorites(favorites, path);
  const isPlaying = path === playingSongPath;

  const selectSong = () => {
    dispatch(getSongStreamLink(path));
    dispatch(setSongIndex(index));
    dispatch(changeSongsQueue(files));
  };

  const onDoubleClick = () => {
    dispatch(setIsPlaying(!isPlayingSong));
  };

  const onAddFavorite = () => {
    dispatch(handleInteractionWithFavorite(isFavorite, { fileName, path }));
  };

  return (
    <LinkToSongComponent
      fileName={fileName}
      onAddFavorite={onAddFavorite}
      isFavorite={isFavorite}
      isPlaying={isPlaying}
      selectSong={selectSong}
      onDoubleClick={onDoubleClick}
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

import React, { Fragment } from 'react';
import propTypes from 'prop-types';

import SongIcon from 'components/SongIcon';
import ContextMenu from 'components/ContextMenu';
import HeartFavorite from 'components/HeartFavorite';

const LinkToSongComponent = ({
  fileName,
  onAddFavorite,
  isFavorite,
  isPlaying,
  selectSong,
}) => {
  const isPlayingClassName = isPlaying ? 'is-playing' : '';

  return (
    <div className={`file-container song-file-container ${isPlayingClassName}`}>
      <SongIcon isPlaying={isPlaying} />
      <button className="file-name-container song-file" onClick={selectSong} type="button">
        <p className="file-name">{fileName}</p>
      </button>
      <Fragment>
        <HeartFavorite
          isFavorite={isFavorite}
          onClick={onAddFavorite}
        />
        <ContextMenu />
      </Fragment>
    </div>
  );
};

LinkToSongComponent.propTypes = {
  isFavorite: propTypes.bool.isRequired,
  isPlaying: propTypes.bool.isRequired,
  fileName: propTypes.string.isRequired,
  selectSong: propTypes.func.isRequired,
  onAddFavorite: propTypes.func.isRequired,
};

export default LinkToSongComponent;

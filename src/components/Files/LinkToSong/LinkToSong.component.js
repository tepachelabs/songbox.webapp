import React, { Fragment } from 'react';
import propTypes from 'prop-types';

import SongIcon from 'components/SongIcon';
import HeartFavoriteContainer from 'components/HeartFavorite';
import ContextMenu from 'components/ContextMenu';

const LinkToSongComponent = ({
  fileName,
  isPlaying,
  selectSong,
  path,
}) => {
  const isPlayingClassName = isPlaying ? 'is-playing' : '';

  return (
    <div className={`file-container song-file-container ${isPlayingClassName}`}>
      <SongIcon isPlaying={isPlaying} />
      <button className="file-name-container song-file" onClick={selectSong} type="button">
        <p className="file-name">{fileName}</p>
      </button>
      <Fragment>
        <HeartFavoriteContainer
          fileName={fileName}
          path={path}
        />
        <ContextMenu />
      </Fragment>
    </div>
  );
};

LinkToSongComponent.propTypes = {
  fileName: propTypes.string.isRequired,
  isPlaying: propTypes.bool.isRequired,
  selectSong: propTypes.func.isRequired,
  path: propTypes.string.isRequired,
};

export default LinkToSongComponent;

import React from 'react';
import propTypes from 'prop-types';

import SongIcon from '../../SongIcon';
import HeartFavorite from '../../HeartFavorite';
import ContextMenu from '../../ContextMenu';

const LinkToSongComponent = ({
  fileName, isPlaying, selectSong, path,
}) => {
  const isPlayingClassName = isPlaying ? 'is-playing' : '';

  return (
    <div
      onClick={selectSong}
      role="button"
      tabIndex={-1}
      onKeyDown={selectSong}
      className={`file-container ${isPlayingClassName}`}
    >
      <SongIcon
        isPlaying={isPlaying}
      />
      <div className="file-name-container">
        <p className="file-name">{fileName}</p>
      </div>
      <React.Fragment>
        <HeartFavorite
          fileName={fileName}
          path={path}
        />
        <ContextMenu />
      </React.Fragment>
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

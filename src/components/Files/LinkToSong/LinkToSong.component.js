import React from 'react';
import propType from 'prop-types';
import { useSelector } from 'react-redux';

import SongIcon from '../../SongIcon';

const LinkToSongComponent = ({ selectSong, fileName }) => {
  const darkThemeActive = useSelector((state) => state.player.darkTheme);

  return (
    /* eslint-disable jsx-a11y/no-static-element-interactions */
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div onClick={selectSong} className="file-container">
      <SongIcon />
      <div className="file-name-container">
        <p className={`file-name ${darkThemeActive ? 'dark-theme-color' : ''}`}>{'Unnamed file' && fileName}</p>
      </div>
    </div>
  );
};

LinkToSongComponent.defaultProps = {
  fileName: 'Unnamed file',
};

LinkToSongComponent.propTypes = {
  selectSong: propType.func.isRequired,
  fileName: propType.string,
};

export default LinkToSongComponent;

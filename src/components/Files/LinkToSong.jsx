import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';

import { List } from 'immutable';
import { changeSidebarIndex } from 'store/actions';
import { toggleIsFavoritePlaying } from 'store/actions/favoritesActions';
import { changeSongsQueue } from 'store/actions/songsQueueActions';
import { fetchStreamableSong } from 'store/actions/playerActions';

import SongIcon from '../SongIcon';
import HeartFavorite from '../HeartFavorite';
import ContextMenu from '../ContextMenu';

const LinkToSong = ({
  index, fileName, samePlaylist, files, path, inFavorites,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBroken, setIsBroken] = useState(false);

  const songIndex = useSelector((state) => state.songsQueue.get('inde'));
  const favoritePlaying = useSelector((state) => state.favorites.get('isPlaying'));
  const brokenLinks = useSelector((state) => state.songsQueue.get('brokenLinks'));
  const darkThemeActive = useSelector((state) => state.settings.get('darkTheme'));

  const dispatch = useDispatch();

  const setSongsQueue = (newQueue) => dispatch(changeSongsQueue(newQueue));
  const toggleFavoritePlayingState = (playing) => dispatch(toggleIsFavoritePlaying(playing));
  const setSongIndex = (sonIndex) => dispatch(changeSidebarIndex(sonIndex));

  const selectSong = () => {
    dispatch(fetchStreamableSong(path));
    setSongIndex(index);
    setIsPlaying(true);
    setSongsQueue(files);

    if (inFavorites) toggleFavoritePlayingState(true);
    else toggleFavoritePlayingState(false);
  };

  useEffect(() => {
    const found = brokenLinks.find((link) => link.toLowerCase() === path.toLowerCase());
    setIsBroken(!!found);
  }, [brokenLinks, path]);

  useEffect(() => {
    if (inFavorites) {
      const expression = (index === songIndex) && favoritePlaying;
      setIsPlaying(expression);
    } else {
      const expression = (index === songIndex) && samePlaylist;
      setIsPlaying(expression);
    }

    return () => setIsPlaying(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [songIndex, samePlaylist]);

  return (
    /* eslint-disable jsx-a11y/no-static-element-interactions */
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div onClick={selectSong} className={`file-container ${isPlaying && !isBroken ? 'is-playing' : ''} ${isBroken ? 'broken-link' : ''}`}>
      <SongIcon
        isPlaying={isPlaying}
        isBroken={isBroken}
      />
      <div className="file-name-container">
        <p className={`file-name ${darkThemeActive ? 'dark-theme-color' : ''}`}>{'Unnamed file' && fileName}</p>
        {isBroken && <p>We could not find this song...</p>}
      </div>
      {
        !isBroken
                && (
                  <React.Fragment>
                    <HeartFavorite
                      fileName={fileName}
                      path={path}
                    />
                    <ContextMenu />
                  </React.Fragment>
                )
      }
    </div>
  );
};

LinkToSong.propTypes = {
  index: propTypes.number,
  fileName: propTypes.string,
  samePlaylist: propTypes.bool,
  files: propTypes.instanceOf(List).isRequired,
  path: propTypes.string,
  inFavorites: propTypes.bool,
};

LinkToSong.defaultProps = {
  index: 0,
  fileName: '',
  samePlaylist: false,
  path: '',
  inFavorites: false,
};

export default LinkToSong;

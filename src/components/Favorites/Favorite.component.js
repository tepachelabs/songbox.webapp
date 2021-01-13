import React from 'react';
import { List } from 'immutable';
import propTypes from 'prop-types';

import LinkToSongContainer from '../Files/LinkToSong';

const FavoriteComponent = ({ favorites }) => (
  <div className="content-container">
    <h1 id="your-personal-library" className="title">
      Your personal library
      <span role="img" aria-label="heart">❤️</span>
    </h1>
    <div className="files-container">
      {
        favorites.map((favorite, index) => (
          <LinkToSongContainer
            key={favorite.get('song_name')}
            files={favorites}
            fileName={favorite.get('song_name')}
            path={favorite.get('path_lower')}
            index={index}
          />
        ))
      }
    </div>
  </div>
);

FavoriteComponent.propTypes = {
  favorites: propTypes.instanceOf(List).isRequired,
};

export default FavoriteComponent;

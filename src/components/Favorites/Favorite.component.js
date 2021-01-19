import React from 'react';
import { List } from 'immutable';
import propTypes from 'prop-types';

import {
  FavoritesContent,
  FavoritesTitle,
  FavoritesSongs,
} from './Favorites.style';

import LinkToSongContainer from '../Files/LinkToSong';

const FavoriteComponent = ({ favorites }) => (
  <FavoritesContent>
    <FavoritesTitle>
      Your personal library
      <span role="img" aria-label="heart">❤️</span>
    </FavoritesTitle>
    <FavoritesSongs>
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
    </FavoritesSongs>
  </FavoritesContent>
);

FavoriteComponent.propTypes = {
  favorites: propTypes.instanceOf(List).isRequired,
};

export default FavoriteComponent;

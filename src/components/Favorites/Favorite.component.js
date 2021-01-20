import React from 'react';
import { List } from 'immutable';
import propTypes from 'prop-types';

import {
  FavoritesWrapper,
  FavoritesTitle,
  FavoritesSongListWrapper,
} from './Favorites.style';

import LinkToSongContainer from '../Files/LinkToSong';

const FavoriteComponent = ({ favorites }) => (
  <FavoritesWrapper>
    <FavoritesTitle>
      Your personal library
      <span role="img" aria-label="heart">❤️</span>
    </FavoritesTitle>
    <FavoritesSongListWrapper>
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
    </FavoritesSongListWrapper>
  </FavoritesWrapper>
);

FavoriteComponent.propTypes = {
  favorites: propTypes.instanceOf(List).isRequired,
};

export default FavoriteComponent;

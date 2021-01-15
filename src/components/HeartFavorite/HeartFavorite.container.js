import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';

import { createFavorite } from 'store/actions/favoritesActions';

import { isSongInFavorites } from 'Favorites/favorites';

import HeartFavoriteComponent from './HeartFavorite.component';

const HeartFavoriteContainer = ({ fileName, path }) => {
  const favorites = useSelector((state) => state.favorites.get('songs'));
  const dispatch = useDispatch();

  const isFavorite = isSongInFavorites(favorites, path);

  const handleFavorite = () => {
    dispatch(createFavorite({
      song_name: fileName,
      path_lower: path,
    }));
  };

  return (
    <HeartFavoriteComponent
      isFavorite={isFavorite}
      handleFavorite={handleFavorite}
    />
  );
};

HeartFavoriteContainer.propTypes = {
  fileName: propTypes.string.isRequired,
  path: propTypes.string.isRequired,
};

export default HeartFavoriteContainer;

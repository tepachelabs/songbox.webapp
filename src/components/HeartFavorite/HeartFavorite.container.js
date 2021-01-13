import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';

import { createFavorite } from 'store/actions/favoritesActions';
import { isSongInFavorites } from 'utils/favorites';

import HeartFavoriteComponent from './HeartFavorite.component';

const HeartFavoriteContainer = ({ fileName, path }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const favorites = useSelector((state) => state.favorites.get('songs'));
  const dispatch = useDispatch();

  const handleFavorite = () => {
    dispatch(createFavorite(fileName, path));
  };

  useEffect(() => {
    setIsFavorite(isSongInFavorites(favorites, path));
  }, [favorites, path]);

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

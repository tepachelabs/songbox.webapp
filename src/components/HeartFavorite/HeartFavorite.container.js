import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';

import { createFavorite } from 'store/actions/favoritesActions';

import HeartFavoriteComponent from './HeartFavorite.component';

const HeartFavoriteContainer = ({ fileName, path }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const dispatch = useDispatch();

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
    dispatch(createFavorite(fileName, path));
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

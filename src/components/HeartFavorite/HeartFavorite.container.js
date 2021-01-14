import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';

import { createFavorite } from 'store/actions/favoritesActions';
import { isSongInFavorites } from 'Favorites/favorites';

import HeartFavoriteComponent from './HeartFavorite.component';
import Popup from '../Popup';

const HeartFavoriteContainer = ({ fileName, path }) => {
  const [hasError, setHasError] = useState(false);
  const favorites = useSelector((state) => state.favorites.get('songs'));
  const dispatch = useDispatch();

  const isFavorite = isSongInFavorites(favorites, path);

  const handleError = () => {
    setHasError(true);
  };

  const handleFavorite = () => {
    dispatch(createFavorite({
      song_name: fileName,
      path_lower: path,
    }, handleError));
  };

  return (
    <Fragment>
      <HeartFavoriteComponent
        isFavorite={isFavorite}
        handleFavorite={handleFavorite}
      />
      <Popup type="error" isOpen={hasError} setIsOpen={setHasError} />
    </Fragment>
  );
};

HeartFavoriteContainer.propTypes = {
  fileName: propTypes.string.isRequired,
  path: propTypes.string.isRequired,
};
export default HeartFavoriteContainer;

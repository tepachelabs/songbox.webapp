import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import swal from 'sweetalert';

import { addFavorite, removeFavorite } from 'store/actions/favoritesActions';
import { addFavorite as addFavoriteToDatabase, removeFavorite as removeFromDatabase } from '../../Favorites/favorites';

import './styles/favorite.scss';

const HeartFavorite = ({ fileName, path }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const dispatch = useDispatch();
  const addToFavoritesState = (newFile) => dispatch(addFavorite(newFile));
  const removeFromFavoritesState = (songToRemove) => dispatch(removeFavorite(songToRemove));

  const favorites = useSelector((state) => state.favorites.get('songs'));
  const brokenLinks = useSelector((state) => state.songsQueue.get('brokenLinks'));

  const showServiceNotAvailable = () => {
    setIsFavorite(false);
    swal({
      text: 'Service not available, try again later.',
      icon: 'error',
    });
  };

  useEffect(() => {
    if (!favorites) return;

    // eslint-disable-next-line camelcase
    favorites.forEach(({ path_lower }) => {
      // eslint-disable-next-line camelcase
      if (path.toLowerCase() === path_lower) {
        setIsFavorite(true);
      }
    });
  }, [favorites, path]);

  useEffect(() => {
    const checkIfBroken = async () => {
      const lastPosition = brokenLinks.length - 1;
      const lastLink = brokenLinks[lastPosition];

      if (path.toLowerCase() === lastLink.toLowerCase()) {
        const file = {
          song_name: fileName,
          path_lower: path,
        };

        try {
          setIsFavorite(false);
          removeFromFavoritesState(file);
          await removeFavorite(file);
        } catch (e) {
          showServiceNotAvailable();
        }
      }
    };

    if (brokenLinks.length > 0 && favorites.length > 0) checkIfBroken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [brokenLinks, fileName, path, favorites.length]);

  const markFavorite = async (e) => {
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();

    const file = {
      song_name: fileName,
      path_lower: path,
    };

    try {
      let success = false;

      if (!isFavorite) {
        setIsFavorite(true);
        addToFavoritesState(file);
        success = await addFavoriteToDatabase(file);
      } else {
        setIsFavorite(false);
        removeFromFavoritesState(file);
        success = await removeFromDatabase(file);
      }

      if (!success) throw new Error();
    } catch (error) {
      showServiceNotAvailable();
      setIsFavorite(false);
      removeFromFavoritesState(file);
    }
  };

  return (
    <svg onClick={markFavorite} className="feather feather-heart heart-icon icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={isFavorite ? '#8A8A8A' : 'none'} stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
};

HeartFavorite.propTypes = {
  fileName: propTypes.string,
  path: propTypes.string,
};

HeartFavorite.defaultProps = {
  fileName: '',
  path: '',
};

export default HeartFavorite;
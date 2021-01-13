import React from 'react';
import { useSelector } from 'react-redux';

import FavoriteComponent from './Favorite.component';

const FavoritesContainer = () => {
  const favorites = useSelector((state) => state.favorites.get('songs'));
  return <FavoriteComponent favorites={favorites} />;
};

export default FavoritesContainer;

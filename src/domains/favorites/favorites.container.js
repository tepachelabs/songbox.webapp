import React from 'react';
import { useSelector } from 'react-redux';

import FavoriteComponent from './favorite.component';

const FavoritesContainer = () => {
  const favorites = useSelector((state) => state.favorites.get('songs'));
  return <FavoriteComponent favorites={favorites} />;
};

export default FavoritesContainer;

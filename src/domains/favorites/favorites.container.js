import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getFavorites } from 'store/actions/favoritesActions';
import { Loading } from 'domains/core/Loading';
import FavoritesComponent from './favorites.component';

const FavoritesContainer = () => {
  const files = useSelector((state) => state.files.get('files'));
  const isLoading = useSelector((state) => state.files.get('isLoading'));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorites());
  }, [dispatch]);

  if (isLoading) return <Loading />;

  return <FavoritesComponent itemsList={files} />;
};

export default FavoritesContainer;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';

import { getFavorites } from 'store/actions/favoritesActions';
import { FavoritesComponent } from './favorites.component';

export const FavoritesContainer = () => {
  const files = useSelector((state) => state.files.get('files'));
  const isLoading = useSelector((state) => state.files.get('isLoading'));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorites());
  }, [dispatch]);

  return (
    <Grid item xs={12}>
      <FavoritesComponent isLoading={isLoading} itemsList={files} />
    </Grid>
  );
};

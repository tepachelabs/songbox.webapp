import React from 'react';
import { List } from 'immutable';
import propTypes from 'prop-types';
import { Grid } from '@material-ui/core';

import { FileListComponent } from 'components/file-list';
import { AudioLeg } from 'components/file-navigator';

const FavoritesComponent = ({ itemsList }) => (
  <Grid item xs={12}>
    <FileListComponent itemsList={itemsList} itemRenderer={AudioLeg} />
  </Grid>
);

FavoritesComponent.propTypes = {
  itemsList: propTypes.instanceOf(List).isRequired,
};

export default FavoritesComponent;

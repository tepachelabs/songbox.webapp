import React from 'react';
import { List } from 'immutable';
import propTypes from 'prop-types';

import { FileListComponent, FileListLoading } from 'components/file-list';
import { AudioLeg } from 'components/file-navigator';
import { FavoritesEmpty } from './favorites-empty.component';

export const FavoritesComponent = ({ isLoading, itemsList }) => {
  if (isLoading) return <FileListLoading />;

  if (!itemsList.size) return <FavoritesEmpty />;

  return <FileListComponent itemsList={itemsList} itemRenderer={AudioLeg} />;
};

FavoritesComponent.propTypes = {
  isLoading: propTypes.bool,
  itemsList: propTypes.instanceOf(List).isRequired,
};

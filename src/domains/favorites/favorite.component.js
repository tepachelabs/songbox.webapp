import React, { Fragment } from 'react';
import { List } from 'immutable';
import propTypes from 'prop-types';

import { FileListComponent } from 'components/file-list';
import { FavoritesTitle } from './favorites.style';

const transformPaths = (songs) => songs.map((song) => ({
  type: 'file',
  title: song.get('song_name'),
  path: song.get('path_lower'),
}));

const FavoriteComponent = ({ favorites }) => (
  <Fragment>
    <FavoritesTitle>
      Your personal library
      <span role="img" aria-label="heart">❤️</span>
    </FavoritesTitle>
    <FileListComponent files={transformPaths(favorites)} songs={favorites} dense={false} />
  </Fragment>
);

FavoriteComponent.propTypes = {
  favorites: propTypes.instanceOf(List).isRequired,
};

export default FavoriteComponent;

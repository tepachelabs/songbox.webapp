import React from 'react';
import { List } from 'immutable';
import propTypes from 'prop-types';
import { Paper, Typography } from '@material-ui/core';

import { FileListComponent } from 'components/file-list';

const transformPaths = (songs) =>
  songs.map((song) => ({
    type: 'file',
    title: song.get('song_name'),
    path: song.get('path_lower'),
  }));

const FavoriteComponent = ({ favorites }) => (
  <Paper>
    <Typography variant="h4">
      Your personal library
      <span role="img" aria-label="heart">
        ❤️
      </span>
    </Typography>
    <FileListComponent
      files={transformPaths(favorites)}
      songs={favorites}
      dense={false}
    />
  </Paper>
);

FavoriteComponent.propTypes = {
  favorites: propTypes.instanceOf(List).isRequired,
};

export default FavoriteComponent;

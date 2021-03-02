import React from 'react';
import { List } from 'immutable';
import propTypes from 'prop-types';
import { Paper, Typography } from '@material-ui/core';

import { FileListComponent } from 'components/file-list';
import { AudioLeg } from 'components/file-navigator';

const FavoriteComponent = ({ itemsList }) => (
  <Paper>
    <Typography variant="h4">
      Your personal library
      <span role="img" aria-label="heart">
        ❤️
      </span>
    </Typography>
    <FileListComponent itemsList={itemsList} itemRenderer={AudioLeg} />
  </Paper>
);

FavoriteComponent.propTypes = {
  itemsList: propTypes.instanceOf(List).isRequired,
};

export default FavoriteComponent;

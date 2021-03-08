import { Map } from 'immutable';
import React from 'react';
import propTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import 'react-h5-audio-player/lib/styles.css';

import { getFileNameWithoutExtension } from 'components/file-list/file-title/file-title.utils';

const getFormattedName = (isFullFilenameEnabled, name) =>
  isFullFilenameEnabled ? name : getFileNameWithoutExtension(name);

export const AudioPlayerHeader = ({ currentSong, isFullFilenameEnabled }) => (
  <Typography
    color="textPrimary"
    variant="subtitle2"
    component={Link}
    to={`/app${currentSong?.get('parentPath')}`}
  >
    {currentSong &&
      `Playing: ${getFormattedName(
        isFullFilenameEnabled,
        currentSong.get('name'),
      )}`}
  </Typography>
);

AudioPlayerHeader.propTypes = {
  isFullFilenameEnabled: propTypes.bool,
  currentSong: propTypes.instanceOf(Map),
};

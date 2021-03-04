import React from 'react';
import { useSelector } from 'react-redux';
import propTypes from 'prop-types';
import { Typography } from '@material-ui/core';

import { getFileNameWithoutExtension } from './file-title.utils';

export const FileTitle = ({ name }) => {
  const isFullFilenameEnabled = useSelector(({ settings }) =>
    settings.get('isFullFilename'),
  );
  const formattedTitle = isFullFilenameEnabled
    ? name
    : getFileNameWithoutExtension(name);

  return (
    <Typography variant="inherit" noWrap component="div">
      {formattedTitle}
    </Typography>
  );
};

FileTitle.propTypes = {
  name: propTypes.string.isRequired,
};

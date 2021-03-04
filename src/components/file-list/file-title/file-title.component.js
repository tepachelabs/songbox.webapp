import React from 'react';
import { useSelector } from 'react-redux';
import propTypes from 'prop-types';
import { Typography } from '@material-ui/core';

import { getFileNameWithoutExtension } from './file-title.utils';
import { useFileTitleStyles } from './file-title.styles';

export const FileTitle = ({ name, isStrikethrough }) => {
  const classes = useFileTitleStyles({ isStrikethrough });
  const isFullFilenameEnabled = useSelector(({ settings }) =>
    settings.get('isFullFilename'),
  );
  const formattedTitle = isFullFilenameEnabled
    ? name
    : getFileNameWithoutExtension(name);

  return (
    <Typography
      className={classes.root}
      variant="inherit"
      noWrap
      component="div"
    >
      {formattedTitle}
    </Typography>
  );
};

FileTitle.propTypes = {
  isStrikethrough: propTypes.bool,
  name: propTypes.string.isRequired,
};

import React from 'react';
import { useSelector } from 'react-redux';
import propTypes from 'prop-types';
import { Typography } from '@material-ui/core';

import { removeFileNameExtension } from './file-title.utils';

export const FileTitle = ({ title }) => {
  const isExtensionOn = useSelector((state) =>
    state.settings.get('fullFilename'),
  );
  const formattedTitle = isExtensionOn ? title : removeFileNameExtension(title);

  return (
    <Typography variant="inherit" noWrap component="div">
      {formattedTitle}
    </Typography>
  );
};

FileTitle.propTypes = {
  title: propTypes.string.isRequired,
};

import React from 'react';
import { Typography } from '@material-ui/core';

export const Copyright = () => (
  <Typography variant="caption" color="textPrimary">
    Copyright © 2016-{new Date().getFullYear()} TepacheLabs.
  </Typography>
);

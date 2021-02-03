import React from 'react';
import { darkWhite } from 'style/colors';
import { Icon } from '../icon';

export const PlayCircleIcon = (props) => (
  <Icon {...props}>
    <circle {...props} cx="12" cy="12" r="10" />
    <polygon fill={darkWhite} points="10 8 16 12 10 16 10 8" />
  </Icon>
);

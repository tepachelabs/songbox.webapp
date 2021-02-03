import React from 'react';
import { white } from 'style/colors';
import { Icon } from '../icon';

export const PauseCircleIcon = (props) => (
  <Icon {...props}>
    <circle fill={white} cx="12" cy="12" r="10" />
    <line x1="10" y1="15" x2="10" y2="9" />
    <line x1="14" y1="15" x2="14" y2="9" />
  </Icon>
);

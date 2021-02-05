import React from 'react';
import { styled } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { theme } from 'style/theme';

export const PlayerButton = styled(({ size, ...other }) => <Button {...other} />)({
  height: (props) => (props.size === 'large' ? theme.spacing.ten : theme.spacing.five),
  width: (props) => (props.size === 'large' ? theme.spacing.ten : theme.spacing.five),

  '& span, & svg': {
    height: '100%',
    width: '100%',
  },
});

import React from 'react';
import { styled } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const PlayerButton = styled((props) => <Button {...props} />)({
  height: (props) =>
    props.size === 'large' ? props.theme.spacing(10) : props.theme.spacing(5),
  width: (props) =>
    props.size === 'large' ? props.theme.spacing(10) : props.theme.spacing(5),

  '& span, & svg': {
    height: '100%',
    width: '100%',
  },
});

PlayerButton.defaultProps = {
  theme: {
    spacing: (number = 10) => `${number}px`
  },
  size: 'medium'
}

export {
  PlayerButton
};

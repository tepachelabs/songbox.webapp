import React from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { PlayerButton } from 'style/button';
import { gray, orange } from 'style/colors';

import { RepeatIcon } from 'components/icon';

const RepeatButton = ({ onClick }) => {
  const isRepeatEnabled = useSelector((state) => state.player.get('isRepeat'));
  const strokeColor = isRepeatEnabled ? orange : gray;

  return (
    <PlayerButton onClick={onClick}>
      <RepeatIcon stroke={strokeColor} />
    </PlayerButton>
  );
};

RepeatButton.propTypes = {
  onClick: propTypes.func.isRequired,
};

export default RepeatButton;

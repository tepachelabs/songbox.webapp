import React from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { PlayerRegularButton } from 'style/button';
import { darkGray, orange } from 'style/colors';

import { RepeatIcon } from 'components/icon';

const RepeatButton = ({ onClick }) => {
  const isRepeatEnabled = useSelector((state) => state.player.get('isRepeat'));
  const strokeColor = isRepeatEnabled ? orange : darkGray;

  return (
    <PlayerRegularButton onClick={onClick}>
      <RepeatIcon stroke={strokeColor} />
    </PlayerRegularButton>
  );
};

RepeatButton.propTypes = {
  onClick: propTypes.func.isRequired,
};

export default RepeatButton;

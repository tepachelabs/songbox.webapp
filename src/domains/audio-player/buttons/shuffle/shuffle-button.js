import React from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { ShuffleIcon } from 'components/icon';
import { PlayerRegularButton } from 'style/button';
import { darkWhite, orange } from 'style/colors';

const ShuffleButton = ({ onClick }) => {
  const isRandomEnabled = useSelector((state) => state.player.get('isRandom'));
  const strokeColor = isRandomEnabled ? orange : darkWhite;

  return (
    <PlayerRegularButton onClick={onClick}>
      <ShuffleIcon stroke={strokeColor} />
    </PlayerRegularButton>
  );
};

ShuffleButton.propTypes = {
  onClick: propTypes.func.isRequired,
};

export default ShuffleButton;

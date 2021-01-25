import React from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { ShuffleIcon } from 'components/icon';
import { PlayerButton } from 'style/button';
import { gray, orange } from 'style/colors';

const ShuffleButton = ({ onClick }) => {
  const isRandomEnabled = useSelector((state) => state.player.get('isRandomEnabled'));
  const strokeColor = isRandomEnabled ? orange : gray;

  return (
    <PlayerButton onClick={onClick}>
      <ShuffleIcon stroke={strokeColor} />
    </PlayerButton>
  );
};

ShuffleButton.propTypes = {
  onClick: propTypes.func.isRequired,
};

export default ShuffleButton;

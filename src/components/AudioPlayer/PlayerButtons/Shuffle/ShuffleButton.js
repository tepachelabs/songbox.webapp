import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setRandom } from 'store/actions/playerActions';
import { ShuffleIcon } from 'components/icon';
import { PlayerButton } from 'style/button';
import { orange } from 'style/colors';

const ShuffleButton = () => {
  const onRandom = useSelector((state) => state.player.get('onRandom'));
  const dispatch = useDispatch();

  const strokeColor = onRandom ? orange : 'gray';

  return (
    <PlayerButton onClick={() => dispatch(setRandom(!onRandom))}>
      <ShuffleIcon stroke={strokeColor} />
    </PlayerButton>
  );
};

export default ShuffleButton;

import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import { useDispatch, useSelector } from 'react-redux';
import 'react-h5-audio-player/lib/styles.css';

import { loadNextSong, loadPreviousSong } from 'store/actions/playerActions';
import { AudioWrapper } from './audio-player.styles';

export const AudioPlayerContainer = () => {
  const songLink = useSelector((state) => state.player.get('currentSong'));
  const dispatch = useDispatch();
  const onNextClick = () => dispatch(loadNextSong());
  const onPrevClick = () => dispatch(loadPreviousSong());

  return (
    <AudioWrapper>
      <AudioPlayer
        autoPlay
        showSkipControls
        src={songLink?.get('src')}
        onClickNext={onNextClick}
        onClickPrevious={onPrevClick}
        onEnded={onNextClick}
        customVolumeControls={[]}
        customAdditionalControls={[]}
      />
    </AudioWrapper>
  );
};

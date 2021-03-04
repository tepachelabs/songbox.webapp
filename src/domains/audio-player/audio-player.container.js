import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import { useDispatch, useSelector } from 'react-redux';
import 'react-h5-audio-player/lib/styles.css';

import { loadNextSong, loadPreviousSong } from 'store/actions/playerActions';
import { AudioWrapper } from './audio-player.styles';

export const AudioPlayerContainer = () => {
  const currentSong = useSelector(({ player }) => player.get('currentSong'));
  const isAutoPlayEnabled = useSelector(({ settings }) =>
    settings.get('isAutoPlay'),
  );
  const dispatch = useDispatch();
  const onNextClick = () => dispatch(loadNextSong());
  const onPrevClick = () => dispatch(loadPreviousSong());
  const onEnded = () => {
    if (isAutoPlayEnabled) {
      dispatch(loadPreviousSong());
    }
  };

  return (
    <AudioWrapper>
      <AudioPlayer
        autoPlay
        showSkipControls
        src={currentSong?.get('src')}
        onClickNext={onNextClick}
        onClickPrevious={onPrevClick}
        onEnded={onEnded}
        customVolumeControls={[]}
        customAdditionalControls={[]}
      />
    </AudioWrapper>
  );
};

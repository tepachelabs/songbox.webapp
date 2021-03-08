import React, { useEffect, useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import { useDispatch, useSelector } from 'react-redux';
import 'react-h5-audio-player/lib/styles.css';

import { loadNextSong, loadPreviousSong } from 'store/actions/playerActions';
import { CircularProgressIcon } from 'components/circular-progress-icon';
import { AudioPlayerHeader } from './audio-player-header.components';
import { AudioWrapper } from './audio-player.styles';

const BRAND = 'Songbox';

export const AudioPlayerContainer = () => {
  const isLoading = useSelector(({ player }) => player.get('isLoading'));
  const currentSong = useSelector(({ player }) => player.get('currentSong'));
  const isAutoPlayEnabled = useSelector(({ settings }) =>
    settings.get('isAutoPlay'),
  );
  const isFullFilenameEnabled = useSelector(({ settings }) =>
    settings.get('isFullFilename'),
  );
  const dispatch = useDispatch();
  const onPlay = () => setIsPlaying(true);
  const onPause = () => setIsPlaying(false);
  const onNextClick = () => dispatch(loadNextSong());
  const onPrevClick = () => dispatch(loadPreviousSong());
  const onEnded = () => {
    if (isAutoPlayEnabled) {
      dispatch(loadNextSong());
    }
  };

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    document.title =
      currentSong && isPlaying
        ? `▶️ ${currentSong.get('name')} - ${BRAND}`
        : BRAND;
  }, [currentSong, isPlaying]);

  return (
    <AudioWrapper>
      <AudioPlayer
        autoPlay
        showSkipControls
        src={currentSong?.get('src')}
        onClickNext={onNextClick}
        onClickPrevious={onPrevClick}
        onPause={onPause}
        onPlay={onPlay}
        onEnded={onEnded}
        customVolumeControls={[]}
        customAdditionalControls={[]}
        header={
          <AudioPlayerHeader
            isFullFilenameEnabled={isFullFilenameEnabled}
            currentSong={currentSong}
          />
        }
        customIcons={{
          play: isLoading ? <CircularProgressIcon /> : null,
        }}
      />
    </AudioWrapper>
  );
};

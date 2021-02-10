import React, { Fragment } from 'react'
import propTypes from 'prop-types'

import { Loading } from 'domains/core/Loading'
import PlayerComponent from './player'
import AudioProgressContainer from './audio-progress'

import { AudioWrapper } from './audio-player.styles'

const AudioPlayerComponent = ({
  audioRef,
  isDisabled,
  onClick,
  updateCurrentTime,
  isLoading,
}) => (
  <AudioWrapper>
    {
      isLoading
        ? ( <Loading/> )
        : (
        <Fragment>
          <AudioProgressContainer
            audioRef={audioRef}
            updateCurrentTime={updateCurrentTime}
          />
          <PlayerComponent onClick={onClick} isDisabled={isDisabled}/>
        </Fragment>
      )
    }
  </AudioWrapper>
)

AudioPlayerComponent.propTypes = {
  audioRef: propTypes.shape({ current: propTypes.node }).isRequired,
  updateCurrentTime: propTypes.func.isRequired,
  onClick: propTypes.func.isRequired,
  isDisabled: propTypes.bool.isRequired,
  isLoading: propTypes.bool.isRequired,
}

export default AudioPlayerComponent

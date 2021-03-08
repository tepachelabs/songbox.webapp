import styled from 'styled-components';
import { makeStyles } from '@material-ui/core';

/* STYLED-COMPONENTS */

export const AudioWrapper = styled.div`
  background-color: ${(props) => props.theme.background};
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

/* MATERIAL-UI */

export const useAudioPlayerStyle = makeStyles(({ palette }) => ({
  audioPlayer: {
    backgroundColor: 'transparent !important',
    outline: 0,

    '& *': {
      outline: 0,
    },

    '& .rhap_header': {
      color: palette.text.primary,
    },
  },
}));

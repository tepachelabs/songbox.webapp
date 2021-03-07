import styled from 'styled-components';
import {
  CircularProgress as MuiCircularProgress,
  withStyles,
} from '@material-ui/core';

/* STYLED-COMPONENTS */

export const AudioWrapper = styled.div`
  background-color: ${(props) => props.theme.background};
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

/* MATERIAL-UI */

export const CircularProgress = withStyles(() => ({
  root: {
    height: '32px !important',
    width: '32px !important',
  },
  circle: {
    strokeWidth: 4,
  },
}))(MuiCircularProgress);

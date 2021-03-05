import {
  LinearProgress as MuiLinearProgress,
  withStyles,
} from '@material-ui/core';
import styled from 'styled-components';

import { hexToRGB, orange } from 'style/colors';

export const LinearProgress = withStyles(() => ({
  root: {
    height: '1em',
    backgroundColor: `rgba(${hexToRGB(orange)},0.1)`,
    maxWidth: '28em',
  },
  barColorPrimary: {
    backgroundColor: `rgba(${hexToRGB(orange)},0.1)`,
  },
}))(MuiLinearProgress);

export const FileListLoadingDummyIcon = styled.div`
  background-color: ${({ theme }) =>
    `rgba(${hexToRGB(theme.colors.orange)}, 0.4)`};
  height: 32px;
  width: 32px;
`;

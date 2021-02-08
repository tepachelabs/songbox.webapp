import styled from 'styled-components';

import { theme } from 'style/theme';
import { darkWhite } from 'style/colors';

export const AudioProgress = styled.input`
  -webkit-appearance: none;
  appearance: none;
  background: linear-gradient(90deg, #FFA834 ${(props) => props.value}%, white ${(props) => props.value}%);
  height: ${theme.spacing.one};
  left: 0;
  position: absolute;
  width: 100%;
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    background: white;
  }
  
  &::-webkit-slider-thumb, &::-webkit-slider-thumb {
    border: 1px solid ${darkWhite};
    border-radius: 50%;
    height: ${theme.spacing.four};
    width: ${theme.spacing.four};
  }
`;

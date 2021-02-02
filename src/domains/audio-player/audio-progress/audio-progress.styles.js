import styled from 'styled-components';

import { theme } from 'style/theme';
import { almostGray } from 'style/colors';

export const AudioProgress = styled.input`
  -webkit-appearance: none;
  appearance: none;
  background: linear-gradient(90deg, #FFA834 ${(props) => props.value}%, white ${(props) => props.value}%);
  height: ${theme.spacing.one};
  margin: 0 auto;
  opacity: 1;
  outline: none;
  width: 100%;
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    background: white;
  }
  
  &::-webkit-slider-thumb, &::-webkit-slider-thumb {
    border: 1px solid ${almostGray};
    border-radius: 50%;
    height: ${theme.spacing.four};
    width: ${theme.spacing.four};
  }
`;

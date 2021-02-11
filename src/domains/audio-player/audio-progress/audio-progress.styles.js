import styled from 'styled-components';
import { darkWhite, orange } from 'style/colors';

export const AudioProgress = styled.input`
  -webkit-appearance: none;
  appearance: none;
  background: linear-gradient(90deg, ${orange} ${(props) => props.value}%, ${props => props.theme.background} ${(props) => props.value}%);
  height: ${props => props.theme.spacing.one};
  left: 0;
  position: absolute;
  width: 100%;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    background: white;
  }

  &::-webkit-slider-thumb,
  &::-webkit-slider-thumb {
    border: 1px solid ${darkWhite};
    border-radius: 50%;
    height: ${props => props.theme.spacing.four};
    width: ${props => props.theme.spacing.four};
  }
`;

import styled from 'styled-components';
import { respondTo } from 'style/respondTo';

export const ButtonsWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 90%;
  justify-content: space-around;
  width: 100%;
  
  pointer-events: ${(props) => (props.isDisabled ? 'none' : '')};
  opacity: ${(props) => (props.isDisabled ? '0.5' : '')};
  
  ${respondTo.xs`
    justify-content: center;
  `};
  
  & button {
    border-radius: 10px;
    background-color: transparent;
    border-color: transparent;
  }

  & button * {
    height: 100%;
    width: 100%;
  }
`;

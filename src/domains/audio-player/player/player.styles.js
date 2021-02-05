import styled from 'styled-components';

export const ButtonsWrapper = styled.div`
  align-items: center;
  align-content: center;
  display: flex;
  height: 100%;
  justify-content: center;
  pointer-events: ${(props) => (props.isDisabled ? 'none' : '')};
  width: 100%;
`;

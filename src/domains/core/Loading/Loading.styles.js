import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingBox = styled.div`
  align-items: center;
  display: flex;

  &::after {
    animation: ${spinAnimation} 0.7s infinite;
    border: 5px solid transparent;
    border-top-color: #ffa834;
    border-radius: 50%;
    content: '';
    height: 60px;
    left: 50%;
    position: absolute;
    top: 50%;
    width: 60px;
  }
`;

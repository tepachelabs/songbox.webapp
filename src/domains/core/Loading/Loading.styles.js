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
  display: flex;
  min-height: 100%;

  .spinner {
    animation: ${spinAnimation} 0.7s infinite;
    border: 5px solid transparent;
    border-top-color: #ffa834;
    border-radius: 50%;
    content: '';
    height: 60px;
    width: 60px;
    margin: auto;
  }
`;

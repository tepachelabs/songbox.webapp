import styled from 'styled-components';

export const ProductTitle = styled.h1`
  color: ${(props) => props.theme.textColor.darker};
  font-family: 'Quicksand', sans-serif;
`;

export const Link = styled.a`
  color: ${(props) => props.theme.textColor.base};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.textColor.darker};
  }
`;

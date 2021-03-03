import styled, { css } from 'styled-components';

const DefaultFont = css`
  font-family: 'Asap', sans-serif;
`;

const BrandFont = css`
  font-family: 'Quicksand', sans-serif;
`;

export const FONT = {
  DEFAULT: DefaultFont,
  BRAND: BrandFont,
};

export const ProductTitle = styled.h1`
  color: ${(props) => props.theme.textColor.darker};
  ${BrandFont}
`;

export const Link = styled.a`
  color: ${(props) => props.theme.textColor.base} !important;
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.textColor.darker} !important;
  }

  ${DefaultFont}
`;

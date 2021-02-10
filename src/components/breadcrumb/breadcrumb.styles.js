import styled from 'styled-components';
import { theme } from 'style/theme';
import { ProductTitle } from 'style/typography';
import { black, orange } from 'style/colors';

export const BreadcrumbLink = styled(ProductTitle)`
  margin: 0;
  font-size: ${theme.spacing.three};

  & a {
    text-decoration: none;
    color: ${black};
  }

  & a:hover,
  & a:visited,
  a:active {
    color: ${orange};
  }
`;

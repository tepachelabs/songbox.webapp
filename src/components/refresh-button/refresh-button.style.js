import styled from 'styled-components';
import { theme } from 'style/theme';
import { FONT } from 'style/typography';
import { orange, darkOrange } from 'style/colors';

export const RefreshButton = styled.button`
  align-self: center;
  border: 1px solid ${orange};
  border-radius: ${theme.spacing.two};
  cursor: pointer;
  ${FONT.BRAND}
  height: 50%;
  padding: ${theme.spacing.one} ${theme.spacing.four};
  
  &:hover {
    background-color: ${darkOrange};
    color: white;
  }
  
  &:active {
    background-color: ${darkOrange};
    color: white;
  }
`;

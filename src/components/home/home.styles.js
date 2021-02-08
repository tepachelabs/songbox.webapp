import styled from 'styled-components';
import { black } from 'style/colors';
import { theme } from 'style/theme';

export const HomeWrapper = styled.div`
  margin-right: ${theme.spacing.one};
  
  & a {
    color: ${black};
    text-decoration: none;
  }  
`;

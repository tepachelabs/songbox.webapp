import styled from 'styled-components';
import { black } from 'style/colors';

export const HomeWrapper = styled.div`
  margin-right: ${(props) => props.theme.spacing.one};

  & a {
    color: ${black};
    text-decoration: none;
  }
`;

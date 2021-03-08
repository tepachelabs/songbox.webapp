import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

import { ProductTitle } from 'style/typography';
import { hexToRGB, orange } from 'style/colors';

export const SidebarWrapper = styled.div`
  padding: ${({ theme }) => `${theme.spacing.ten} ${theme.spacing.one}`};
`;

export const SidebarDivisor = styled.hr`
  border: 0;
  border-top: 1px solid ${(props) => props.theme.colors.almostWhite};
  margin: ${({ theme }) => `${theme.spacing.six} ${theme.spacing.four}`};
`;

export const SidebarTitle = styled(ProductTitle)`
  bottom: ${(props) => props.theme.spacing.one};
  color: ${(props) => props.theme.colors.lightGray};
  left: 0;
  position: absolute;
  text-align: center;
  width: 100%;
`;

export const useSidebarStyles = makeStyles(() => ({
  button: {
    minWidth: '14em',

    '&.active': {
      backgroundColor: `rgba(${hexToRGB(orange)},0.3)`,

      '& svg': {
        fill: orange,
      },
    },
  },
}));

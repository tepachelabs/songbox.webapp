import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { orange, white } from 'style/colors';
import { FONT } from 'style/typography';

/* MATERIAL-UI */

export const useStyles = makeStyles((theme) => ({
  brand: {
    backgroundColor: orange,
    color: white,
    height: theme.spacing(8),
    margin: '0 auto',
    width: theme.spacing(8),
  },
}));

/* STYLED-COMPONENTS */

export const UserProfileWrapper = styled.div`
  text-align: center;
  width: 100%;
`;

export const UserProfileEmail = styled.h3`
  font-size: 14px;
  color: ${(props) => props.theme.colors.darkWhite}; 
  margin: 0;
`;

export const UserProfileName = styled.h2`
  font-size: 22px;
  color: ${(props) => props.theme.textColor.darker};
  margin: 0;
  ${FONT.BRAND}
`;

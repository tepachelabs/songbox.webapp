import styled from 'styled-components';
import { Box } from '@material-ui/core';

import { FONT, ProductTitle } from 'style/typography';
import { respondTo } from 'style/respondTo';

import splashImg from './img/splash.jpg';

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  ${respondTo.sm`
    flex-direction: row;
  `}
`;

export const LoginSplashWrapper = styled.div`
  height: 40%;
  width: 100%;
  position: relative;

  ${respondTo.sm`
    height: 100%;
    width: 50%;
  `}
`;

export const LoginContentWrapper = styled(Box)`
  padding: ${(props) => props.theme.spacing.six};
  margin: 0 auto;

  ${respondTo.sm`
    padding-top: 10em;
  `}
`;

export const LoginCenteredWrapper = styled(LoginContentWrapper)`
  text-align: center;

  ${respondTo.sm`
    padding-top: ${(props) => props.theme.spacing.six};
  `}
`;

export const LoginSplash = styled.div`
  background: url(${splashImg}) no-repeat 85% center;
  background-size: cover;
  height: 100%;
  position: absolute;
  width: 100%;

  ${respondTo.sm`
    background-position: center;
  `}
`;

export const LoginSplashTitle = styled(ProductTitle)`
  color: ${(props) => props.theme.colors.white};
  position: absolute;
  right: ${(props) => props.theme.spacing.four};
  top: ${(props) => props.theme.spacing.two};
`;

export const LoginTitle = styled(ProductTitle)`
  margin-top: 0;
  margin-bottom: 0;
`;

export const LoginText = styled.p`
  color: ${(props) => props.theme.textColor.base};
  margin-top: ${(props) => props.theme.spacing.one};
  margin-bottom: 0;
  ${FONT.DEFAULT}
`;

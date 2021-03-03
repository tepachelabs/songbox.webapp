import React from 'react';
import { useTranslation } from 'react-i18next';

import { DROPBOX_SIGN_IN_ROUTE } from 'routes';
import { DropboxButton } from 'style/button';
import { Link } from 'style/typography';

import {
  LoginCenteredWrapper,
  LoginContentWrapper,
  LoginText,
  LoginSplash,
  LoginSplashTitle,
  LoginSplashWrapper,
  LoginTitle,
  LoginWrapper,
} from './login.style';

export const Login = () => {
  const [t] = useTranslation();
  return (
    <LoginWrapper>
      <LoginSplashWrapper>
        <LoginSplash />
        <LoginSplashTitle>{t('landing.title')}</LoginSplashTitle>
      </LoginSplashWrapper>
      <LoginContentWrapper>
        <LoginTitle>{t('landing.login')}</LoginTitle>
        <LoginText>{t('landing.message')}</LoginText>
        <LoginCenteredWrapper>
          <DropboxButton
            size="large"
            href={DROPBOX_SIGN_IN_ROUTE}
            variant="contained"
            disableElevation
            color="primary"
          >
            Dropbox
          </DropboxButton>
        </LoginCenteredWrapper>
        <LoginCenteredWrapper>
          <Link href="/#">{t('common.privacy')}</Link>
          {' | '}
          <Link href="/#">{t('common.tos')}</Link>
        </LoginCenteredWrapper>
      </LoginContentWrapper>
    </LoginWrapper>
  );
};

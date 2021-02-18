import React from 'react';
import { useTranslation } from 'react-i18next';

import { DROPBOX_SIGN_IN_ROUTE } from 'routes';
import { DropboxButton } from 'style/button';
import { Link } from 'style/typography';

import {
  LoginCenteredWrapper,
  LoginContentWrapper,
  LoginContent,
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
        <LoginContent>{t('landing.message')}</LoginContent>
        <LoginCenteredWrapper>
          <DropboxButton size="large" href={DROPBOX_SIGN_IN_ROUTE}>
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

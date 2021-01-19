import React from 'react';

import { DROPBOX_SIGN_IN_ROUTE } from 'routes';
import { DropboxButton } from 'style/button';
import { Link } from 'style/typography';

import {
  LoginCenteredWrapper,
  LoginContentWrapper, LoginContent,
  LoginSplash, LoginSplashTitle, LoginSplashWrapper, LoginTitle, LoginWrapper,
} from './login.style';

export const Login = () => (
  <LoginWrapper>
    <LoginSplashWrapper>
      <LoginSplash />
      <LoginSplashTitle>Songbox</LoginSplashTitle>
    </LoginSplashWrapper>
    <LoginContentWrapper>
      <LoginTitle>Sign In</LoginTitle>
      <LoginContent>
        Hi there! Nice to see you again.
      </LoginContent>
      <LoginCenteredWrapper>
        <DropboxButton
          size="large"
          href={DROPBOX_SIGN_IN_ROUTE}
        >
          Dropbox
        </DropboxButton>
      </LoginCenteredWrapper>
      <LoginCenteredWrapper>
        <Link href="/#">Privacy Policy</Link>
        {' | '}
        <Link href="/#">Terms of Service</Link>
      </LoginCenteredWrapper>
    </LoginContentWrapper>
  </LoginWrapper>
);

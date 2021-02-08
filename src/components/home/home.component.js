import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon } from 'components/icon';

import { HomeWrapper } from 'components/home/home.styles';

export const Home = () => (
  <HomeWrapper>
    <Link to="/app">
      <HomeIcon />
    </Link>
  </HomeWrapper>
);

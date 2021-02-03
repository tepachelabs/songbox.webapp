import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon } from 'components/icon';

import { HomeWrapper } from './home.styles';

const HomeComponent = () => (
  <HomeWrapper>
    <Link to="/app">
      <HomeIcon />
    </Link>
  </HomeWrapper>
);

export default HomeComponent;

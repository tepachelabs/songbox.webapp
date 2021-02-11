import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import { HomeIcon } from 'components/icon';

import { HomeWrapper } from './home.styles';

export const Home = () => {
  const theme = useTheme();
  return (
    <HomeWrapper>
      <Link to="/app">
        <HomeIcon stroke={theme.color} />
      </Link>
    </HomeWrapper>
  );
};

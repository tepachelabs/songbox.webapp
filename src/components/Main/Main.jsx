import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid } from '@material-ui/core';

import BreadcrumbContainer from '../breadcrumb';
import FilesContainer from '../Files';
import { RefreshButtonContainer } from '../refresh-button';

import './style/style.scss';

const Main = () => {
  const { path } = useParams();

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1 id="your-personal-library" className="title">Your personal library</h1>
          <div className="breadcrumb-and-refresh-background">
            <div className="breadcrumb-and-refresh-container">
              <BreadcrumbContainer />
              <RefreshButtonContainer />
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <FilesContainer path={path || ''} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Main;

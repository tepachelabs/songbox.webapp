import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid } from '@material-ui/core';

import { BreadcrumbContainer } from 'components/Breadcrumb';
import FilesContainer from 'components/Files';
import { RefreshButtonContainer } from 'components/refresh-button';

import { ProductTitle } from 'style/typography';

const MainComponent = () => {
  const { path } = useParams();

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ProductTitle>Your personal library</ProductTitle>
          <Grid container justify="space-between">
            <Grid item xs>
              <BreadcrumbContainer />
            </Grid>
            <Grid item xs>
              <RefreshButtonContainer />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <FilesContainer path={path || ''} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainComponent;

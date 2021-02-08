import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid } from '@material-ui/core';

import { BreadcrumbContainer } from 'components/breadcrumb';
import FilesContainer from 'components/Files';
import { RefreshButtonContainer } from 'components/refresh-button';

import { ProductTitle } from 'style/typography';
import { BreadcrumbWrapper } from './main.styles';

const MainComponent = () => {
  const { path } = useParams();

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ProductTitle>Your personal library</ProductTitle>
          <BreadcrumbWrapper container justify="space-between">
            <Grid container>
              <BreadcrumbContainer />
            </Grid>
            <Grid container justify="flex-end">
              <RefreshButtonContainer />
            </Grid>
          </BreadcrumbWrapper>
        </Grid>
        <Grid item xs={12}>
          <FilesContainer path={path || ''} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainComponent;

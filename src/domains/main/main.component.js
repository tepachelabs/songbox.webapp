import React from 'react';
import { useParams } from 'react-router-dom';
import { Paper, Grid, Typography } from '@material-ui/core';

import { BreadcrumbContainer } from 'components/breadcrumb';
import FilesContainer from 'components/Files';
import { RefreshButtonContainer } from 'components/refresh-button';

import { BreadcrumbWrapper } from './main.styles';

const MainComponent = () => {
  const { path } = useParams();

  return (
    <Paper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4">Your personal library</Typography>
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
    </Paper>
  );
};

export default MainComponent;

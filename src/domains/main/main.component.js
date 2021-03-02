import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Paper, Grid, Typography } from '@material-ui/core';

import { BreadcrumbContainer } from 'components/breadcrumb';
import { FileNavigator } from 'components/file-navigator';
import { RefreshButtonContainer } from 'components/refresh-button';

import { BreadcrumbWrapper } from './main.styles';

export const MainComponent = () => {
  const { path = '' } = useParams();
  const [t] = useTranslation();

  return (
    <Paper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4">{t('home.title')}</Typography>
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
          <FileNavigator path={path} />
        </Grid>
      </Grid>
    </Paper>
  );
};

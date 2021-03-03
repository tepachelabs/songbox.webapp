import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Grid } from '@material-ui/core';

import { Breadcrumbs } from 'components/breadcrumbs';
import { FileNavigator } from 'components/file-navigator';
import { RefreshButtonContainer } from 'components/refresh-button';

export const MainComponent = () => {
  const { path = '' } = useParams();

  return (
    <React.Fragment>
      <Box flexGrow={1}>
        <Breadcrumbs />
      </Box>
      <Box>
        <RefreshButtonContainer />
      </Box>
      <Grid item xs={12}>
        <FileNavigator path={path} />
      </Grid>
    </React.Fragment>
  );
};

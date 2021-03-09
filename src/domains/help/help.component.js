import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';

const HelpComponent = () => (
  <React.Fragment>
    <Grid item xs={12}>
      <Box mb={1}>
        <Typography variant="subtitle2" color="textPrimary">
          Work in progress...
        </Typography>
      </Box>
    </Grid>
  </React.Fragment>
);

export default HelpComponent;

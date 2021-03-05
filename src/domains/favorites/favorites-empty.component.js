import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, CardContent, Grid, Typography } from '@material-ui/core';

import { Card } from './favorites-empty.style';
import emptyImg from './img/empty.svg';

export const FavoritesEmpty = () => {
  const [t] = useTranslation();

  return (
    <Card variant="outlined">
      <CardContent>
        <Grid container spacing={2} justify="center">
          <Grid item xs={12}>
            <Box mb={2}>
              <Typography variant="h4">{t('favorites.empty.title')}</Typography>
            </Box>
            <Box mb={4}>
              <Typography variant="h6">
                {t('favorites.empty.subtitle')}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <img src={emptyImg} alt="empty" />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const HelpComponent = () => {
  const [t] = useTranslation();
  return (
    <Paper>
      <Typography variant="h4">{t('help.title')}</Typography>
      <p>Hello im just a filler!</p>
    </Paper>
  );
};

export default HelpComponent;

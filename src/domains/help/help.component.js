import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Grid, Typography } from '@material-ui/core';

import { Stepper } from 'components/stepper';
import { useHelpStyles } from './help.style';
import { content } from './help.constants';
import { AccordionLeg } from './accordion-leg.component';

export const HelpComponent = () => {
  const classes = useHelpStyles();
  const [t] = useTranslation();

  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Typography variant="h5" color="textPrimary">
          {t('help.subtitle')}
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Box mb={1}>
          <Typography color="textPrimary">{t('help.description')}</Typography>
        </Box>
      </Grid>

      <Grid item xs={12}>
        {content.map((step) => (
          <AccordionLeg
            key={step.title}
            title={step.title}
            description={step.description}
            imageSrc={step.imageSrc}
            className={classes.heading}
          >
            {step.steps && <Stepper steps={step.steps} />}
          </AccordionLeg>
        ))}
      </Grid>
    </React.Fragment>
  );
};

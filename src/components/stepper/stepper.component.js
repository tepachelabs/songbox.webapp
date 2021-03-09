import React, { useState } from 'react';
import propTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Button, MobileStepper, Paper, Typography } from '@material-ui/core';
import {
  KeyboardArrowLeftRounded,
  KeyboardArrowRightRounded,
} from '@material-ui/icons';

import { useStepperStyles } from './stepper.style';

export const Stepper = ({ steps }) => {
  const [t] = useTranslation();
  const classes = useStepperStyles();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = steps.length;

  const onNextClick = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const onPrevClick = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{t(steps[activeStep].title)}</Typography>
      </Paper>
      <img
        className={classes.img}
        src={steps[activeStep].imageSrc}
        alt={t(steps[activeStep].title)}
      />
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={onNextClick}
            disabled={activeStep === maxSteps - 1}
          >
            {t('common.next')} <KeyboardArrowRightRounded />
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={onPrevClick}
            disabled={activeStep === 0}
          >
            <KeyboardArrowLeftRounded />
            {t('common.back')}
          </Button>
        }
      />
    </div>
  );
};

Stepper.propTypes = {
  steps: propTypes.array.isRequired,
};

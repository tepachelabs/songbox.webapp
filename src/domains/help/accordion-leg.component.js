import React from 'react';
import propTypes from 'prop-types';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@material-ui/core';
import { KeyboardArrowDown } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';

export const AccordionLeg = ({ children, description, imageSrc, title }) => {
  const [t] = useTranslation();

  return (
    <Accordion>
      <AccordionSummary expandIcon={<KeyboardArrowDown color="primary" />}>
        <Typography>{t(title)}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box display="block">
          {imageSrc && <img src={imageSrc} alt={t(title)} width={300} />}
          <Typography>{t(description)}</Typography>
          <Box mt={2}>{children}</Box>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

AccordionLeg.propTypes = {
  children: propTypes.any,
  description: propTypes.string.isRequired,
  imageSrc: propTypes.string,
  title: propTypes.string.isRequired,
};

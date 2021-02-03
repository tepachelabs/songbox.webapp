import React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

import HomeComponent from '../home';
import { BreadcrumbLink } from './breadcrumb.styles';

const BreadcrumbComponent = ({ breadcrumbs }) => (
  <Grid container justify="flex-start">
    <HomeComponent />
    {
      breadcrumbs.map(({ title, uri }) => (title ? (
        <BreadcrumbLink key={title}>
          <Link to={`${uri}`}>
            {`/${title}`}
          </Link>
        </BreadcrumbLink>
      ) : null))
    }
  </Grid>
);

BreadcrumbComponent.propTypes = {
  breadcrumbs: propTypes.arrayOf(propTypes.shape({
    title: propTypes.string.isRequired,
    uri: propTypes.string.isRequired,
  })).isRequired,
};

export default BreadcrumbComponent;

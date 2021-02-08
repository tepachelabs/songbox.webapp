import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

import { BreadcrumbLink } from './breadcrumb.styles';
import { Home } from '../home';

export const BreadcrumbComponent = ({ breadcrumbs }) => (
  <Fragment>
    <Home />
    {
      breadcrumbs.map(({ title, uri }) => (title ? (
        <BreadcrumbLink key={title}>
          <Link to={`${uri}`}>
            {`/${title}`}
          </Link>
        </BreadcrumbLink>
      ) : null))
    }
  </Fragment>
);

BreadcrumbComponent.propTypes = {
  breadcrumbs: propTypes.arrayOf(propTypes.shape({
    title: propTypes.string.isRequired,
    uri: propTypes.string.isRequired,
  })).isRequired,
};

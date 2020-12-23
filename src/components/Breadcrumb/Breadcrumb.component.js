import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

import Home from '../Home';

import './style/breadcrumb.scss';

const BreadcrumbComponent = ({ breadcrumbs }) => (
  <div className="directory-container">
    <Home />
    <div className="breadcrumb">
      {
        breadcrumbs.map(({ title, uri }) => (title ? (
          <Link key={title} className="route-breadcrumb" to={`${uri}`}>
            {`/${title}`}
          </Link>
        ) : undefined))
      }
    </div>
  </div>
);

BreadcrumbComponent.propTypes = {
  breadcrumbs: propTypes.arrayOf(Object).isRequired,
};

export default BreadcrumbComponent;

import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

import { Breadcrumbs as MuiBreadcrumbs, Link } from '@material-ui/core';
import { HomeIcon } from 'components/icon';
import { getBreadcrumbs } from './breadcrumb.utils';

export const Breadcrumbs = () => {
  const location = useLocation();
  const breadcrumbs = getBreadcrumbs(location);

  return (
    <MuiBreadcrumbs maxItems={2} aria-label="breadcrumb">
      <Link color="inherit" to="/app" component={RouterLink}>
        <HomeIcon />
      </Link>

      {breadcrumbs.map(({ title, uri }) =>
        title ? (
          <Link
            key={title}
            color="inherit"
            component={RouterLink}
            to={`${uri}`}
          >
            {title}
          </Link>
        ) : null,
      )}
    </MuiBreadcrumbs>
  );
};

import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  Breadcrumbs as MuiBreadcrumbs,
  Link,
  Typography,
} from '@material-ui/core';
import { Home } from '@material-ui/icons';

import { getBreadcrumbs } from './breadcrumb.utils';

export const Breadcrumbs = () => {
  const location = useLocation();
  const breadcrumbs = getBreadcrumbs(location);

  return (
    <MuiBreadcrumbs
      maxItems={2}
      separator={<Typography color="textPrimary">/</Typography>}
      aria-label="breadcrumb"
    >
      <Link color="inherit" to="/app" component={RouterLink}>
        <Home color="primary" />
      </Link>

      {breadcrumbs.map(({ title, uri }) =>
        title ? (
          <Link
            key={title}
            color="inherit"
            component={RouterLink}
            to={`${uri}`}
          >
            <Typography color="textPrimary">{title}</Typography>
          </Link>
        ) : null,
      )}
    </MuiBreadcrumbs>
  );
};

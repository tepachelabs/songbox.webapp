import React from 'react';
import { useLocation } from 'react-router-dom';

import { BreadcrumbComponent } from './breadcrumb.component';

export const BreadcrumbContainer = () => {
  const location = useLocation();

  const split = location.pathname.split('/');
  const breadcrumbs = split.reduce((paths, current) => {
    const uri = paths.map((path) => path.title);
    return [
      ...paths,
      {
        title: current,
        uri: `${uri.join('/')}/${current}`,
      },
    ];
  }, []);

  return <BreadcrumbComponent breadcrumbs={breadcrumbs} />;
};

import React from 'react';
import { render } from '@testing-library/react';

import LoadingComponent from 'domains/core/Loading';

test('it renders', () => {
  render(<LoadingComponent />);
});

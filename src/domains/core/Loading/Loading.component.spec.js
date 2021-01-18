import React from 'react';
import { render } from '@testing-library/react';

import { Loading } from 'domains/core/Loading';

test('it renders', () => {
  render(<Loading isLoading />);
});

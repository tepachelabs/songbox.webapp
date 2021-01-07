import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import UseClickOutsideExample from './useClickOutside.example';

test('element should toggle when click outside', () => {
  const { getByText, getByTestId } = render(<UseClickOutsideExample />);

  const sidebar = getByTestId('toggle-element');
  fireEvent.click(getByText(/toggle/i));
  expect(sidebar.classList.contains('active')).toBe(true);
  fireEvent.click(getByText(/outside/i));
  expect(sidebar.classList.contains('active')).toBe(false);
});

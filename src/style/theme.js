import { black, gray } from './colors';

const SPACING_VALUES = [
  'none',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
];

const spacing = SPACING_VALUES.reduce((obj, value, index) => ({ ...obj, [value]: `${index / 2}em` }), {});

export const theme = {
  color: { black },
  textColor: {
    base: gray,
    darker: black,
  },
  spacing,
};

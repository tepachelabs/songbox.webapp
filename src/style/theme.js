import colors, { black, gray } from './colors';

const SPACING_VALUES = [
  'none',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'nine',
  'ten',
];

const spacing = SPACING_VALUES.reduce(
  (obj, value, index) => ({ ...obj, [value]: `${index / 2}em` }),
  {},
);

export const theme = {
  colors,
  textColor: {
    base: gray,
    darker: black,
  },
  spacing,
};

import colors, {
  almostWhite,
  black,
  gray,
  muiPaperBackgroundBlack,
  white,
} from './colors';

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

const light = {
  colors,
  background: white,
  textColor: {
    base: gray,
    darker: black,
  },
  spacing,
};

const dark = {
  colors,
  background: muiPaperBackgroundBlack,
  spacing,
  textColor: {
    base: almostWhite,
    darker: white,
  },
};

export { dark, light };

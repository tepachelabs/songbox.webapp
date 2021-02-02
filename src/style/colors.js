export const white = '#ffffff';
export const blue = '#1da1f2';
export const black = '#35424a';
export const gray = '#989eb1';
export const orange = '#ffa834';
export const lightGray = '#d2dae2';
export const almostWhite = '#f0f4f7';
export const darkWhite = '#b3b3ba';
export const almostGray = '#f7f6f6';
export const darkGray = '#c0c0c0';

export const primary = orange;

export default {
  white,
  blue,
  black,
  gray,
  orange,
  lightGray,
  darkWhite,
  almostWhite,
  almostGray,
  darkGray,
  currentColor: 'currentColor',
  none: 'none',
};

export const hexToRGB = (hex) => {
  const r = `0x${hex[1]}${hex[2]}`;
  const g = `0x${hex[3]}${hex[4]}`;
  const b = `0x${hex[5]}${hex[6]}`;

  return `${+r},${+g},${+b}`;
};

export const white = '#fafafa';
export const blue = '#1976d2';
export const dropboxBlue = '#1da1f2';
export const black = '#35424a';
export const muiPaperBackgroundBlack = '#424242';
export const muiBlack = '#303030';
export const muiWhite = '#ffffff';
export const gray = '#989eb1';
export const orange = '#ffa834';
export const lightGray = '#d2dae2';
export const almostWhite = '#f0f4f7';
export const darkWhite = '#b3b3ba';

export const primary = orange;

export default {
  white,
  blue,
  dropboxBlue,
  black,
  gray,
  orange,
  lightGray,
  darkWhite,
  almostWhite,
  currentColor: 'currentColor',
  none: 'none',
};

export const hexToRGB = (hex) => {
  const r = `0x${hex[1]}${hex[2]}`;
  const g = `0x${hex[3]}${hex[4]}`;
  const b = `0x${hex[5]}${hex[6]}`;

  return `${+r},${+g},${+b}`;
};

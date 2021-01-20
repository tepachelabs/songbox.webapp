import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from 'style/colors';

const Svg = styled.svg.attrs({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
})``;

export const Icon = ({
  children, width, height, viewBox, fill, stroke,
}) => (
  <Svg
    width={width}
    height={height}
    viewBox={viewBox}
    fill={fill}
    stroke={stroke}
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    { children }
  </Svg>
);

Icon.propTypes = {
  children: PropTypes.node.isRequired,
  fill: PropTypes.oneOf(Object.values(colors)),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  stroke: PropTypes.oneOf(Object.values(colors)),
  viewBox: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Icon.defaultProps = {
  fill: colors.none,
  width: '24',
  height: '24',
  viewBox: '0 0 24 24',
  stroke: colors.currentColor,
};

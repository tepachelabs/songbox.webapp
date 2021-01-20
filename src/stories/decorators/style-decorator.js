import React from 'react';
import PropTypes from 'prop-types';

import StyleProvider from 'style/style-provider';

const StyleDecorator = ({ children }) => (
  <StyleProvider>
    {children}
  </StyleProvider>
);

StyleDecorator.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StyleDecorator;

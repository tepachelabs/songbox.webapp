import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';

const RouterDecorator = ({ children }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

RouterDecorator.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RouterDecorator;

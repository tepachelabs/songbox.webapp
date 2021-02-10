import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'store/reducers';

const store = createStore(reducers);
const ProviderDecorator = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

ProviderDecorator.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderDecorator;

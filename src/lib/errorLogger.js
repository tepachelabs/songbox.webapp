/* eslint-disable no-console */
import Rollbar from 'rollbar';
import config from '../config';

let isInitialized;
let rollbar;

export const initErrorLogger = () => {
  if (process.env.NODE_ENV === 'development') {
    console.info('Development mode');
  } else {
    rollbar = new Rollbar({
      accessToken: config.rollbarKey,
      captureUncaught: true,
      captureUnhandledRejections: true,
      payload: {
        environment: process.env.REACT_APP_ENV,
      },
    });
    console.info('Logger loaded');
    isInitialized = true;
  }
};

export const logError = (error) => {
  if (isInitialized) {
    throw new Error(error);
  } else {
    console.error(error);
  }
};

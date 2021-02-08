const dev = {
  apiGatewayUrl: 'http://localhost:4000',
};

const prod = {
  apiGatewayUrl: 'https://api.songbox.io',
  rollbarKey: process.env.REACT_APP_ROLLBAR_KEY,
};

const stage = {
  apiGatewayUrl: 'https://api.stage.songbox.io',
  rollbarKey: process.env.REACT_APP_ROLLBAR_KEY,
};

let config = dev;

config = process.env.REACT_APP_ENV === 'production' ? prod : config;
config = process.env.REACT_APP_ENV === 'stage' ? stage : config;

export default {
  ...config,
};

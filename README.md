Copyright © 2020, TepacheLabs

# Songbox

Songbox is a web service that allows users to listen to their music stored in Dropbox without having to install any app, directly from a web interface.

## Features:

1. Out of the box solution for mobile devices.
2. Dropbox stream cross-platform player.
3. Play music, mp3, audiobooks from Dropbox.
4. Supported audio formats: mp3, wav, ogg.
5. No need to install Dropbox app.
6. Access to Dropbox audio content anywhere
7. All your music, songs, audio, audio books, audio reports in one place.

**Other:**

1. Using HTML5 web browser.
2. No need to install any additional software.
3. No stored files in system memory.
4. Free to use.

## Webapp Installation
```shell script
$ git clone https://github.com/tepachelabs/songbox.webapp.git
$ cd songbox.webapp
$ npm install
$ npm start

# Open in your browser the url http://localhost:3000
```
## Backend URL
Under the **src** folder there's a file called **config.js**. In this file you can change the **apiGatewayUrl** to fill your needs.
Whether you want to change the url for development or production (this is just the url for the [backend](https://github.com/tepachelabs/songbox.api))
```
const dev = {
  apiGatewayUrl: 'http://localhost:4000',
  ...
};

const prod = {
  apiGatewayUrl: 'https://songbox.io',
  ...
};

const stage = {
  apiGatewayUrl: 'https://stage.songbox.io',
  ...
};
```

## Running Storybook
Once you have installed all modules, you can run Storybook to see and test components in isolation.
```shell script
$ npm run storybook

# Open in your browser the url http://localhost:6006
```
## Building For Production

```shell script
$ REACT_APP_ENV=prod npm run build

```

Checkout the [server repository](https://github.com/tepachelabs/songbox.api) to set up the whole project.
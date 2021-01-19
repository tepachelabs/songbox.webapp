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
# localhost:3000
```

## API
```
1. GET -> /api/files
This route will give you all files from the root of your Dropbox.

2. GET -> /api/files/*
This route will give you access to an specific folder of your Dropbox (specifying the route where the '*' is).

3. GET -> /api/file/filename.mp3
This route will give access to the file link.

4. GET -> /api/me
This route will check if your token is valid and return the information of the user.
```
Simple as that...

Checkout the [server repository](https://github.com/tepachelabs/songbox.api) to set up the whole project.
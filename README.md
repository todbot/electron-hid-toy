# electron-hid-toy

A simple Electron app to experiment with `node-hid`.

Tested on Electron v5.0.1. Originally tested on Electron v1.2.6.

To use:
```
npm install
npm start
```

To build the application:
```
npm install
npm build
```

![screenshot](./screenshot.png)

Uses the magic of `require('babel-register')` in both the app and renderer to do on-the-fly transpiling

This project leans heavily on https://github.com/b52/electron-es6-react
and http://electron.rocks/electron-builder-explained/

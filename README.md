# electron-hid-toy

A simple Electron app to experiment with `node-hid`.

![screenshot](./screenshot.png)

Tested on Electron v9.0.5. Originally tested on Electron v1.2.6.

To use:
```
npm install
npm run rebuild
npm start
```

To build the application:
```
npm install
npm run build
```

Notes:
- On MacOS, running `npm run build` will attempt to sign and notarize the app. This takes several minutes and requires setting the environment variables:
   - `APPLEID` -- developer Apple ID
   - `APPLEIDPASSWD` -- app-specific password for above Apple ID
   - `TEAM_SHORT_NAME` -- team short name, as provided by `/Applications/Transporter.app/Contents/itms/bin/iTMSTransporter -m provider -u $APPLEID -p $APPLEIDPASSWD`

- Uses the magic of `require('babel-register')` in both the app and renderer to do on-the-fly React transpiling

- This project originally leaned heavily on https://github.com/b52/electron-es6-react
and http://electron.rocks/electron-builder-explained/

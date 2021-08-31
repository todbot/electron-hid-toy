# electron-hid-toy

A simple Electron app to experiment with `node-hid`.

![screenshot](./screenshot.png)

Tested on Electron v9.0.5. Originally tested on Electron v1.2.6.

To use:
```
yarn
yarn dev
```

To build the application:
```
yarn
yarn dist
```

Notes:
- On MacOS, running `yarn dist` will attempt to sign and notarize the app. This takes several minutes and requires setting the environment variables:
   - `APPLEID` -- developer Apple ID
   - `APPLEIDPASS` -- app-specific password for above Apple ID
   - `TEAM_SHORT_NAME` -- team short name, as provided by `/Applications/Transporter.app/Contents/itms/bin/iTMSTransporter -m provider -u $APPLEID -p $APPLEIDPASSWD`

- This project leans heavily on https://github.com/electron-userland/electron-webpack-quick-start
- This project originally leaned heavily on https://github.com/b52/electron-es6-react
and http://electron.rocks/electron-builder-explained/

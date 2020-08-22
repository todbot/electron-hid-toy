
"use strict";

require('babel-register');

var electron = require('electron');
var app = electron.app;  // Module to control application life.
var BrowserWindow = electron.BrowserWindow;  // Module to create native browser window.

// test we can load node-hid in main process
var HID = require('node-hid');

console.log("node-hid loaded: devices:", HID.devices());

// Report crashes to our server.
// require('crash-reporter').start();

// Linux 3d acceleration causes black screen for Electron-based apps, so turn it off
// see https://github.com/electron/electron/issues/4380 and
// https://github.com/electron/electron/issues/5297
if( process.platform === 'linux' ) {
    app.disableHardwareAcceleration();
}

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;

// Temp fix before node-hid@1.3.0
// https://github.com/electron/electron/issues/18397
// app.allowRendererProcessReuse = false;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
  // Create the browser window.
  mainWindow = new BrowserWindow( {
    width: 1024,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    }
  });

  // and load the index.html of the app.
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // Open the DevTools.
  if( process.env.NODE_ENV === 'development' ) {
    mainWindow.webContents.openDevTools({mode:'bottom'});
  }

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
});

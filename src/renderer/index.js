import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// import entry component
import DeviceList from './deviceList';

// render `Entry` component
ReactDOM.render(
    <DeviceList name='HID devices'/>,
    document.getElementById( 'app' ),
);

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

// local dependencies
//import { getVersion } from 'common/util';
// import styles (for compilation)
//import './styles.scss';

var HID = require('node-hid')
var devices = HID.devices();

export default class DeviceList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

  createDeviceRow(dev, index) {
    return (
      <tr key={index}>
        <td>{dev.vendorId}</td>
        <td>{dev.productId}</td>
        <td>{dev.usagePage}</td>
        <td>{dev.usage}</td>
        <td>{dev.product}</td>
        <td>{dev.manufacturer}</td>
        <td>{dev.serialNumber}</td>
        <td className="col-sm-2">{dev.path}</td>
      </tr>
    );
  };

  createTable() {
    return (
      <Table bordered striped size="sm" responsive>
        <thead>
          <tr>
            <th>vendorId</th>
            <th>productId</th>
            <th>usagePage</th>
            <th>usage</th>
            <th>product</th>
            <th>manufacturer</th>
            <th>serialNumber</th>
            <th>path</th>
          </tr>
        </thead>
        <tbody>
          {devices.map( this.createDeviceRow, this )}
        </tbody>
      </Table>
    )
  }
    render() {
        return (
            <Container>
        <Row>
          <Col>
            <h1> Electron HID Toy! </h1>
          </Col>
        </Row>
        <Row>
          <Col>
          <p> Electron version: {process.versions.electron}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4> HID devices connected</h4>
            (reload to see changes, mouse & keyboards are visible to node-hid but can't be opened)
            {this.createTable()}
          </Col>
        </Row>
      </Container>
     )
    }
    
    renderold() {
      var devices = HID.devices();
        return (
                <div className='hello'>
                <h1>Hello { this.props.name } World!</h1>
                <h3>Version: TOD TOD TOD</h3>
                <h3>Counter: { this.state.count }</h3>
                <button
            onClick={ () => this.setState( {count: this.state.count + 1 } ) }
                >Increment Counter</button>
                
                <Button variant="primary">Primary</Button>
                <p>devices: { JSON.stringify(devices) }</p>
                
            </div>
        );
    }
}
/*
// export a react component
export default ( props ) => {
    const [ count, incrementCount ] = useState( 0 );
    var devices = HID.devices()
    console.log("HID devices:", devices)

    return (
        <div className='hello'>
            <h1>Hello { props.name } World!</h1>
            <h3>Version: TOD TOD TOD</h3>
            <h3>Counter: { count }</h3>
            <button
                onClick={ () => incrementCount( count + 1 ) }
            >Increment Counter</button>
            <Button variant="primary">Primary</Button>
            <p>devices: { JSON.stringify(devices) }</p>
            
        </div>
    );
};
*/


"use strict";

const React = require('react');
const ReactDOM = require('react-dom');

const Row = require('react-bootstrap').Row;
const Col = require('react-bootstrap').Col;
const Container = require('react-bootstrap').Container;
const Table = require('react-bootstrap').Table;

const HID = require('node-hid');

const devices = HID.devices();

class HIDToyApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: null,
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
      <Table bordered striped size="sm">
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
            <h4> HID devices connected</h4>
            (reload to see changes, mouse & keyboards are visible to node-hid but can't be opened)
            {this.createTable()}
          </Col>
        </Row>
      </Container>
    )
  }
}

ReactDOM.render(
  <HIDToyApp />,
  document.getElementById('example')
);

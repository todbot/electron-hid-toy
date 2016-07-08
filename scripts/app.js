
"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Grid = require('react-bootstrap').Grid;
var Table = require('react-bootstrap').Table;

var HID = require('node-hid');

var devices = HID.devices();

var App = React.createClass({

    getInitialState: function() {
        return {
        };
    },

    render: function() {
        var createDeviceRow = function(dev, index) {
            return (
                <tr key={index}>
                    <td>{dev.vendorId}</td>
                    <td>{dev.productId}</td>
                    <td>{dev.product}</td>
                    <td>{dev.manufacturer}</td>
                    <td>{dev.serialNumber}</td>
                    <td>{dev.path}</td>
                </tr>
            );
        };

        return (
            <Grid>
               <h1> Electron HID Toy! </h1>

                <Row>
                    <Col xs={12}>
                        <h4> HID Devices connected </h4>
                        <Table bordered condensed hover >
    						<thead>
    							<tr>
                                    <th>VendorId</th>
    								<th>ProductId</th>
    								<th>Product</th>
    								<th>Manufacturer</th>
    								<th>SerialNumber</th>
    								<th>Path</th>
    							</tr>
    						</thead>
    						<tbody>
    							{devices.map( createDeviceRow, this )}
    						</tbody>
    					</Table>
                    </Col>
                </Row>
            </Grid>
        );
    }
});

ReactDOM.render( <App />,  document.getElementById('example') );

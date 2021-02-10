import React from 'react';
import {Col, Container, Form, Row} from "react-bootstrap";
import PITable from "./PITable";
import Chart from "./Chart";

const PInitiation = () => {
    return (
        <Container>
            <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="4">Project Creation Bond </Form.Label>
                <Form.Label column sm="4">auto-fill</Form.Label>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="4">
                    Data Upload Frequency, months
                </Form.Label>
                <Col sm="8" className='data-picker__wrapper'>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>first 2 years</Form.Label>
                        <Form.Control as="select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option selected>6</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className='second__element' controlId="exampleForm.ControlSelect2">
                        <Form.Label>Following Frequency</Form.Label>
                        <Form.Control as="select">
                            <option selected>12</option>
                            <option value="12">12</option>
                            <option value="14">14</option>
                            <option value="16">16</option>
                            <option value="20">20</option>
                            <option value="24">24</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="4">Number of Phases</Form.Label>
                <Form.Label column sm="4">auto-fill</Form.Label>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="4">NFT Mint Cost, DAI</Form.Label>
                <Form.Label column sm="4">auto-fill</Form.Label>
            </Form.Group>
            <PITable/>
            <Chart/>
        </Container>
    );
};

export default PInitiation;

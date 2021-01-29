import React from 'react';
import {Col, Container, Form, Row} from "react-bootstrap";
import PITable from "./PITable";

const PInitiation = () => {
    return (
        <Container>
            <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="4">Scope of Project (SURFACE AREA )</Form.Label>
                <Form.Label column sm="4">100 sq</Form.Label>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="4">
                    Data Upload Frequency (Minimum is Set Every 12 Months = first 2 years every 6 months)
                </Form.Label>
                <Col sm="8"className='data-picker__wrapper'>
                    <Col  className='data-picker__wrapper'>
                        <div className='data-picker__label'> first 2 years</div>
                        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                            <option selected>6</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </Col>
                    <Col className='data-picker__wrapper'>
                        <div className='data-picker__label'>next years</div>

                        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                            <option selected>12</option>
                            <option value="12">12</option>
                            <option value="14">14</option>
                            <option value="16">16</option>
                            <option value="20">20</option>
                            <option value="24">24</option>
                        </select>
                    </Col>
                </Col>
                </Form.Group >
            <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="4">Data Upload Frequency [auto-fill]
                </Form.Label>
                <Form.Label column sm="4">text</Form.Label>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="4">Number of Phases</Form.Label>
                <Form.Label column sm="4">text</Form.Label>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="4">NFT Mint Cost</Form.Label>
                <Form.Label column sm="4">text</Form.Label>
            </Form.Group>
            <PITable/>
        </Container>
    );
};

export default PInitiation;

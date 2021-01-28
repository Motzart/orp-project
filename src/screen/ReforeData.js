import React from 'react';
import {Col, Container, Form, Row} from "react-bootstrap";

const ReforeData = () => {
    return (
        <Container>
            <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="4">Scope of Project (SURFACE AREA )</Form.Label>
                <Form.Label column sm="4">100 sq</Form.Label>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="4">
                    Number of Trees
                </Form.Label>
                <Col sm="8">
                    <Form.Control type="text" placeholder="text" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="4">
                     Avg Number of Trees
                </Form.Label>
                <Col sm="8">
                    <Form.Control type="text" placeholder="sq.km" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="4">
                  Tree species
                </Form.Label>
                <Col sm="8">
                    <Form.Control type="text" placeholder="sq.km" />
                </Col>
            </Form.Group>
            <Form>
                <Form.File
                    id="custom-file"
                    label="upload"
                    custom
                />
            </Form>
        </Container>
    );
};

export default ReforeData;
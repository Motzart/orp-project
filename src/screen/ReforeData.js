import React from 'react';
import {Col, Container, Form, Row} from "react-bootstrap";
import IconeSelect from "./IconeSelect";
import { observer } from "mobx-react";
import store from "../store";

const ReforeData = () => {
    const {configCoordinate} = store;
    return (
        <Container>
            <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="4">Surface Area, sq.km</Form.Label>
                <Form.Label column sm="4">{configCoordinate.square}</Form.Label>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="4">
                    Number of Trees
                </Form.Label>
                <Col sm="8" className='rd__wrapper'>
                    <Form.Control type="text" placeholder="text" sm="4"/>
                </Col>

            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="4">
                    Avg tree density, per sq.km
                </Form.Label>
                <Col sm="8">
                    <Form.Control type="text" placeholder="text"/>
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="4">
                    Tree species
                </Form.Label>
                <Col sm="8">
                    <Form.Control type="text" placeholder="text"/>
                </Col>
            </Form.Group>
            <Form>
                <Form.File
                    id="custom-file"
                    label="upload"
                    custom
                />
            </Form>
            <div className='icone__wrapper'>
                <div>Co-benefits</div>
                <IconeSelect/>
            </div>
            <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="4">
                    Additional Project Information:
                </Form.Label>
                <Col sm="8" className='rd__wrapper'>
                    <Form.Control as="textarea" rows={3}/>
                </Col>

            </Form.Group>
        </Container>
    );
};

export default observer(ReforeData);

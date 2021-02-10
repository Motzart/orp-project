import React from 'react';
import {Col, Container, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {observer} from "mobx-react";
import store from '../store'

const PLocation = () => {
    const {configCoordinate} = store;

    return (
        <Container>
            <div className="map__wrapper">
                <div className='map__label'>Map</div>
                <Link to='/map'>Open Map</Link>
            </div>
            <Form.Group as={Row} >
                <Form.Label column sm="2">
                    Coordinates
                </Form.Label>
                <Col sm="4">
                    <Form.Control type="text" placeholder="lat" value={configCoordinate.coordinate.latitude || ''}/>
                </Col>
                <Col sm="4">
                    <Form.Control type="text" placeholder="lon" value={configCoordinate.coordinate.longitude || ''}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row} >
                <Form.Label column sm="2">
                    Region
                </Form.Label>
                <Col sm="8">
                    <Form.Control type="text" placeholder="Region" value={configCoordinate.region || ''}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="4">Google Plus Code </Form.Label>
                <Form.Label column sm="4">{configCoordinate.codePlus || ''}</Form.Label>
            </Form.Group>
        </Container>
    );
};

export default observer(PLocation);

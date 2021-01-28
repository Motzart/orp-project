import React from 'react';
import {Col, Container, Form, Row} from "react-bootstrap";
import Map from "./Map";

const PLocation = () => {
    return (
    <Container>
        <div className='location'>
        <div className='select-wrapper'>
            <div className='select-label'>Country:</div>
        <select className="form-select" aria-label="Default select example">
            <option selected>Country</option>
            <option value="USA">USA</option>
            <option value="Sweden">Sweden</option>
            <option value="Ukraine">Ukraine</option>
        </select>
        </div>
            <div className='select-wrapper'>
                <div className='select-label'>Region:</div>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Region</option>
                    <option value="Text">Text</option>
                    <option value="Text">Text</option>
                    <option value="Text">Text</option>
                </select>
            </div>
        </div>
        <div className="map__wrapper">
            <div className='map__label'>Map</div>
            <Map/>
        </div>
        <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="2">
                Coordinates
            </Form.Label>
            <Col sm="4">
                <Form.Control type="text" placeholder="lat" />
            </Col>
            <Col sm="4">
                <Form.Control type="text" placeholder="lon" />
            </Col>
            </Form.Group>

    </Container>
    );
};

export default PLocation;

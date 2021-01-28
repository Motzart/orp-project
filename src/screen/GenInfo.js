import React, {useState} from 'react';
import {Col, Container, Form, Row} from "react-bootstrap";
import DatePicker from "react-datepicker";

const GenInfo = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
          <Container>
              <Form.Group as={Row} controlId="formPlaintextPassword">
                  <Form.File
                      id="custom-file"
                      label="icon upload"
                      custom
                  />
              </Form.Group>
              <Form.Group as={Row} controlId="formPlaintextPassword">
                  <Form.Label column sm="4">
                      Project Name
                  </Form.Label>
                  <Col sm="8">
                      <Form.Control type="text" placeholder="project" />
                  </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formPlaintextPassword">
                  <Form.Label column sm="4">Project developer</Form.Label>

                  <Form.Label column sm="4">name auto-fill</Form.Label>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextEmail">
                  <Form.Label column sm="4">
                      Duration of Project
                  </Form.Label>
                  <Col sm="8" className='data-picker__wrapper'>
                      <DatePicker
                          selected={startDate}
                          onChange={date => setStartDate(date)}
                          selectsStart
                          startDate={startDate}
                          endDate={endDate}
                      />
                      <DatePicker
                          selected={endDate}
                          onChange={date => setEndDate(date)}
                          selectsEnd
                          startDate={startDate}
                          endDate={endDate}
                          minDate={startDate}
                          className="date-picker"
                      />
                  </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formPlaintextPassword">
                  <Form.Label column sm="4">
                      Project Budget
                  </Form.Label>
                  <Col sm="8">
                      <Form.Control type="text" placeholder="budget" />
                  </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formPlaintextPassword">
                  <Form.Label column sm="2">
                      Name
                  </Form.Label>
                  <Col sm="4">
                      <Form.Control type="text" placeholder="name" />
                  </Col>
                  <Form.Label column sm="2">
                      Information
                  </Form.Label>
                  <Col sm="4">
                      <Form.Control type="text" placeholder="info" />
                  </Col>

              </Form.Group>
              <Form.Group as={Row} controlId="formPlaintextPassword">
                  <Form.Label column sm="4">
                      Project Introduction
                  </Form.Label>
                  <Col sm="8">
                      <Form.Control type="text" placeholder="..." />
                  </Col>
              </Form.Group>
        </Container>
    );
};

export default GenInfo;

import {Link} from 'react-router-dom';
import { useState }from 'react'
import {Container, Form, Row, Col} from 'react-bootstrap';
import  DatePicker from 'react-datepicker'

const ProjectDetails = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
  <Container>
    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 className="display-4">Project Details and NFT scope</h1>
    </div>
    <Form>
      <hr />
      Project Details:
      <hr />
      <Form.Group as={Row} controlId="formPlaintextEmail">
        <Form.Label column sm="4">
          Duration of Project (Start Date, End Date)
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
        <Col sm="12" className='data-picker__wrapper'>
           <div className="row-calling">Scope of Project (SURFACE AREA ): </div >
            <Form.Label column sm="4">100 sq</Form.Label>
        </Col>
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
          Location of Project (Country, Region)
        </Form.Label>
        <Col sm="8">
          <Form.Control type="text" placeholder="text" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formPlaintextPassword">
        <Form.Label column sm="4">
          Coordinates of Location
        </Form.Label>
        <Col sm="8">
          <Form.Control type="text" placeholder="text" />
        </Col>
      </Form.Group>
      <Form>
        <Form.File
          id="custom-file"
          label="Pictures/photos"
          custom
        />
      </Form>
      <br />
      <hr />
      Additional Project Details:
      <hr />
      <Form.Group as={Row} controlId="formPlaintextPassword">
        <Form.Label column sm="4">
          Input Species Type
        </Form.Label>
        <Col sm="8">
          <Form.Control type="text" placeholder="text" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formPlaintextPassword">
        <Form.Label column sm="4">
          Budget
        </Form.Label>
        <Col sm="8">
          <Form.Control type="text" placeholder="text" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formPlaintextPassword">
        <Form.Label column sm="4">
          Connected Organizations
        </Form.Label>
        <Col sm="8">
          <Form.Control type="text" placeholder="text" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formPlaintextPassword">
        <Form.Label column sm="4">
          Community Participation Details
        </Form.Label>
        <Col sm="8">
          <Form.Control type="text" placeholder="text" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formPlaintextPassword">
        <Form.Label column sm="4">
          Purpose of plantation
        </Form.Label>
        <Col sm="8">
          <Form.Control type="text" placeholder="text" />
        </Col>
      </Form.Group>

    </Form>
    <Link className="w-100 btn btn-lg btn-primary" to="/bond">Project Creation Bond</Link>
    <br/>
    <br/>
  </Container>
)}

export default ProjectDetails;

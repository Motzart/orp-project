import {Link} from 'react-router-dom';
import {Container, Form, Row, Col} from 'react-bootstrap';

const ProjectDetails = () => (
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
        <Col sm="8">
          <Form.Control plaintext readOnly defaultValue="01.01.2021 - 01.03.2021" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formPlaintextPassword">
        <Form.Label column sm="4">
          Data Upload Frequency (Minimum is Set Every 12 Months = first 2 years every 6 months)
        </Form.Label>
        <Col sm="8">
          <Form.Control type="text" placeholder="text" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formPlaintextPassword">
        <Form.Label column sm="4">
          Scope of Project (Number of Trees / SURFACE AREA )
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
)

export default ProjectDetails;

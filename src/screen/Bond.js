import {Col, Container, Form, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Bond = () => (
  <Container>
    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 className="display-4">Costs, Estimates, Fees, and Project Initiation</h1>
    </div>
    <Form>
      <Form.Group as={Row} controlId="formPlaintextPassword">
        <Form.Label column sm="4">
          Project Creation Bond (Based Upon the Size of the Project)
        </Form.Label>
        <Col sm="8">
          <Form.Control type="text" placeholder="..." />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formPlaintextPassword">
        <Form.Label column sm="4">
          NFT Mint Cost
        </Form.Label>
        <Col sm="8">
          <Form.Control type="text" placeholder="..." />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formPlaintextPassword">
        <Form.Label column sm="4">
          Phase 1 Data Upload Fee (Based on Number of Stages)
        </Form.Label>
        <Col sm="8">
          <Form.Control type="text" placeholder="..." />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formPlaintextPassword">
        <Form.Label column sm="4">
          Number of Project Phases and Slope Over Time
        </Form.Label>
        <Col sm="8">
          <Form.Control type="text" placeholder="..." />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formPlaintextPassword">
        <Form.Label column sm="4">
          Upload Collateral Requested (Sent to Collateral Providers Upon Sign Off)
        </Form.Label>
        <Col sm="8">
          <Form.Control type="text" placeholder="..." />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formPlaintextPassword">
        <Form.Label column sm="4">
          Total Project Costs (Upload Fees) + Percentage Fee
        </Form.Label>
        <Col sm="8">
          <Form.Control type="text" placeholder="..." />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formPlaintextPassword">
        <Form.Label column sm="4">
          Total RCC Yield
        </Form.Label>
        <Col sm="8">
          <Form.Control type="text" placeholder="..." />
        </Col>
      </Form.Group>

    </Form>
    <Link className="w-100 btn btn-lg btn-primary" to="/mint-nft">Confirm - Mint NFT</Link>
  </Container>
)

export default Bond;

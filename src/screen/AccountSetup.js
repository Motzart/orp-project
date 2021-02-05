import {Link} from 'react-router-dom';
import {Col, Container, Form, Row} from 'react-bootstrap';

const AccountSetup = () => (
  <Container>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 className="display-4">Account Setup</h1>
        <Form.Group as={Row} controlId="nameId">
            <Form.Label column sm="2">
                Name
            </Form.Label>
            <Col sm="4">
                <Form.Control type="text" placeholder="name" />
            </Col>
            <Form.Label column sm="2">
                Email
            </Form.Label>
            <Col sm="4">
                <Form.Control type="text"  placeholder="email" />
            </Col>

        </Form.Group>
        <Form.Group as={Row} controlId="telId">
            <Form.Label column sm="2">
                Phone
            </Form.Label>
            <Col sm="8">
                <Form.Control type="text" placeholder="+123" />
            </Col>
        </Form.Group>

      <Link className="w-100 btn btn-lg btn-primary" to="/project-details">Connect Your Wallet and start working</Link>
    </div>
  </Container>
)

export default AccountSetup;

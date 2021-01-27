import {Link} from 'react-router-dom';
import {Container} from 'react-bootstrap';

const Login = () => (
  <Container>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 className="display-4">Enter to app</h1>
      <p className="lead">Use Near Protocol Wallet</p>
      <Link className="w-100 btn btn-lg btn-primary" to="/project-details">Login In</Link>
    </div>
  </Container>
)

export default Login;

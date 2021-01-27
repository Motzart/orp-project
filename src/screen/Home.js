import {Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Home = () => (
  <Container>
  <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
    <h1 className="display-4">Open Reforestation Application</h1>
    <p className="lead">Welcome to the Future of Reforestation! Let’s Get Started</p>
  </div>
  <br />
  <br />
  <br />
  <br />
  <br />
  <div className="row row-cols-1 row-cols-md-2 mb-2 text-center">
      <div className="col">
        <div className="card mb-4 shadow-sm">
          <div className="card-header">
            <h4 className="my-0 fw-normal">New Project</h4>
          </div>
          <div className="card-body">
            <Link className="w-100 btn btn-lg btn-outline-primary" to="declaimer">Start New Project</Link>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card mb-4 shadow-sm">
          <div className="card-header">
            <h4 className="my-0 fw-normal">Existing Project</h4>
          </div>
          <div className="card-body">
            <Link className="w-100 btn btn-lg btn-primary" to="/operating-area">Enter to existing project</Link>
          </div>
        </div>
      </div>
    </div>
  </Container>

);

export default Home;

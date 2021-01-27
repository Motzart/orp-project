import {Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Declaimer = () => (
  <Container>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 className="display-4">Declaimer</h1>
      <p className="lead">Starting a project on Reforester is for individuals or companies interested in tracking the growth and development of a reforestation project. This means you currently have a reforestation project planned, as well as the resources and legal right to plant on the land you intend to. </p>
      <Link className="w-100 btn btn-lg btn-primary" to="/account-setup">I Understand</Link>
    </div>
  </Container>
)

export default Declaimer;

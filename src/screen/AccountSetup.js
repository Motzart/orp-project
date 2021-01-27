import {Link} from 'react-router-dom';
import {Container} from 'react-bootstrap';

const AccountSetup = () => (
  <Container>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 className="display-4">Account Setup</h1>
      <p className="lead">1. Primary Account Manager / Administrator</p>
      <p className="lead">2. Ownership Split in Percentages</p>
      <p className="lead">3. Disclaimer requiring agreement that the NFT will split in line with the Ownership Split</p>

      <Link className="w-100 btn btn-lg btn-primary" to="/project-details">Connect Your Wallet and start working</Link>
    </div>
  </Container>
)

export default AccountSetup;

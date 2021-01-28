import {Container, Tab, Tabs} from 'react-bootstrap';
import {useState} from 'react';

const OperatingArea = () => {
  const [key, setKey] = useState('key1');

  return (
    <Container>
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4">Project Details and NFT scope</h1>
      </div>
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4">Operating Area</h1>
        <p className="lead">Operating Area</p>
      </div>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" activeKey={key} onSelect={(k) => setKey(k)}>
        <Tab eventKey="key1" title="Upload Collateral Status">
          <p>Some text</p>
        </Tab>
        <Tab eventKey="key2" title="NFT Space">
          <p>Some text</p>
        </Tab>
        <Tab eventKey="key3" title="Validation Status">
          <p>Some text</p>
        </Tab>
        <Tab eventKey="key4" title="Data Upload Console">
          <p>Some text</p>
        </Tab>
      </Tabs>
    </Container>
  )
}

export default OperatingArea;

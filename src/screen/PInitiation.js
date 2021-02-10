import React from 'react';
import { Container, Form, Row} from "react-bootstrap";
// import PITable from "./PITable";
import Chart from "./Chart";

const PInitiation = () => {

    return (
        <Container>
            {/*<Form.Group as={Row} controlId="formPlaintextPassword">*/}
            {/*    <Form.Label column sm="4">Project Creation Bond </Form.Label>*/}
            {/*    <Form.Label column sm="4">auto-fill</Form.Label>*/}
            {/*</Form.Group>*/}
            {/*<Form.Group as={Row} controlId="formPlaintextPassword">*/}
            {/*    <Form.Label column sm="4">*/}
            {/*        Data Upload Frequency, months*/}
            {/*    </Form.Label>*/}
            {/*    <Col sm="8" className='data-picker__wrapper'>*/}
            {/*        <Form.Group controlId="exampleForm.ControlSelect1">*/}
            {/*            <Form.Label>first 2 years</Form.Label>*/}
            {/*            <Form.Control as="select">*/}
            {/*                <option>1</option>*/}
            {/*                <option>2</option>*/}
            {/*                <option>3</option>*/}
            {/*                <option>4</option>*/}
            {/*                <option>5</option>*/}
            {/*                <option selected>6</option>*/}
            {/*            </Form.Control>*/}
            {/*        </Form.Group>*/}
            {/*        <Form.Group className='second__element' controlId="exampleForm.ControlSelect2">*/}
            {/*            <Form.Label>Following Frequency</Form.Label>*/}
            {/*            <Form.Control as="select">*/}
            {/*                <option selected>12</option>*/}
            {/*                <option value="12">12</option>*/}
            {/*                <option value="14">14</option>*/}
            {/*                <option value="16">16</option>*/}
            {/*                <option value="20">20</option>*/}
            {/*                <option value="24">24</option>*/}
            {/*            </Form.Control>*/}
            {/*        </Form.Group>*/}
            {/*    </Col>*/}
            {/*</Form.Group>*/}
            {/*<Form.Group as={Row} controlId="formPlaintextPassword">*/}
            {/*    <Form.Label column sm="4">Number of Phases</Form.Label>*/}
            {/*    <Form.Label column sm="4">auto-fill</Form.Label>*/}
            {/*</Form.Group>*/}
            {/*<Form.Group as={Row} controlId="formPlaintextPassword">*/}
            {/*    <Form.Label column sm="4">NFT Mint Cost, DAI</Form.Label>*/}
            {/*    <Form.Label column sm="4">auto-fill</Form.Label>*/}
            {/*</Form.Group>*/}
            {/*<PITable/>*/}
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-4">Project Costs
                </h1>
            </div>
            <Form.Group as={Row} >
                <Form.Label column sm="4">NFT Mint:</Form.Label>
                <Form.Label column sm="4">50  DAI </Form.Label>
            </Form.Group>
            <Form.Group as={Row} >
                <Form.Label column sm="4">Project Deposit:</Form.Label>
                <Form.Label column sm="4">150 DAI</Form.Label>
            </Form.Group>
            <Form.Group as={Row} >
                <Form.Label column sm="4">Total Data Upload Costs:</Form.Label>
                <Form.Label column sm="4">680 DAI</Form.Label>
            </Form.Group>
            <Form.Group as={Row} >
                <Form.Label column sm="4">Costs Required to Start Project:</Form.Label>
                <Form.Label column sm="4">200 DAI</Form.Label>
            </Form.Group>
            <Chart/>
        </Container>
    );
};

export default PInitiation;

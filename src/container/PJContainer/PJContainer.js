import React from 'react';
import GenInfo from "../../screen/GenInfo";
import {Container,Accordion,Card,Button} from 'react-bootstrap';
import PLocation from "../../screen/PLocation";
import ReforeData from "../../screen/ReforeData";

const PjContainer = () => {
    return (
        <Container>
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-4">Project Details and NFT scope</h1>
            </div>
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} className='accordion' variant="link" eventKey="0">
                        1. GENERAL INFORMATION
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body><GenInfo/></Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle className='accordion' as={Button} variant="link" eventKey="1">
                        2. PROJECT LOCATION
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body><PLocation/></Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle className='accordion' as={Button} variant="link" eventKey="2">
                        3. REFORESTATION DATA
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                    <Card.Body><ReforeData/></Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
        </Container>
    );
};

export default PjContainer;

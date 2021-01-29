import React from 'react';
import GenInfo from "../../screen/GenInfo";
import {Container,Accordion,Card,Button} from 'react-bootstrap';
import PLocation from "../../screen/PLocation";
import ReforeData from "../../screen/ReforeData";
import PInitiation from "../../screen/PInitiation";

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
        </Accordion>
            <Accordion defaultActiveKey="1">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle className='accordion' as={Button} variant="link" eventKey="0">
                            2. PROJECT LOCATION
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body><PLocation/></Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            <Accordion defaultActiveKey="2">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle className='accordion' as={Button} variant="link" eventKey="0">
                            3. REFORESTATION DATA
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body><ReforeData/></Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            <Accordion defaultActiveKey="3">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle className='accordion' as={Button} variant="link" eventKey="0">
                            4. PROJECT INITIATION
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body><PInitiation/></Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </Container>
    );
};

export default PjContainer;

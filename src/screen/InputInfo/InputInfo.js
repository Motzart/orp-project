import React from 'react';
import {Col, Form, Row} from "react-bootstrap";

const InputInfo = ({count,value,change,deleteInput,valueInfo}) => {

    return (
        <Form.Group as={Row}  className='input__elem'>
            <Form.Label column sm="4">
               Funder
            </Form.Label>
            <Col sm="4">
                <Form.Control type="text" placeholder="name"  value={value} onChange={(ev)=>change(ev,count)}/>
            </Col>
            <Col sm="4">
                <Form.Control type="text" placeholder="information"  value={valueInfo} onChange={(ev)=>change(ev,count,true)}/>
            </Col>
            <div className='btn__close' onClick={()=>deleteInput(count)}></div>
        </Form.Group>
    );
};

export default InputInfo;

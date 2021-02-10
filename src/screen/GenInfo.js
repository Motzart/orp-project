import React, {useState} from 'react';
import {Col, Container, Form, Row} from "react-bootstrap";
import DatePicker from "react-datepicker";
import InputInfo from "./InputInfo/InputInfo";

const GenInfo = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [inputsArray, setInputArray] = useState([])

    const handleChange = (ev, count, info) => {
        const updArray = inputsArray.slice(0)
        if (info) updArray[count].valueInfo = ev.target.value;
        else updArray[count].value = ev.target.value;
        setInputArray(updArray)
    }

    const createInput = () => {
        const updArray = inputsArray.slice(0);
        updArray.push({value: '', valueInfo: ''})
        setInputArray(updArray)
    }

    const deleteInput = (count) => {
        const updArray = inputsArray.slice(0);
        updArray.splice(count, 1)
        setInputArray(updArray)
    }


    return (
        <Container>
            <Form.Group as={Row}>
                <Form.File
                    id="custom-file"
                    label="Upload Project Icon"
                    custom
                />
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="4">
                    Project Name
                </Form.Label>
                <Col sm="8">
                    <Form.Control type="text" placeholder="project"/>
                </Col>
            </Form.Group>
            <Form.Group as={Row} >
                <Form.Label column sm="4">Project developer</Form.Label>

                <Form.Label column sm="4">name auto-fill</Form.Label>
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label column sm="4">
                    Duration of Project
                </Form.Label>
                <Col sm="8" className='data-picker__wrapper'>
                    <DatePicker
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                    />
                    <DatePicker
                        selected={endDate}
                        onChange={date => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        className="date-picker"
                    />
                </Col>
            </Form.Group>
            <Form.Group as={Row} >
                <Form.Label column sm="4">
                    Project Budget
                </Form.Label>
                <Col sm="8">
                    <Form.Control type="text" placeholder="budget"/>
                </Col>
            </Form.Group>
            <div className='wrapper__inputs'>
                <Form.Group as={Row} >
                    <Form.Label column sm="4">
                        Funders
                    </Form.Label>
                    <Col sm="2">
                        <Form.Control type="text" placeholder="name"/>
                    </Col>
                    <Col sm="4">
                        <Form.Control type="text" placeholder="information"/>
                    </Col>
                </Form.Group>
                {inputsArray.length > 0 && inputsArray.map((el, index) => <InputInfo value={el.value}
                                                                                     valueInfo={el.valueInfo}
                                                                                     count={index}
                                                                                     key={index}
                                                                                     deleteInput={deleteInput}
                                                                                     change={handleChange}/>)}
                <div className='btn__plus' onClick={createInput}
                >+
                </div>
            </div>
            <Form.Group as={Row} >
                <Form.Label column sm="4">
                    Project Details
                </Form.Label>
                <Col sm="8">
                    <Form.Control type="text" placeholder="..."/>
                </Col>
            </Form.Group>
        </Container>
    );
};

export default GenInfo;

import React from 'react';
import {ComposedChart, Line,  Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import {Container} from "react-bootstrap";

const data = [
    {
        name: 'Phase 1 (3 month)',
        'data upload fee slope in (%)': 30,
        'data upload fee,dai': 150,
        cnt: 490,
    },
    {
        name: 'Phase 2 (3 month)',
        'data upload fee slope in (%)': 25,
        'data upload fee,dai': 125,
        sup: 'Phone',
        cnt: 30,
    },
    {
        name: 'Phase 3 (6 month)',
        'data upload fee slope in (%)': 20,
        'data upload fee,dai': 100,
        cnt: 350,
    },
    {
        name: 'Phase 4 (12 month)',
        'data upload fee slope in (%)': 15,
        'data upload fee,dai': 75,
        cnt: 480,
    },
    {
        name: 'Phase 4 (13 month)',
        'data upload fee slope in (%)': 10,
        'data upload fee,dai': 50,
        cnt: 460,
    },
];

const Chart = () => {
    return (
        <Container>
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-4">Project Upload Timeline
                </h1>
            </div>
            <ComposedChart
                width={900}
                height={300}
                data={data}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                }}
            >
                <CartesianGrid stroke="#f5f5f5"/>
                <XAxis dataKey="name" padding={{left: 50, right: 50}}/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                {/*<Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />*/}
                <Bar dataKey="data upload fee,dai" barSize={25} fill="#413ea0"/>
                <Line type="monotone" dataKey="data upload fee slope in (%)" stroke="#ff7300"/>
                {/* <Scatter dataKey="cnt" fill="red" /> */}
            </ComposedChart>
        </Container>
    );
};

export default Chart;

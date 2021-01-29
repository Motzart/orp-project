import React from 'react';
import {Container, Table} from 'react-bootstrap'
const  PITable = () => {
    return (
        <Container>
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-4">Project Breakdown Estimate:</h1>
            </div>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Project Data Upload Phase</th>
                <th>Data Upload Fee Slope, %</th>
                <th>NFT Mint Fee, DAI</th>
                <th>Data Upload Fee , DAI</th>
                <th>Required Collateral, DAI</th>
                <th>Phase Duration, mon</th>
                <th>Phase Start Date</th>
                <th>Phase Finish Date</th>
                <th>Open Carbon Credits Yield, OCC</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>NFT Mint</td>
                <td></td>
                <td>50</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>Stage 1</td>
                <td>30</td>
                <td></td>
                <td>150</td>
                <td>3,000</td>
                <td>3</td>
                <td>01/10/2021</td>
                <td>31/12/2021</td>
                <td>0</td>

            </tr>
            <tr>
                <td>Stage 2</td>
                <td>25</td>
                <td></td>
                <td>125</td>
                <td>2,500</td>
                <td>3</td>
                <td>01/01/2022</td>
                <td>31/03/2022</td>
                <td>0</td>
            </tr>
            <tr>
                <td>Stage 3</td>
                <td>20</td>
                <td></td>
                <td>100</td>
                <td>2,000</td>
                <td>6</td>
                <td>01/04/2022</td>
                <td>30/09/2022</td>
                <td>10</td>
            </tr>
            <tr>
                <td>Stage 4</td>
                <td>15</td>
                <td></td>
                <td>75</td>
                <td>1,500</td>
                <td>12</td>
                <td>01/10/2022</td>
                <td>30/09/2023</td>
                <td>20</td>
            </tr>
            <tr>
                <td>Stage 5</td>
                <td>10</td>
                <td></td>
                <td>50</td>
                <td>1,000</td>
                <td>24</td>
                <td>01/10/2023</td>
                <td>30/09/2025</td>
                <td>50</td>
            </tr>
            <tr className="tr-bold">
                <td>TOTAL</td>
                <td>100</td>
                <td>50</td>
                <td>500</td>
                <td>10,000</td>
                <td>48</td>
                <td></td>
                <td></td>
                <td>80</td>
            </tr>
            </tbody>
        </Table>
        </Container>
    );
};

export default PITable;

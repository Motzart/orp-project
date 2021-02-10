import React from 'react';
import {Container, Table} from 'react-bootstrap'

const PITable = () => {
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
                    <th>Open Carbon Credits Yield, OCC</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>NFT Mint</td>
                    <td></td>
                    <td>50</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Stage 1</td>
                    <td>30</td>
                    <td></td>
                    <td>0</td>

                </tr>
                <tr>
                    <td>Stage 2</td>
                    <td>25</td>
                    <td></td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>Stage 3</td>
                    <td>20</td>
                    <td></td>
                    <td>10</td>
                </tr>
                <tr>
                    <td>Stage 4</td>
                    <td>15</td>
                    <td></td>
                    <td>20</td>
                </tr>
                <tr>
                    <td>Stage 5</td>
                    <td>10</td>
                    <td></td>

                    <td>50</td>
                </tr>
                <tr className="tr-bold">
                    <td>TOTAL</td>
                    <td>100</td>
                    <td>50</td>
                    <td>80</td>
                </tr>
                </tbody>
            </Table>
        </Container>
    );
};

export default PITable;

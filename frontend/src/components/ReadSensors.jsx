import { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import SensorService from "../services/SensorService";
import {Link} from "react-router-dom";

export const ReadSensors = () => {
    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
        const getSensors = async () => {
            const res = await SensorService.getSensors();
            setAPIData(res.data);
            console.log('res data', res.data)
        }

        getSensors();

    }, []);

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Sum</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data, idx) => {
                        return (
                            <Table.Row key={idx}>
                                <Table.Cell>{data.sensorId}</Table.Cell>
                                <Table.Cell>{data.sensorSum}</Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}
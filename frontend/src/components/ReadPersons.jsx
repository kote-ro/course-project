import { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PersonService from "../services/PersonService";

export const Read = () => {
    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
        const getPersons = async () => {
            const res = await PersonService.getPersons();
            setAPIData(res.data);
        }

        getPersons();
    }, []);

    const setData = (data) => {
        let { idPerson, firstName, lastName, email } = data;
        localStorage.setItem('ID', idPerson);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Email', email)
    }

    const getData = async () => {
        try {
            const res = PersonService.getPersons();
            setAPIData((await res).data)
        } catch (err) {
            console.log('err', err);
        }
    }

    const onDelete = async (id) => {
        try {
            await PersonService.deletePerson(id);
            await getData();
        } catch (err) {
            console.log('err', err);
        }
    }

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data, idx) => {
                        return (
                            <Table.Row key={idx}>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Table.Cell>{data.email}</Table.Cell>
                                <Link to='/update'>
                                    <Table.Cell>
                                        <Button onClick={() => setData(data)}>Update</Button>
                                    </Table.Cell>
                                </Link>
                                <Table.Cell>
                                    <Button onClick={() => onDelete(data.idPerson)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}

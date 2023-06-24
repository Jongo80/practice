import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';


export default function ClientList() {

    const [clients, setClients] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const fetchData = async () => {
            const response = await fetch("/clients");
            const body = await response.json();
            setClients((body.length !== 0) ? body : ['There are no clients']);
            setIsLoading(false);
        }
        fetchData().catch(console.error);
    }, [])

    const removeClient = async (id) => {
        await fetch(`/clients/${id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'applciation/json',
            'Content-Type': 'application/json'
          }
        }).then(() => {
          let newClients = clients.filter((client) => client.id !== id);
          setClients(newClients);
        });
    }
    
    const clientList = (clients[0] !== 'There are no clients') ? 
        clients.map(client => <tr key={client.id}>
            <td>{client.name}</td>
            <td>{client.birthTime}</td>
            <td>{client.birthPlace}</td>
            <td>{client.motherBirthName}</td>
            <td>{client.socialSecurityNumber}</td>
            <td>{client.taxIdentificationNumber}</td>
            <td>{client.email}</td>
            <td>{client.address}</td>
            <td>{client.phoneNumber}</td>
            <td>
                <ButtonGroup>
                    <Button size="sm" color="primary" tag={Link} to={"/clients/" + client.id}>Edit</Button>
                    <Button size="sm" color="danger" onClick={() => removeClient(client.id)}>Delete</Button>
                </ButtonGroup>
            </td>
        </tr>) : 
        <tr><td>{clients}</td></tr>

    return (
        <React.Fragment>
          {isLoading ? <p>Loading...</p> :
            <div>
            <AppNavbar/>
            <Container fluid>
                <div className="float-right">
                    <Button color="success" tag={Link} to="/clients/new">Add Client</Button>
                </div>
                <h3>Clients</h3>
                <Table className="mt-4">
                    <thead>
                    <tr>
                        <th width="30%">Name</th>
                        <th width="30%">Birth Place</th>
                        <th width="30%">Mother Birth Name</th>
                        <th width="30%">Social Security Number</th>
                        <th width="30%">Tax Identification Number</th>
                        <th width="30%">Email</th>
                        <th width="30%">Address</th>
                        <th width="30%">Phone Number</th>
                        <th width="40%">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {clientList}
                    </tbody>
                </Table>
            </Container>
            </div>
          }
        </React.Fragment>
    );
}
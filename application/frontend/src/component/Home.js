import React from 'react';
import '../static/styles/App.css';
import AppNavbar from './AppNavBar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

export default function Home() {
    return (
        <div>
            <AppNavbar/>
            <Container fluid>
                <Button color="link"><Link to="/clients">Clients</Link></Button>
            </Container>
        </div>
    );
}
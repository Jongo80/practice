import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavBar';

export default function ClientEdit() {
    const navigate = useNavigate();
    const params = useParams();

    const emptyItem = {
        name: '',
        birthTime: '',
        birthPlace: '',
        motherBirthName: '',
        socialSecurityNumber: '',
        taxIdentificationNumber: '',
        email: '',
        address: '',
        phoneNumber: ''
    };
    const [item, setItem] = useState(emptyItem);

    useEffect(() => {
        if (params.id !== 'new') {
            const client = async () => {
                const res = await fetch(`/clients/${params.id}`);
                const data = await res.json();
                setItem(data);
            }
            client();
        }
    }, [params])

    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        item[name] = value;
        setItem(item)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        await fetch('/clients' + (item.id ? '/' + item.id : ''),
        {
            method: (item.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'applicaton/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        navigate('/clients');
    }

    const title = <h2>{item.id ? 'Edit Client' : 'Add Client'}</h2>;

    return (
        <div>
        <AppNavbar/>
        <Container>
            {title}
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text" name="name" id="name" placeholder={item.name || ''}
                           onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="birthTime">Birth Time</Label>
                    <Input type="text" name="birthTime" id="birthTime" placeholder={item.birthTime || 'YYYY-MM-DD'}
                           onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="birthPlace">Birth Place</Label>
                    <Input type="text" name="birthPlace" id="birthPlace" placeholder={item.birthPlace || ''}
                           onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="motherBirthName">Mother Birth Name</Label>
                    <Input type="text" name="motherBirthName" id="motherBirthName" placeholder={item.motherBirthName || ''}
                           onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="socialSecurityNumber">Social Security Number</Label>
                    <Input type="number" name="socialSecurityNumber" id="socialSecurityNumber" placeholder={item.socialSecurityNumber || ''}
                           onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="taxIdentificationNumber">Tax Identification Number</Label>
                    <Input type="number" name="taxIdentificationNumber" id="taxIdentificationNumber" placeholder={item.taxIdentificationNumber || ''}
                           onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder={item.email || ''}
                           onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="address">Address</Label>
                    <Input type="text" name="address" id="address" placeholder={item.address || ''}
                           onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="phoneNumber">Phone Number</Label>
                    <Input type="number" name="phoneNumber" id="phoneNumber" placeholder={item.phoneNumber || ''}
                           onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Button color="primary" type="submit">Save</Button>{' '}
                    <Button color="secondary" tag={Link} to="/clients">Cancel</Button>
                </FormGroup>
            </Form>
        </Container>
        </div>
    );
}
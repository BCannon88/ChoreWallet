import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

function Navigation(props) {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/">ChoreWallet</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="/Calender">Calender</Nav.Link>
                <Nav.Link href="#features">Learn More!</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/signup">Signup</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navigation;
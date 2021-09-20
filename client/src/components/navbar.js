import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import greenPic from '../assets/loginlogo.png';
import './navBar.css'

function Navigation(props) {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/">ChoreWallet</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="/Calendar">Calender</Nav.Link>
                <Nav.Link href="#features">Learn More!</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/signup">Signup</Nav.Link>
                </Nav>
                </Container>
                
                <img className='navLogo' src={greenPic} alt='navLogo'/>
            </Navbar>
        </div>
    );
}

export default Navigation;
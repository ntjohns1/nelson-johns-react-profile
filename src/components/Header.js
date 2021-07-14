import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import Nav from './Navigation';


const styles = {
    brand: {
        backgroundColor: '#016ca9',
        fontFamily: 'Bona Nova Bold'
    },
    heading: {
        color: 'white',
        fontSize: '200%',
    }
};

export default function Header() {
    return (
        <Navbar style={styles.brand}>
            <Container>
                <Navbar.Brand href="#home"><h1 style={styles.heading}>Nelson Johns</h1><br />
                    <h2>Full Stack Web Developer</h2>
                </Navbar.Brand>
                <Nav />
            </Container>
        </Navbar>
    );
}
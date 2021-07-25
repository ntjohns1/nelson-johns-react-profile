import React from 'react';
import Nav from './Navigation';
import { Navbar, Container } from 'react-bootstrap';

const styles = {
    navTxt: {
        color: '#FFFFFF'
    }
}

export default function Header({ currentPage, handlePageChange }) {
    return (
        <Navbar className='navbar' expand='lg'>
            <Container className='d-flex justify-content-center'>
                <div className='flex-column align-items text-center'>
                    <Navbar.Brand 
                        onClick={() => handlePageChange('/')}
                        className='p-0 navbar-heading'
                        style={styles.navTxt}>
                            Nelson Johns
                        </Navbar.Brand><br />
                    <Navbar.Text href='/'
                        onClick={() => handlePageChange('/')}
                        className='p-0 navbar-txt'
                        style={styles.navTxt}>
                        Full Stack Web Developer
                    </Navbar.Text>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
                    </Navbar.Collapse>        
                </div>
            </Container>
        </Navbar>
    );
}

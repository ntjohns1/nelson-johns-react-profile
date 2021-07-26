import React from 'react';
import Nav from './Navigation';
import { Navbar, Container, Row, Col } from 'react-bootstrap';

const styles = {
    navTxt: {
        color: '#FFFFFF'
    }
}

export default function Header({ currentPage, handlePageChange }) {
    return (
        <Navbar className='navbar' expand='lg'>
            <Container className='d-flex justify-content-center'>
                <Row className='text-center'>
                    <Col>
                    <Navbar.Brand 
                        onClick={() => handlePageChange('/')}
                        className='p-0 m-0 text-center navbar-heading'
                        style={styles.navTxt}>
                            Nelson Johns
                        </Navbar.Brand><br />
                    <Navbar.Text href='/'
                        onClick={() => handlePageChange('/')}
                        className='p-0 mt-0 text-center navbar-txt'
                        style={styles.navTxt}>
                        Full Stack Web Developer
                    </Navbar.Text>
                    <Row className='mt-2 d-flex justify-content-center'>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='me-auto' currentPage={currentPage} handlePageChange={handlePageChange} />
                    </Navbar.Collapse>
                    </Row>
                    </Col>        
                </Row>
            </Container>
        </Navbar>
    );
}

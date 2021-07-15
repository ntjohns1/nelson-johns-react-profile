import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container } from 'react-bootstrap';


export default function Footer() {
    return (
        <Container>
            <section className="d-flex justify-content-center" id="contact-info">
                <div>
                    <a className='p-2 mt-3 footer-icon' href='https://www.linkedin.com/in/nelson-johns-9b353033/'><FontAwesomeIcon icon={['fab', 'linkedin']} size='3x' /></a>
                    <a className='p-2 mt-3 footer-icon' href='https://github.com/ntjohns1' ><FontAwesomeIcon icon={['fab', 'github']} size='3x' /></a>
                </div>
            </section>
        </Container>
    );
}
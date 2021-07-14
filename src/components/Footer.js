import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container } from 'react-bootstrap';


export default function Footer() {
    return (
        <Container>
        <section className="d-flex justify-content-center" id="contact-info">
            <div>
                <a href="https://www.linkedin.com/in/nelson-johns-9b353033/"><FontAwesomeIcon icon={['fab', 'linkedin']}/></a>
                <a  href="https://github.com/ntjohns1" ><FontAwesomeIcon icon={['fab', 'github']}/></a>
            </div>
        </section>
        </Container>
    );
}
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Footer() {
    return (
        <section id="contact-info">
            <ul>
                <li>email: nelsontjohns@gmail.com</li>
                <li>phone: 317-332-3112</li>
                <li><a href="https://www.linkedin.com/in/nelson-johns-9b353033/"><FontAwesomeIcon icon={['fab', 'linkedin']}/></a></li>
                <li><a  href="https://github.com/ntjohns1" ><FontAwesomeIcon icon={['fab', 'github']}/></a></li>

            </ul>
        </section>
    );
}
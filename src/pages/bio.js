import React from 'react';
import { Container, Card  } from "react-bootstrap";
import headshot from '../images/Headshot2.png';
// import {Navbar, Nav} from 'react-bootstrap';

const cardStyle = {
    width: '18rem',
  };

export default function Bio() {
    return (
        <Container fluid>
        <Card className='mb-3 text-center'>
            <Card.Body>
            <Card.Img style={cardStyle} className="mb-3" variant="top" src={headshot} alt='Headshot' />
                <Card.Text>
                    Full Stack Web Developer with a passion for solving complex problems. I recently earned a certificate from UNC Coding Bootcamp, and continue to develop my skills in React.js, GraphQL, MongoDB, and mySQL. My last project was a MERN application for tabletop role playing games that provides a responsive user interface for commerce-based game mechanics. Working with a team of four, I was responsible for front end javascript and user authorization utilizing JSON Web Tokens. I am excited to apply my skills in a fast paced, quality-driven team.
                </Card.Text>
            </Card.Body>
        </Card>
        </Container>
    );
};

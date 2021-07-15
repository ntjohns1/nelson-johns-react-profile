import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// xs={6} md={2}
const Project = ({ project }) => {
    if (project) {
        return (
            <Col >
                <Card className="m-3 d-flex justify-content-center">
                    <Card.Body className="p-3 d-flex justify-content-center">
                        <a href={project.deployed}>
                            <Card.Title className='text-center font-face-ssp'>{project.name}</Card.Title>
                            <Card.Img src={project.image} alt={project.description}></Card.Img>
                        </a>
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-center">
                        <Link className='font-face-ssp' href={project.repo}><FontAwesomeIcon icon={['fab', 'github']} size='2x' /></Link>
                    </Card.Footer>
                </Card>
            </Col>
        );
    }

    return null;
}


export default Project;
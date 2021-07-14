import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// xs={6} md={2}
const Project = ({ project }) => {
    if (project) {
        return (
            <Col >
                <Card className="d-flex justify-content-center">
                    <Card.Body>
                        <a href={project.deployed}>
                            <Card.Title><h2>{project.name}</h2></Card.Title>
                            <Card.Img src={project.image} alt={project.description}></Card.Img>
                        </a>
                    </Card.Body>
                    <Card.Footer className="card-footer">
                        <Link href={project.repo}>Repo</Link>
                    </Card.Footer>
                </Card>
            </Col>
        );
    }

    return null;
}

export default Project;
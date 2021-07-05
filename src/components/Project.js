import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

// xs={6} md={2}
const Project = ({ project }) => {
    if (project) {
        return (
            <Col >
                <Card className="d-flex justify-content-center">
                    <Card.Body>
                        <a href={project.deployed}>
                            <Card.Title>{project.name}</Card.Title>
                            <Card.Img src={project.image} alt={project.description}></Card.Img>
                        </a>
                    </Card.Body>
                    <Card.Footer className="card-footer">
                        <Button className="foot-button" variant="secondary" href={project.repo}>Repo</Button>
                    </Card.Footer>
                </Card>
            </Col>
        );
    }

    return null;
}

export default Project;
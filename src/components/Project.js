import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const Project = ({project}) => {
    if (project) {
        return (
                <Card>
                    <a href={project.deployed}>
                        <Card.Title>{project.name}</Card.Title>
                    <Card.Body className="card-body">
                    <Card.Img src={project.image} alt={project.description}></Card.Img>
                    </Card.Body>
                    </a>
                    <Card.Footer className = "card-footer">
                        <Button className="foot-button" variant="secondary" href={project.repo}>Repo</Button>
                    </Card.Footer>
                </Card>
            );
    }

    return null;
}

export default Project;
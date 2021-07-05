import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';

const Project = ({project}) => {
    if (project) {
        return (
            <CardGroup className = "work-content-box">
                <Card>
                    <Card.Img src={project.image} alt={project.description}></Card.Img>
                    <Card.Body className="card-body">
                        <Card.Title>{project.name}</Card.Title>
                        <Card.Text>
                        {project.description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className = "card-footer">
                        <Button className="foot-button" variant="secondary" href={project.repo}>Repo</Button>
                        <Button className="foot-button" variant="secondary" href={project.deployed}>Deployed</Button> 
                    </Card.Footer>
                </Card>
            </CardGroup>
            );
    }

    return null;
}

export default Project;
import React from 'react';
import Project from '../components/Project';
import { Container, CardGroup, Row } from 'react-bootstrap';
import musicNotes from '../images/MusicNotes.png'
import ttah from '../images/TTAH.png'
import stockNews from '../images/StockNews.png'
import fitnessTracker from '../images/FitnessTracker.png';
import techBlog from '../images/TechBlog.png';
import noteTaker from '../images/NoteTaker.png'

const projects = [
    {
        name: 'Music Notes',
        image: musicNotes,
        deployed: 'https://uncbootcampmusicnotes.herokuapp.com/',
        repo: 'https://github.com/ntjohns1/Music-Notes'
    },
    {
        name: 'Tabletop Auction House',
        image: ttah,
        deployed: 'https://tabletop-auction-house-2.herokuapp.com/',
        repo: 'https://github.com/smakela13/tabletop-auction-house-react-edition'
    },
    {
        name: 'Stock News',
        image: stockNews,
        deployed: 'https://ntjohns1.github.io/-tock-News/',
        repo: 'https://github.com/ntjohns1/-tock-News'
    },
    {
        name: 'Fitness Tracker',
        image: fitnessTracker,
        deployed: 'https://github.com/ntjohns1/Fitness-Tracker',
        repo: 'https://github.com/ntjohns1/Fitness-Tracker'
    },
    {
        name: 'Tech Blog',
        image: techBlog,
        deployed: 'https://infinite-atoll-74792.herokuapp.com/',
        repo: 'https://github.com/ntjohns1/tech-blog'
    },
    {
        name: 'Note Taker',
        image: noteTaker,
        deployed: 'https://evening-savannah-32907.herokuapp.com/',
        repo: 'https://github.com/ntjohns1/Note_Taker'
    },
];

const renderProjects = () => {
    return (
        projects.map((project, i) => {
            return (
                <Project project={project} key={i + Date.now()} />
            );
        })
    );
};

export default function Work() {
    return (
        <Container className='mb-3'>
            <CardGroup id="work">
                <Row xs={1} md={2}>
                    {renderProjects()}
                </Row>
            </CardGroup>
        </Container>
    );
};
